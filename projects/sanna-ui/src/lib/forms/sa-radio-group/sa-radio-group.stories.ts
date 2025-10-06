import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaRadioGroupComponent } from './sa-radio-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';
import { Component } from '@angular/core';

const meta: Meta<SaRadioGroupComponent> = {
  title: 'Componentes/Radio Group',
  component: SaRadioGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule],
      providers: [FormBuilder]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'Componente para agrupar múltiples radio buttons con un label común, validación y manejo de estado centralizado. Similar a mat-radio-group de Angular Material.'
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          let result = code;

          // Transformar property bindings innecesarios a attribute binding
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[status\]="'([^']+)'"/g, 'status="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');

          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');

          return result;
        }
      }
    },
    actions: { argTypesRegex: '^on.*' },
    controls: { expanded: true }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta del grupo de radio buttons'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de los radio buttons (se propaga a todos los hijos)'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error'],
      description: 'Estado visual del grupo (se propaga a todos los hijos)'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda del grupo'
    },
    errorText: {
      control: 'text',
      description: 'Texto de error del grupo'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Campo requerido (muestra asterisco rojo en el label)'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado (se propaga a todos los hijos)'
    },
    name: {
      control: 'text',
      description: 'Nombre del grupo (se propaga a todos los hijos)'
    }
  }
};

export default meta;
type Story = StoryObj<SaRadioGroupComponent>;

export const Default: Story = {
  args: {
    label: 'Selecciona una opción',
    size: 'md',
    status: 'default',
    helperText: 'Elige la opción que prefieras',
    errorText: '',
    required: false,
    disabled: false,
    name: 'default-group'
  },
  render: (args) => ({
    props: args,
    template: `
      <sa-radio-group
        [label]="label"
        [size]="size"
        [status]="status"
        [helperText]="helperText"
        [errorText]="errorText"
        [required]="required"
        [disabled]="disabled"
        [name]="name">
        <sa-radio value="option1" label="Opción 1"></sa-radio>
        <sa-radio value="option2" label="Opción 2"></sa-radio>
        <sa-radio value="option3" label="Opción 3"></sa-radio>
      </sa-radio-group>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio group básico con label, helper text y tres opciones. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Required: Story = {
  args: {
    label: '¿Aceptas los términos?',
    size: 'md',
    required: true,
    helperText: 'Este campo es obligatorio',
    status: 'default',
    errorText: '',
    disabled: false,
    name: 'required-group'
  },
  render: (args) => ({
    props: args,
    template: `
      <sa-radio-group
        [label]="label"
        [size]="size"
        [status]="status"
        [helperText]="helperText"
        [errorText]="errorText"
        [required]="required"
        [disabled]="disabled"
        [name]="name">
        <sa-radio value="option1" label="Opción 1"></sa-radio>
        <sa-radio value="option2" label="Opción 2"></sa-radio>
        <sa-radio value="option3" label="Opción 3"></sa-radio>
      </sa-radio-group>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio group requerido con asterisco rojo en el label. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const WithError: Story = {
  args: {
    label: 'Selecciona tu plan',
    size: 'md',
    status: 'error',
    errorText: 'Debes seleccionar un plan para continuar',
    helperText: '',
    required: false,
    disabled: false,
    name: 'error-group'
  },
  render: (args) => ({
    props: args,
    template: `
      <sa-radio-group
        [label]="label"
        [size]="size"
        [status]="status"
        [helperText]="helperText"
        [errorText]="errorText"
        [required]="required"
        [disabled]="disabled"
        [name]="name">
        <sa-radio value="option1" label="Opción 1"></sa-radio>
        <sa-radio value="option2" label="Opción 2"></sa-radio>
        <sa-radio value="option3" label="Opción 3"></sa-radio>
      </sa-radio-group>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio group con estado de error y mensaje de error visible. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Success: Story = {
  args: {
    label: 'Plan seleccionado',
    size: 'md',
    status: 'success',
    helperText: 'Plan validado correctamente',
    errorText: '',
    required: false,
    disabled: false,
    name: 'success-group'
  },
  render: (args) => ({
    props: args,
    template: `
      <sa-radio-group
        [label]="label"
        [size]="size"
        [status]="status"
        [helperText]="helperText"
        [errorText]="errorText"
        [required]="required"
        [disabled]="disabled"
        [name]="name">
        <sa-radio value="option1" label="Opción 1"></sa-radio>
        <sa-radio value="option2" label="Opción 2"></sa-radio>
        <sa-radio value="option3" label="Opción 3"></sa-radio>
      </sa-radio-group>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio group con estado de éxito (borde verde). Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Opciones deshabilitadas',
    size: 'md',
    disabled: true,
    helperText: 'Este grupo está deshabilitado',
    status: 'default',
    errorText: '',
    required: false,
    name: 'disabled-group'
  },
  render: (args) => ({
    props: args,
    template: `
      <sa-radio-group
        [label]="label"
        [size]="size"
        [status]="status"
        [helperText]="helperText"
        [errorText]="errorText"
        [required]="required"
        [disabled]="disabled"
        [name]="name">
        <sa-radio value="option1" label="Opción 1"></sa-radio>
        <sa-radio value="option2" label="Opción 2"></sa-radio>
        <sa-radio value="option3" label="Opción 3"></sa-radio>
      </sa-radio-group>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio group deshabilitado. Todos los radios hijos heredan el estado disabled. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="p-4">
        <div class="mb-4">
          <sa-radio-group label="Tamaño pequeño" size="sm" helperText="size='sm'">
            <sa-radio value="1" label="Opción 1"></sa-radio>
            <sa-radio value="2" label="Opción 2"></sa-radio>
          </sa-radio-group>
        </div>

        <div class="mb-4">
          <sa-radio-group label="Tamaño mediano" size="md" helperText="size='md'">
            <sa-radio value="1" label="Opción 1"></sa-radio>
            <sa-radio value="2" label="Opción 2"></sa-radio>
          </sa-radio-group>
        </div>

        <div class="mb-4">
          <sa-radio-group label="Tamaño grande" size="lg" helperText="size='lg'">
            <sa-radio value="1" label="Opción 1"></sa-radio>
            <sa-radio value="2" label="Opción 2"></sa-radio>
          </sa-radio-group>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tamaños disponibles: sm (pequeño), md (mediano) y lg (grande).'
      }
    }
  }
};

export const WithHelperTextOnRadios: Story = {
  render: (args) => ({
    props: args,
    template: `
      <sa-radio-group
        [label]="label"
        [size]="size"
        [required]="required">
        <sa-radio
          value="premium"
          label="Plan Premium"
          helperText="Incluye todas las características avanzadas">
        </sa-radio>
        <sa-radio
          value="standard"
          label="Plan Estándar"
          helperText="Características básicas incluidas">
        </sa-radio>
        <sa-radio
          value="free"
          label="Plan Gratuito"
          helperText="Funcionalidad limitada">
        </sa-radio>
      </sa-radio-group>
    `
  }),
  args: {
    label: 'Selecciona tu plan',
    size: 'lg',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio group donde cada opción tiene su propio helper text descriptivo. Nota: Esta historia usa un template personalizado para mostrar radios con helperText individual.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};
