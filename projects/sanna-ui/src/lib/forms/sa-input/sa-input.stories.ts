import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaInputComponent } from './sa-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const meta: Meta<SaInputComponent> = {
  title: 'Componentes/Forms/Input',
  component: SaInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule, FontAwesomeModule],
      providers: [FormBuilder]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: ''
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          let result = code;
          
          // Transformar property bindings innecesarios a attribute binding
          result = result.replace(/\[type\]="'([^']+)'"/g, 'type="$1"');
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[status\]="'([^']+)'"/g, 'status="$1"');
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[placeholder\]="'([^']+)'"/g, 'placeholder="$1"');
          result = result.replace(/\[value\]="'([^']+)'"/g, 'value="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[leftIcon\]="'([^']+)'"/g, 'leftIcon="$1"');
          result = result.replace(/\[rightIcon\]="'([^']+)'"/g, 'rightIcon="$1"');
          result = result.replace(/\[backgroundColor\]="'([^']+)'"/g, 'backgroundColor="$1"');
          result = result.replace(/\[textColor\]="'([^']+)'"/g, 'textColor="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[noLabel\]="true"/g, 'noLabel="true"');
          result = result.replace(/\[hideLabel\]="true"/g, 'hideLabel="true"');
          result = result.replace(/\[boldText\]="true"/g, 'boldText="true"');
          
          return result;
        }
      }
    },
    actions: { argTypesRegex: '^on.*' },
    controls: { expanded: true }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
      description: 'Tipo de input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'error'],
      description: 'Estado del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor del input',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Etiqueta del input',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
      table: {
        type: { summary: 'string' },
      },
    },
    errorText: {
      control: 'text',
      description: 'Texto de error',
      table: {
        type: { summary: 'string' },
      },
    },
    leftIcon: {
      control: 'text',
      description: 'Ícono izquierdo. Usa nombres de sa-icon (ej: "user", "email") o clases FontAwesome (ej: "fas fa-user")',
      table: {
        type: { summary: 'string' },
      },
    },
    rightIcon: {
      control: 'text',
      description: 'Ícono derecho. Usa nombres de sa-icon (ej: "search", "calendar") o clases FontAwesome (ej: "fas fa-search")',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Campo requerido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Campo de solo lectura',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Campo deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    backgroundColor: {
      control: 'color',
      description: 'Color de fondo personalizado del input (valor hexadecimal)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    textColor: {
      control: 'color',
      description: 'Color del texto personalizado del input (valor hexadecimal)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    boldText: {
      control: 'boolean',
      description: 'Hacer el texto del input en negrita (bold)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noLabel: {
      control: 'boolean',
      description: 'Ocultar el label pero mantener el espacio reservado (label fantasma)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideLabel: {
      control: 'boolean',
      description: 'Eliminar completamente el label y su espacio reservado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    // Eventos
    valueChange: {
      action: 'valueChange',
      description: 'Evento emitido cuando cambia el valor del input',
      table: {
        type: { summary: 'EventEmitter<string>' },
      },
    },
    change: {
      action: 'change',
      description: 'Evento nativo del DOM emitido cuando cambia el valor del input',
      table: {
        type: { summary: 'EventEmitter<Event>' },
      },
    },
    focus: {
      action: 'focus',
      description: 'Evento emitido cuando el input recibe el foco',
      table: {
        type: { summary: 'EventEmitter<FocusEvent>' },
      },
    },
    blur: {
      action: 'blur',
      description: 'Evento emitido cuando el input pierde el foco',
      table: {
        type: { summary: 'EventEmitter<FocusEvent>' },
      },
    },
    keyup: {
      action: 'keyup',
      description: 'Evento emitido en keyup del input',
      table: {
        type: { summary: 'EventEmitter<KeyboardEvent>' },
      },
    },
    keydown: {
      action: 'keydown',
      description: 'Evento emitido en keydown del input',
      table: {
        type: { summary: 'EventEmitter<KeyboardEvent>' },
      },
    },
    keypress: {
      action: 'keypress',
      description: 'Evento emitido en keypress del input',
      table: {
        type: { summary: 'EventEmitter<KeyboardEvent>' },
      },
    },
    enter: {
      action: 'enter',
      description: 'Evento emitido específicamente cuando se presiona Enter',
      table: {
        type: { summary: 'EventEmitter<KeyboardEvent>' },
      },
    },
  },

};

export default meta;
type Story = StoryObj<SaInputComponent>;



// Historia base
export const Basic: Story = {
  args: {
    label: 'Nombre',
    placeholder: 'Ingrese su nombre',
    size: 'md',
    type: 'text',
  }
};

// Ejemplo práctico de Enter
export const SearchExample: Story = {
  args: {
    ...Basic.args,
    label: 'Búsqueda',
    placeholder: 'Escribe y presiona Enter para buscar',
    rightIcon: 'search',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo práctico de uso del evento Enter para activar una búsqueda. Puedes usar `(enter)="onBuscar()"` en tu componente.'
      },
      source: { 
        language: 'html',
        code: `
<sa-input
  label="Búsqueda"
  placeholder="Escribe y presiona Enter para buscar"
  (enter)="onBuscar()"
  rightIcon="search">
</sa-input>

<!-- En tu componente TypeScript -->
export class MiComponente {
  onBuscar() {
    // Tu lógica de búsqueda aquí
    console.log('Búsqueda activada!');
  }
}`
      }
    }
  }
};

// Tamaños
export const Small: Story = {
  args: {
    ...Basic.args,
    size: 'sm',
    label: 'Input pequeño',
  }
};

export const Medium: Story = {
  args: {
    ...Basic.args,
    size: 'md',
    label: 'Input mediano',
  }
};

export const Large: Story = {
  args: {
    ...Basic.args,
    size: 'lg',
    label: 'Input grande',
  }
};

// Estados
export const Success: Story = {
  args: {
    ...Basic.args,
    status: 'success',
    label: 'Input exitoso',
    helperText: 'El valor es válido',
  }
};



export const Error: Story = {
  args: {
    ...Basic.args,
    status: 'error',
    label: 'Input con error',
    errorText: 'El valor ingresado no es válido',
  }
};

// Con íconos
export const WithLeftIcon: Story = {
  args: {
    ...Basic.args,
    label: 'Usuario',
    leftIcon: 'user', // Usando sa-icon (recomendado)
    placeholder: 'Ingrese su usuario',
  }
};

export const WithRightIcon: Story = {
  args: {
    ...Basic.args,
    label: 'Búsqueda',
    rightIcon: 'search', // Usando sa-icon (recomendado)
    placeholder: 'Buscar...',
  }
};

// Tipos especiales
export const Password: Story = {
  args: {
    ...Basic.args,
    type: 'password',
    label: 'Contraseña',
    placeholder: 'Ingrese su contraseña',
  }
};

export const Number: Story = {
  args: {
    ...Basic.args,
    type: 'number',
    label: 'Edad',
    placeholder: 'Ingrese su edad',
    min: 0,
    max: 120,
  }
};

// Estados especiales
export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    value: 'Valor deshabilitado',
    label: 'Input deshabilitado',
  }
};

export const ReadOnly: Story = {
  args: {
    ...Basic.args,
    readonly: true,
    value: 'Valor de solo lectura',
    label: 'Input de solo lectura',
  }
};

// Con texto de ayuda
export const WithHelperText: Story = {
  args: {
    ...Basic.args,
    label: 'Email',
    type: 'email',
    placeholder: 'ejemplo@dominio.com',
    helperText: 'Ingrese un email válido',
  }
};

// Requerido
export const Required: Story = {
  args: {
    ...Basic.args,
    label: 'Nombre completo',
    required: true,
    placeholder: 'Ingrese su nombre completo',
  }
};

// Colores personalizados
export const CustomBackgroundColor: Story = {
  args: {
    ...Basic.args,
    label: 'Fondo personalizado',
    placeholder: 'Input con fondo azul claro',
    backgroundColor: '#e6f3ff',
  }
};

export const CustomTextColor: Story = {
  args: {
    ...Basic.args,
    label: 'Texto personalizado',
    placeholder: 'Input con texto azul',
    textColor: '#0066cc',
  }
};

export const CustomColors: Story = {
  args: {
    ...Basic.args,
    label: 'Colores personalizados',
    placeholder: 'Fondo verde claro y texto verde oscuro',
    backgroundColor: '#f0f8f0',
    textColor: '#006600',
  }
};

export const BoldText: Story = {
  args: {
    ...Basic.args,
    label: 'Texto en negrita',
    placeholder: 'Escriba aquí... el texto aparecerá en negrita',
    value: 'Este texto está en negrita',
    boldText: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con texto en negrita usando la propiedad boldText.'
      },
      source: { type: 'dynamic' }
    }
  }
};

// Ejemplos de label
export const NoLabel: Story = {
  args: {
    ...Basic.args,
    label: 'Etiqueta original',
    placeholder: 'Input con noLabel (mantiene espacio fantasma)',
    noLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con noLabel activado. El label se oculta pero mantiene el espacio reservado para mantener la alineación con otros inputs.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const HideLabel: Story = {
  args: {
    ...Basic.args,
    label: 'Etiqueta original',
    placeholder: 'Input con hideLabel (sin espacio)',
    hideLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con hideLabel activado. El label se elimina completamente sin reservar espacio, ideal para inputs compactos.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const LabelComparison: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 500px;">
        <h3>Comparación de comportamiento del label</h3>
        
        <div style="margin-bottom: 20px;">
          <h4>Input normal con label</h4>
          <sa-input
            label="Etiqueta normal"
            placeholder="Input con label visible"
            value="Texto de ejemplo">
          </sa-input>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Input con noLabel (mantiene espacio fantasma)</h4>
          <sa-input
            label="Etiqueta oculta"
            placeholder="Input con noLabel"
            value="Texto de ejemplo"
            [noLabel]="true">
          </sa-input>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Input con hideLabel (sin espacio)</h4>
          <sa-input
            label="Etiqueta eliminada"
            placeholder="Input con hideLabel"
            value="Texto de ejemplo"
            [hideLabel]="true">
          </sa-input>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparación visual entre input normal, noLabel (mantiene espacio) y hideLabel (elimina completamente el espacio).'
      },
      source: {
        language: 'html',
        code: `
<!-- Input normal -->
<sa-input
  label="Etiqueta normal"
  placeholder="Input con label visible">
</sa-input>

<!-- noLabel: oculta label pero mantiene espacio -->
<sa-input
  label="Etiqueta oculta"
  placeholder="Input con noLabel"
  [noLabel]="true">
</sa-input>

<!-- hideLabel: elimina completamente el label y su espacio -->
<sa-input
  label="Etiqueta eliminada"
  placeholder="Input con hideLabel"
  [hideLabel]="true">
</sa-input>`
      }
    }
  }
};

// Eventos
export const KeyboardEvents: Story = {
  render: () => ({
    props: {
      mensaje: '',
      ultimoEvento: '',
      onBuscar: (event: KeyboardEvent) => {
        alert('¡Búsqueda activada con Enter!');
        console.log('Enter presionado:', event);
      },
      onKeyEvent: (eventName: string, event: KeyboardEvent) => {
        const key = event.key;
        const code = event.code;
        return `${eventName}: ${key} (${code})`;
      },
      onChange: (event: Event) => {
        console.log('change:', event);
        const target = event.target as HTMLInputElement;
        alert(`change: ${target.value}`);
      }
    },
    template: `
      <div style="padding: 20px; max-width: 600px;">
        <h3>Eventos de Teclado</h3>
        
        <div style="margin-bottom: 20px;">
          <h4>Buscar con Enter</h4>
          <sa-input
            label="Búsqueda"
            placeholder="Escribe y presiona Enter para buscar"
            (enter)="onBuscar($event)"
            rightIcon="search">
          </sa-input>
          <small class="text-muted">Presiona Enter para activar la búsqueda</small>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Monitor de eventos</h4>
          <sa-input
            label="Detector de teclas"
            placeholder="Escribe aquí para ver los eventos"
            [(ngModel)]="mensaje"
            (change)="onChange($event)"
            (keyup)="ultimoEvento = onKeyEvent('KeyUp', $event)"
            (keydown)="ultimoEvento = onKeyEvent('KeyDown', $event)"
            (enter)="ultimoEvento = 'ENTER detectado!'">
          </sa-input>
          <div style="margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px;">
            <strong>Último evento:</strong> {{ ultimoEvento || 'Ninguno' }}
          </div>
          <div style="margin-top: 5px;">
            <strong>Valor actual:</strong> {{ mensaje || 'Vacío' }}
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de uso de eventos de teclado. Incluye el evento específico `enter`, eventos generales como `keyup`, `keydown`, `keypress`, y el evento nativo `change`.'
      },
      source: {
        language: 'html',
        code: `
<!-- Evento Enter para búsqueda -->
<sa-input
  label="Búsqueda"
  placeholder="Escribe y presiona Enter para buscar"
  (enter)="onBuscar($event)"
  rightIcon="search">
</sa-input>

<!-- Eventos de teclado generales -->
<sa-input
  label="Detector de teclas"
  placeholder="Escribe aquí para ver los eventos"
  [(ngModel)]="mensaje"
  (change)="onChange($event)"
  (keyup)="onKeyUp($event)"
  (keydown)="onKeyDown($event)"
  (keypress)="onKeyPress($event)"
  (enter)="onEnter($event)">
</sa-input>

<!-- Typescript -->
export class MiComponente {
  mensaje: string = '';
  
  onBuscar(event: KeyboardEvent) {
    console.log('Búsqueda activada:', event);
    // Lógica de búsqueda aquí
  }
  
  onKeyUp(event: KeyboardEvent) {
    console.log('KeyUp:', event.key);
  }
  
  onEnter(event: KeyboardEvent) {
    console.log('Enter presionado:', event);
  }
}`
      }
    }
  }
};

// ViewChild Example
export const ViewChildExample: Story = {
  render: () => ({
    props: {
      inputRef: null as any,
      mensaje: '',
      configurarReferencia: function(inputComponent: any) {
        (this as any)['inputRef'] = inputComponent;
      },
      enfocarInput: function() {
        if ((this as any)['inputRef']) {
          (this as any)['inputRef'].focusInput();
        }
      },
      seleccionarTodo: function() {
        if ((this as any)['inputRef']) {
          (this as any)['inputRef'].selectAll();
        }
      },
      obtenerElementoNativo: function() {
        if ((this as any)['inputRef']) {
          const nativeElement = (this as any)['inputRef'].getNativeInput();
          console.log('Elemento nativo:', nativeElement);
          alert(`Elemento input nativo obtenido. Ver consola.`);
        }
      }
    },
    template: `
      <div style="padding: 20px; max-width: 600px;">
        <h3>Ejemplo de uso con ViewChild y Template Reference</h3>
        
        <div style="margin-bottom: 20px;">
          <sa-input
            #focusPacientes
            label="Campo con referencia"
            placeholder="Input con template reference #focusPacientes"
            [(ngModel)]="mensaje">
          </sa-input>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Controles programáticos:</h4>
          <button 
            type="button" 
            class="btn btn-primary me-2"
            (click)="configurarReferencia(focusPacientes); enfocarInput()">
            Enfocar Input
          </button>
          <button 
            type="button" 
            class="btn btn-secondary me-2"
            (click)="configurarReferencia(focusPacientes); seleccionarTodo()">
            Seleccionar Todo
          </button>
          <button 
            type="button" 
            class="btn btn-info"
            (click)="configurarReferencia(focusPacientes); obtenerElementoNativo()">
            Obtener Elemento Nativo
          </button>
        </div>
        
        <div style="padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
          <strong>Valor actual:</strong> {{ mensaje || 'Vacío' }}
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de uso con @ViewChild y template reference variables. Muestra cómo acceder al componente sa-input desde el código TypeScript.

## 📖 Documentación de uso:

### HTML Template
\`\`\`html
<sa-input 
  #focusPacientes
  label="Campo con referencia"
  placeholder="Input con template reference"
  [(ngModel)]="mensaje">
</sa-input>
\`\`\`

### TypeScript Component
\`\`\`typescript
@ViewChild('focusPacientes') focusPacientes!: SaInputComponent;

// Métodos disponibles:
this.focusPacientes.focusInput();
this.focusPacientes.selectAll();
const nativeInput = this.focusPacientes.getNativeInput();
\`\`\`
        `
      },
      source: {
        language: 'typescript',
        code: `
// HTML Template
<sa-input 
  #focusPacientes
  label="Campo con referencia"
  placeholder="Input con template reference"
  [(ngModel)]="mensaje">
</sa-input>

<button (click)="enfocarInput()">Enfocar</button>

// TypeScript Component
import { Component, ViewChild, ElementRef } from '@angular/core';
import { SaInputComponent } from './sa-input.component';

@Component({...})
export class MiComponente {
  @ViewChild('focusPacientes') focusPacientes!: SaInputComponent;
  
  // También puedes acceder al elemento HTML nativo directamente:
  @ViewChild('focusPacientes', { read: ElementRef }) focusPacientesElement!: ElementRef<HTMLElement>;
  
  mensaje: string = '';
  
  enfocarInput() {
    // Opción 1: Usar el método público del componente (recomendado)
    this.focusPacientes.focusInput();
    
    // Opción 2: Acceder al elemento nativo directamente
    const nativeInput = this.focusPacientes.getNativeInput();
    if (nativeInput) {
      nativeInput.focus();
    }
  }
  
  seleccionarTodo() {
    this.focusPacientes.selectAll();
  }
  
  obtenerValor() {
    return this.focusPacientes.value;
  }
}`
      }
    }
  }
};

// Ejemplos de integración
export const NgModelExample: Story = {
  render: () => ({
    props: {
      miVariable: ''
    },
    template: `
      <div style="padding: 20px; max-width: 400px;">
        <h3>Ejemplo con ngModel</h3>
        <sa-input [(ngModel)]="miVariable" 
                 label="ngModel" 
                 placeholder="Puedes escribir aquí!"
                 helperText="Este input está vinculado con ngModel"></sa-input>
        <p>Valor actual: <b>{{ miVariable }}</b></p>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso con ngModel para vinculación bidireccional de datos.'
      },
      source: {
        language: 'html',
        code: `
<!-- Componente -->
<sa-input
  [(ngModel)]="miVariable"
  label="ngModel"
  placeholder="Puedes escribir aquí!"
  helperText="Este input está vinculado con ngModel">
</sa-input>

<!-- Typescript -->
export class MiComponente {
  miVariable: string = '';
}`,
      },
    }
  }
};

export const ReactiveFormExample: Story = {
  render: () => {
    const fb = new FormBuilder();
    const form: FormGroup = fb.group({ campo: [''] });
    return {
      props: { form },
      template: `
        <div style="padding: 20px; max-width: 400px;">
          <h3>Ejemplo con Formulario Reactivo</h3>
          <form [formGroup]="form">
            <sa-input formControlName="campo" 
                     label="Reactivo" 
                     placeholder="Puedes escribir aquí!"
                     helperText="Este input está vinculado a un FormControl"></sa-input>
          </form>
          <p>Valor actual: <b>{{ form.get('campo')?.value }}</b></p>
        </div>
      `
    };
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso con Reactive Forms para una gestión más robusta del estado del formulario.'
      },
      source: {
        language: 'typescript',
        code: `
// Componente HTML
<form [formGroup]="form">
  <sa-input
    formControlName="campo"
    label="Reactivo"
    placeholder="Puedes escribir aquí!"
    helperText="Este input está vinculado a un FormControl">
  </sa-input>
</form>

// Typescript
export class MiComponente {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      campo: ['']  // Puedes agregar validadores aquí
    });
  }
}`,
      },
    }
  }
};