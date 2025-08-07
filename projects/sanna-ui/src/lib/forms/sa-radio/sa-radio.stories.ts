import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaRadioComponent } from './sa-radio.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';

const meta: Meta<SaRadioComponent> = {
  title: 'Componentes/Forms/Radio',
  component: SaRadioComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule],
      providers: [FormBuilder]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'Componente de radio button que soporta diferentes tamaños y estados de validación. Compatible con ngModel y ReactiveForm. Basado en Bootstrap 5.'
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
          result = result.replace(/\[value\]="'([^']+)'"/g, 'value="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[id\]="'([^']+)'"/g, 'id="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[readonly\]="false"/g, 'readonly="false"');
          
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
      description: 'Etiqueta del radio button'
    },
    value: {
      control: 'text',
      description: 'Valor del radio button'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del radio button'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error'],
      description: 'Estado visual del radio button'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda debajo del radio button'
    },
    errorText: {
      control: 'text',
      description: 'Texto de error (solo se muestra si hay error)'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Campo requerido (muestra asterisco rojo)'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Solo lectura'
    },
    name: {
      control: 'text',
      description: 'Nombre del grupo de radio buttons'
    }
  }
};

export default meta;
type Story = StoryObj<SaRadioComponent>;

export const Default: Story = {
  args: {
    label: 'Opción 1',
    value: 'option1',
    name: 'defaultGroup',
    size: 'md',
    status: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button básico. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Required: Story = {
  args: {
    label: 'Opción obligatoria',
    value: 'required',
    name: 'requiredGroup',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button requerido con asterisco rojo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Opción deshabilitada',
    value: 'disabled',
    name: 'disabledGroup',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button deshabilitado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Radio pequeño',
    value: 'small',
    name: 'smallGroup',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button tamaño pequeño. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Radio grande',
    value: 'large',
    name: 'largeGroup',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button tamaño grande. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Success: Story = {
  args: {
    label: 'Opción validada correctamente',
    value: 'success',
    name: 'successGroup',
    status: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button con estado de éxito (borde verde). Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Error: Story = {
  args: {
    label: 'Opción con error',
    value: 'error',
    name: 'errorGroup',
    status: 'error',
    errorText: 'Debe seleccionar una opción válida',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button con estado de error (borde rojo) y mensaje de error. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Notificaciones por email',
    value: 'email',
    name: 'helperGroup',
    helperText: 'Recibirás todas las actualizaciones importantes',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button con texto de ayuda. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const RadioGroup: Story = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Grupo de Radio Buttons</h4>
        <div class="row">
          <div class="col-md-6">
            <h6>Método de pago</h6>
            <sa-radio
              label="Tarjeta de crédito"
              value="credit"
              name="payment"
              class="mb-2">
            </sa-radio>
            <sa-radio
              label="PayPal"
              value="paypal"
              name="payment"
              class="mb-2">
            </sa-radio>
            <sa-radio
              label="Transferencia bancaria"
              value="transfer"
              name="payment"
              class="mb-2">
            </sa-radio>
          </div>
          <div class="col-md-6">
            <h6>Tamaños</h6>
            <sa-radio
              label="Pequeño"
              value="sm"
              name="sizes"
              size="sm"
              class="mb-2">
            </sa-radio>
            <sa-radio
              label="Mediano"
              value="md"
              name="sizes"
              size="md"
              class="mb-2">
            </sa-radio>
            <sa-radio
              label="Grande"
              value="lg"
              name="sizes"
              size="lg"
              class="mb-2">
            </sa-radio>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de múltiples radio buttons agrupados por nombre. Solo una opción puede estar seleccionada por grupo.'
      },
      source: {
        code: `<div class="row">
  <div class="col-md-6">
    <h6>Método de pago</h6>
    <sa-radio label="Tarjeta de crédito" value="credit" name="payment"></sa-radio>
    <sa-radio label="PayPal" value="paypal" name="payment"></sa-radio>
    <sa-radio label="Transferencia bancaria" value="transfer" name="payment"></sa-radio>
  </div>
  <div class="col-md-6">
    <h6>Tamaños</h6>
    <sa-radio label="Pequeño" value="sm" name="sizes" size="sm"></sa-radio>
    <sa-radio label="Mediano" value="md" name="sizes" size="md"></sa-radio>
    <sa-radio label="Grande" value="lg" name="sizes" size="lg"></sa-radio>
  </div>
</div>`
      }
    }
  }
};

