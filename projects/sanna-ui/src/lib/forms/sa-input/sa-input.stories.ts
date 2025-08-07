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
        component: 'Componente de input que soporta diferentes tipos, tamaños y estados. Compatible con ngModel y ReactiveForm.'
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
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          
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

export const WithLeftIconFontAwesome: Story = {
  args: {
    ...Basic.args,
    label: 'Usuario (FontAwesome)',
    leftIcon: 'fas fa-user', // Usando clases CSS de FontAwesome
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