# Uso del Componente sa-input

## Uso básico (sin formularios)

Para usar el componente `sa-input` de manera básica en tu proyecto:

```html
<sa-input
  placeholder="Escribe algo aquí..."
  type="text"
  size="medium"
  variant="default"
  label="Input básico"
  helperText="Máximo de 100 dígitos">
</sa-input>
```

## Con valor inicial

```html
<sa-input
  placeholder="Escribe algo aquí..."
  value="Valor inicial"
  label="Input con valor"
  helperText="Este input tiene un valor por defecto">
</sa-input>
```

## Con binding bidireccional manual

```html
<sa-input
  [value]="miVariable"
  (valueChange)="miVariable = $event"
  placeholder="Escribe algo aquí..."
  label="Input con binding">
</sa-input>
```

```typescript
export class MiComponente {
  miVariable: string = '';
}
```

## Con formularios reactivos

```html
<form [formGroup]="miFormulario">
  <sa-input
    formControlName="campo"
    placeholder="Escribe algo aquí..."
    label="Input en formulario">
  </sa-input>
</form>
```

```typescript
export class MiComponente {
  miFormulario = this.fb.group({
    campo: ['']
  });

  constructor(private fb: FormBuilder) {}
}
```

## Con ngModel

```html
<sa-input
  [(ngModel)]="miVariable"
  placeholder="Escribe algo aquí..."
  label="Input con ngModel">
</sa-input>
```

## Propiedades disponibles

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `value` | `string` | `''` | Valor del input |
| `placeholder` | `string` | `''` | Texto placeholder |
| `type` | `InputType` | `'text'` | Tipo de input |
| `size` | `InputSize` | `'medium'` | Tamaño del input |
| `variant` | `InputVariant` | `'default'` | Variante visual |
| `label` | `string` | - | Etiqueta del input |
| `helperText` | `string` | - | Texto de ayuda |
| `errorText` | `string` | - | Texto de error |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `readonly` | `boolean` | `false` | Estado de solo lectura |
| `required` | `boolean` | `false` | Campo requerido |
| `leftIcon` | `string` | - | Icono izquierdo |
| `rightIcon` | `string` | - | Icono derecho |
| `showPasswordToggle` | `boolean` | `false` | Toggle de contraseña |

## Eventos disponibles

| Evento | Descripción |
|--------|-------------|
| `valueChange` | Se emite cuando cambia el valor |
| `focus` | Se emite cuando el input recibe foco |
| `blur` | Se emite cuando el input pierde foco |
| `input` | Se emite en cada cambio de entrada |

## Problemas comunes

### El input no permite escribir

**Solución**: Asegúrate de que tu módulo importe `FormsModule`:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // otros imports...
    FormsModule,
    SannaUiModule
  ],
  // ...
})
export class TuModulo { }
```

### El valor no se actualiza

**Solución**: Usa binding bidireccional:

```html
<!-- ✅ Correcto -->
<sa-input
  [value]="miVariable"
  (valueChange)="miVariable = $event">
</sa-input>

<!-- ❌ Incorrecto -->
<sa-input value="valor fijo"></sa-input>
```