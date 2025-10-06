import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SaSwitchComponent } from './sa-switch.component';

const meta: Meta<SaSwitchComponent> = {
  title: 'Componentes/Forms/Switch',
  component: SaSwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
  parameters: {
    layout: 'centered',
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
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[status\]="'([^']+)'"/g, 'status="$1"');
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[id\]="'([^']+)'"/g, 'id="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[value\]="true"/g, '[value]="true"');
          result = result.replace(/\[value\]="false"/g, '[value]="false"');
          result = result.replace(/\[required\]="true"/g, 'required="true"');
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
    value: { 
      control: 'boolean',
      description: 'Estado del switch (activado/desactivado)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: { 
      control: 'select', 
      options: ['default', 'success', 'error'],
      description: 'Estado visual del switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    label: { 
      control: 'text', 
      description: 'Texto del label',
      table: {
        type: { summary: 'string' },
      },
    },
    noLabel: {
      control: { type: 'boolean' },
      description: 'Ocultar el label pero mantener el espacio reservado (label fantasma)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideLabel: {
      control: { type: 'boolean' },
      description: 'Eliminar completamente el label y su espacio reservado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    required: { 
      control: 'boolean', 
      description: 'Campo requerido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: { 
      control: 'boolean', 
      description: 'Switch deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    id: { 
      control: 'text', 
      description: 'ID del elemento',
      table: {
        type: { summary: 'string' },
      },
    },
    name: { 
      control: 'text', 
      description: 'Nombre del campo',
      table: {
        type: { summary: 'string' },
      },
    },
    // Eventos
    valueChange: {
      action: 'valueChange',
      description: 'Evento emitido cuando cambia el estado del switch',
      table: {
        type: { summary: 'EventEmitter<boolean>' },
        category: 'Eventos',
      },
    },
    change: {
      action: 'change',
      description: 'Evento nativo del DOM emitido cuando cambia el estado del switch',
      table: {
        type: { summary: 'EventEmitter<boolean>' },
        category: 'Eventos',
      },
    },
    focusin: {
      action: 'focusin',
      description: 'Evento emitido cuando el switch recibe el foco',
      table: {
        type: { summary: 'EventEmitter<FocusEvent>' },
        category: 'Eventos',
      },
    },
    focusout: {
      action: 'focusout',
      description: 'Evento emitido cuando el switch pierde el foco',
      table: {
        type: { summary: 'EventEmitter<FocusEvent>' },
        category: 'Eventos',
      },
    }
  },
};

export default meta;
type Story = StoryObj<SaSwitchComponent>;

export const Default: Story = {
  args: {
    label: 'Activar notificaciones',
    value: false,
    size: 'md',
    status: 'default',
  },
};

export const Checked: Story = {
  args: {
    label: 'Activar modo oscuro',
    value: true,
    size: 'md',
    status: 'default',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Recibir emails promocionales',
    helperText: 'Puedes cambiar esta configuración en cualquier momento',
    value: false,
    size: 'md',
    status: 'default',
  },
};

export const WithError: Story = {
  args: {
    label: 'Aceptar términos y condiciones',
    errorText: 'Debes aceptar los términos para continuar',
    required: true,
    value: false,
    size: 'md',
    status: 'error',
  },
};

export const Success: Story = {
  args: {
    label: 'Configuración guardada',
    value: true,
    size: 'md',
    status: 'success',
  },
};

export const Required: Story = {
  args: {
    label: 'Acepto los términos de servicio',
    required: true,
    value: false,
    size: 'md',
    status: 'default',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Función no disponible',
    disabled: true,
    value: false,
    size: 'md',
    status: 'default',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Configuración fija',
    disabled: true,
    value: true,
    size: 'md',
    status: 'default',
  },
};

export const Small: Story = {
  args: {
    label: 'Switch pequeño',
    value: false,
    size: 'sm',
    status: 'default',
  },
};

export const Large: Story = {
  args: {
    label: 'Switch grande',
    value: true,
    size: 'lg',
    status: 'default',
  },
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <sa-switch 
          label="Switch pequeño" 
          size="sm" 
          [value]="true">
        </sa-switch>
        <sa-switch 
          label="Switch mediano (default)" 
          size="md" 
          [value]="true">
        </sa-switch>
        <sa-switch 
          label="Switch grande" 
          size="lg" 
          [value]="true">
        </sa-switch>
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <sa-switch 
          label="Estado default" 
          status="default" 
          [value]="true">
        </sa-switch>
        <sa-switch 
          label="Estado de éxito" 
          status="success" 
          [value]="true">
        </sa-switch>
        <sa-switch 
          label="Estado de error" 
          status="error" 
          errorText="Configuración inválida"
          [value]="false">
        </sa-switch>
      </div>
    `,
  }),
};

export const WithReactiveForms: Story = {
  render: () => ({
    template: `
      <form [formGroup]="switchForm" style="max-width: 400px;">
        <sa-switch 
          formControlName="notifications"
          id="notifications"
          name="notifications"
          label="Recibir notificaciones"
          helperText="Te enviaremos actualizaciones importantes">
        </sa-switch>
        
        <sa-switch 
          formControlName="marketing"
          id="marketing"
          name="marketing"
          label="Emails de marketing"
          helperText="Ofertas y promociones especiales">
        </sa-switch>
        
        <sa-switch 
          formControlName="terms"
          id="terms"
          name="terms"
          label="Acepto los términos de servicio"
          required="true"
          [errorText]="switchForm.get('terms')?.invalid && switchForm.get('terms')?.touched ? 'Debes aceptar los términos' : ''">
        </sa-switch>
        
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f8f9fa; border-radius: 0.375rem;">
          <strong>Valores del formulario:</strong>
          <pre>{{ switchForm.value | json }}</pre>
          <strong>Estado del formulario:</strong> {{ switchForm.valid ? 'Válido' : 'Inválido' }}
        </div>
      </form>
    `,
    props: {
      switchForm: new FormBuilder().group({
        notifications: [true],
        marketing: [false],
        terms: [false, (control: any) => control.value ? null : { required: true }]
      })
    }
  }),
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
};

export const NoLabel: Story = {
  args: {
    ...Default.args,
    label: 'Etiqueta original',
    noLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch con noLabel activado. El label se oculta pero mantiene el espacio reservado para mantener la alineación con otros switches.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const HideLabel: Story = {
  args: {
    ...Default.args,
    label: 'Etiqueta original',
    hideLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch con hideLabel activado. El label se elimina completamente sin reservar espacio, ideal para switches compactos.'
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
          <h4>Switch normal con label</h4>
          <sa-switch
            label="Etiqueta normal"
            [value]="true"
            size="md">
          </sa-switch>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Switch con noLabel (mantiene espacio fantasma)</h4>
          <sa-switch
            label="Etiqueta oculta"
            [value]="false"
            size="md"
            [noLabel]="true">
          </sa-switch>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Switch con hideLabel (sin espacio)</h4>
          <sa-switch
            label="Etiqueta eliminada"
            [value]="false"
            size="md"
            [hideLabel]="true">
          </sa-switch>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparación visual entre switch normal, noLabel (mantiene espacio) y hideLabel (elimina completamente el espacio).'
      },
      source: {
        language: 'html',
        code: `
<!-- Switch normal con label -->
<sa-switch
  label="Etiqueta normal"
  [value]="true"
  size="md">
</sa-switch>

<!-- Switch con noLabel (mantiene espacio fantasma) -->
<sa-switch
  label="Etiqueta oculta"
  [value]="false"
  size="md"
  [noLabel]="true">
</sa-switch>

<!-- Switch con hideLabel (sin espacio) -->
<sa-switch
  label="Etiqueta eliminada"
  [value]="false"
  size="md"
  [hideLabel]="true">
</sa-switch>
        `
      }
    }
  }
};
