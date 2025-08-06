#!/bin/bash

# Script para automatizar el build y deploy de sanna-ui
# Uso: ./build-and-deploy.sh [patch|minor|major]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar si estamos en el directorio correcto
if [ ! -f "angular.json" ]; then
    print_error "Debes ejecutar este script desde la raíz del proyecto"
    exit 1
fi

# Obtener el tipo de versionado (patch por defecto)
VERSION_TYPE=${1:-patch}

print_message "Iniciando proceso de build y deploy para sanna-ui..."

# 1. Limpiar builds anteriores
print_message "Limpiando builds anteriores..."
rm -rf dist/
rm -rf projects/sanna-ui/dist/

# 2. Instalar dependencias si es necesario
if [ ! -d "node_modules" ]; then
    print_message "Instalando dependencias..."
    npm install
fi

# 3. Incrementar versión manualmente
print_message "Incrementando versión ($VERSION_TYPE)..."
cd projects/sanna-ui

# Obtener versión actual
CURRENT_VERSION=$(node -p "require('./package.json').version")
print_message "Versión actual: $CURRENT_VERSION"

# Parsear versión
IFS='.' read -ra VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR=${VERSION_PARTS[0]}
MINOR=${VERSION_PARTS[1]}
PATCH=${VERSION_PARTS[2]}

# Incrementar según el tipo
case $VERSION_TYPE in
    "major")
        MAJOR=$((MAJOR + 1))
        MINOR=0
        PATCH=0
        ;;
    "minor")
        MINOR=$((MINOR + 1))
        PATCH=0
        ;;
    "patch")
        PATCH=$((PATCH + 1))
        ;;
    *)
        print_error "Tipo de versión inválido. Usa: patch, minor, o major"
        exit 1
        ;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"
print_message "Nueva versión: $NEW_VERSION"

# Actualizar package.json
node -e "
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
packageJson.version = '$NEW_VERSION';
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');
"

cd ../..

# 4. Build de la librería
print_message "Construyendo librería..."
npm run build:lib:prod

# 5. Verificar que el build se creó correctamente
if [ ! -d "dist/sanna-ui" ]; then
    print_error "El build no se creó correctamente"
    exit 1
fi

print_message "Build completado exitosamente en dist/sanna-ui/"

# 6. Preparar y actualizar la rama build usando un directorio temporal
print_message "Preparando actualización de la rama build..."

# Guardar la rama actual
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
print_message "Guardando referencia a la rama actual: $CURRENT_BRANCH"

# Crear directorio temporal
TEMP_DIR=$(mktemp -d)
print_message "Directorio temporal creado en: $TEMP_DIR"

# Copiar el contenido del build al directorio temporal
print_message "Copiando contenido del build al directorio temporal..."

# Copiar solo los archivos necesarios del build
print_message "Copiando archivos del build..."
cp -r dist/sanna-ui/esm2022 "$TEMP_DIR/"
cp -r dist/sanna-ui/fesm2022 "$TEMP_DIR/"
cp -r dist/sanna-ui/lib "$TEMP_DIR/"
cp -f dist/sanna-ui/package.json "$TEMP_DIR/"
cp -f dist/sanna-ui/index.d.ts "$TEMP_DIR/"
cp -f dist/sanna-ui/public-api.d.ts "$TEMP_DIR/"
cp -f dist/sanna-ui/.npmignore "$TEMP_DIR/" 2>/dev/null || true

# Crear un nuevo worktree temporal para la rama build
BUILD_WORKTREE="$TEMP_DIR/build-branch"
print_message "Creando worktree temporal para la rama build..."

# Guardar el directorio actual
ORIGINAL_DIR=$(pwd)

# Manejar la rama build de forma segura
if git ls-remote --heads origin build | grep -q build; then
    print_message "Rama build encontrada, creando worktree..."
    
    # Generar un nombre único para la rama temporal
    TEMP_BRANCH="temp-build-$(date +%s)"
    
    # Crear worktree sin cambiar la rama actual
    git worktree add --track -b "$TEMP_BRANCH" "$BUILD_WORKTREE" origin/build
    
    # Registrar la rama temporal para limpieza posterior
    echo "$TEMP_BRANCH" > "$TEMP_DIR/temp-branch-name"
else
    print_message "Rama build no encontrada, inicializando..."
    # Crear un worktree vacío sin cambiar la rama actual
    git worktree add --detach "$BUILD_WORKTREE"
    (
        cd "$BUILD_WORKTREE"
        git switch --orphan build
        git rm -rf . || true
    )
fi

# Cambiar al directorio del worktree de forma segura
cd "$BUILD_WORKTREE" || {
    print_error "No se pudo acceder al worktree"
    exit 1
}

# Limpiar TODOS los archivos primero
find . -mindepth 1 -maxdepth 1 -not -name '.git' -exec rm -rf {} +

# Copiar SOLO los archivos necesarios
cp -r "$TEMP_DIR"/esm2022 .
cp -r "$TEMP_DIR"/fesm2022 .
cp -r "$TEMP_DIR"/lib .
cp -f "$TEMP_DIR"/package.json .
cp -f "$TEMP_DIR"/index.d.ts .
cp -f "$TEMP_DIR"/public-api.d.ts .
cp -f "$TEMP_DIR"/.npmignore . 2>/dev/null || true

# Asegurarse de que no haya carpetas no deseadas
rm -rf .angular node_modules dist temp-branch-name .git/worktrees build-branch 2>/dev/null || true

# Verificar que solo existan los archivos necesarios
find . -mindepth 1 -maxdepth 1 ! -name 'esm2022' \
                               ! -name 'fesm2022' \
                               ! -name 'lib' \
                               ! -name 'package.json' \
                               ! -name 'index.d.ts' \
                               ! -name 'public-api.d.ts' \
                               ! -name '.npmignore' \
                               ! -name '.git' \
                               -exec rm -rf {} +

# Agregar y commitear los cambios
git add .
git commit -m "build: sanna-ui v$NEW_VERSION"

# Push a la rama build
print_message "Actualizando rama build..."
git push origin HEAD:build --force

# Volver al directorio original de forma segura
cd "$ORIGINAL_DIR" || {
    print_error "No se pudo volver al directorio original"
    exit 1
}

# Limpiar de forma segura
print_message "Limpiando recursos temporales..."

# Eliminar el worktree
git worktree remove -f "$BUILD_WORKTREE" || true

# Eliminar la rama temporal si existe
if [ -f "$TEMP_DIR/temp-branch-name" ]; then
    TEMP_BRANCH=$(cat "$TEMP_DIR/temp-branch-name")
    git branch -D "$TEMP_BRANCH" 2>/dev/null || true
fi

# Eliminar directorio temporal
rm -rf "$TEMP_DIR"

# Verificar que estamos en la rama correcta
FINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$FINAL_BRANCH" != "$CURRENT_BRANCH" ]; then
    print_warning "Detectado cambio no deseado de rama. Volviendo a la rama original..."
    git checkout "$CURRENT_BRANCH"
fi

# Crear tag desde la rama build
print_message "Creando tag v$NEW_VERSION desde la rama build..."
git tag -a "v$NEW_VERSION" -m "Release version $NEW_VERSION" HEAD

# Push del tag
git push origin "v$NEW_VERSION"

# Volver a master y crear commit con los cambios
git checkout master
print_message "Creando commit con los cambios..."
git add .
git commit -m "feat: build sanna-ui v$NEW_VERSION"
git push origin master

print_message "✅ Proceso completado exitosamente!"
print_message "📦 Nueva versión: $NEW_VERSION"
print_message "🔗 URLs para usar en otros proyectos:"
echo ""
echo "   Opción 1 (rama build):"
echo "   \"sanna-ui\": \"git+https://github.com/amenas7/amena-ui.git#build\""
echo ""
echo "   Opción 2 (tag específico - RECOMENDADA):"
echo "   \"sanna-ui\": \"git+https://github.com/amenas7/amena-ui.git#v$NEW_VERSION\""
echo ""
echo "   Opción 3 (commit específico):"
echo "   \"sanna-ui\": \"git+https://github.com/amenas7/amena-ui.git#$(git rev-parse HEAD)\""
echo ""
print_message "💡 Para forzar actualización, usa la Opción 2 con el tag específico"