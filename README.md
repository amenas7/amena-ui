# Sanna UI

Librería de componentes UI desarrollada en **Angular 18.2.13** y documentada con **Storybook**.  
Facilita la construcción de interfaces consistentes, reutilizables y escalables.

---

## 🚀 Instalación

Agrega la dependencia en el `package.json` de tu proyecto principal:

```json
"dependencies": {
  "sanna-ui": "git+https://github.com/org-nsp-pacificoprestacion/nsp-dmas-ds-web-fe-design-system.git#v{version_tag}"
}

//Ejemplo real
"dependencies": {
  "sanna-ui": "git+https://github.com/org-nsp-pacificoprestacion/nsp-dmas-ds-web-fe-design-system.git#v0.0.1"
}
```
Luego instala las dependencias:
`npm install`

📦 Importar el módulo
En tu `app.module.ts` (o en el módulo que desees):
```import { SannaUiModule } from 'sanna-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SannaUiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

🎨 Uso de componentes

Ejemplo de uso en tu HTML:
```
<sa-calendar label="Fecha"></sa-calendar>

<sa-button
  label="Descargar reporte"
  variant="gray"
  icon="search"
  position="right"
  noAnimate="false"
></sa-button>
```

📚 Documentación con Storybook

Para ver todos los componentes disponibles
```
npm run storybook
```