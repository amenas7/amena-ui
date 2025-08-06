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

# 6. Crear commit con los cambios
print_message "Creando commit con los cambios..."
git add .
git commit -m "feat: build sanna-ui v$NEW_VERSION"

# 7. Crear tag
print_message "Creando tag v$NEW_VERSION..."
git tag -a "v$NEW_VERSION" -m "Release version $NEW_VERSION"

# 8. Push a la rama build
print_message "Haciendo push a la rama build..."

# Crear una rama temporal para el build
BUILD_BRANCH="build-temp-$(date +%s)"
git checkout -b "$BUILD_BRANCH"

# Limpiar todo excepto el build
git rm -rf . --ignore-unmatch
git reset --hard

# Copiar solo el contenido del build
cp -r dist/sanna-ui/* .
rm -rf dist/

# Agregar todos los archivos del build
git add .

# Commit del build
git commit -m "build: sanna-ui v$NEW_VERSION"

# Verificar si la rama build existe remotamente
if git ls-remote --heads origin build | grep -q build; then
    print_message "La rama build existe remotamente. Actualizando..."
    # Forzar push a la rama build
    git push origin "$BUILD_BRANCH:build" --force
else
    print_message "Creando nueva rama build..."
    git push origin "$BUILD_BRANCH:build"
fi

# Volver a la rama principal
git checkout master

# Eliminar rama temporal
git branch -D "$BUILD_BRANCH"

# Push del tag
git push origin "v$NEW_VERSION"

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