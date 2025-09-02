import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaCheckboxComponent } from './sa-checkbox.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';

const meta: Meta<SaCheckboxComponent> = {
  title: 'Componentes/Forms/Checkbox',
  component: SaCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule],
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
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[status\]="'([^']+)'"/g, 'status="$1"');
          result = result.replace(/\[value\]="'([^']+)'"/g, 'value="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[id\]="'([^']+)'"/g, 'id="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[checked\]="true"/g, 'checked="true"');
          result = result.replace(/\[checked\]="false"/g, 'checked="false"');
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[readonly\]="false"/g, 'readonly="false"');
          result = result.replace(/\[indeterminate\]="true"/g, 'indeterminate="true"');
          result = result.replace(/\[indeterminate\]="false"/g, 'indeterminate="false"');
          result = result.replace(/\[bold\]="true"/g, 'bold="true"');
          result = result.replace(/\[bold\]="false"/g, 'bold="false"');
          
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
      description: 'Etiqueta del checkbox'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del checkbox'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error'],
      description: 'Estado visual del checkbox'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda debajo del checkbox'
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
    checked: {
      control: { type: 'boolean' },
      description: 'Estado marcado del checkbox'
    },
    value: {
      control: 'text',
      description: 'Valor del checkbox cuando está marcado'
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Estado indeterminado (guión en lugar de check)'
    },
    bold: {
      control: { type: 'boolean' },
      description: 'Texto del label en negrita'
    }
  }
};

export default meta;
type Story = StoryObj<SaCheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Acepto los términos y condiciones',
    size: 'md',
    status: 'default',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox básico sin seleccionar. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Checked: Story = {
  args: {
    label: 'Opción seleccionada',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox marcado por defecto. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Required: Story = {
  args: {
    label: 'Campo obligatorio',
    required: true,
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox requerido con asterisco rojo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Opción deshabilitada',
    disabled: true,
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox deshabilitado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const DisabledChecked: Story = {
  args: {
    label: 'Opción deshabilitada y marcada',
    disabled: true,
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox deshabilitado y marcado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Checkbox pequeño',
    size: 'sm',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox tamaño pequeño. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Checkbox grande',
    size: 'lg',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox tamaño grande. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Success: Story = {
  args: {
    label: 'Opción validada correctamente',
    status: 'success',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox con estado de éxito (borde verde). Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Error: Story = {
  args: {
    label: 'Opción con error',
    status: 'error',
    errorText: 'Debe aceptar los términos para continuar',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox con estado de error (borde rojo) y mensaje de error. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Recibir notificaciones',
    helperText: 'Recibirás emails con las últimas actualizaciones',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox con texto de ayuda. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Indeterminate: Story = {
  args: {
    label: 'Selección parcial',
    indeterminate: true,
    helperText: 'Algunos elementos están seleccionados',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox en estado indeterminado (muestra un guión). Útil para selecciones parciales en listas. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const BoldLabel: Story = {
  args: {
    label: 'Etiqueta en negrita',
    bold: true,
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox con etiqueta en negrita. Útil para destacar opciones importantes. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};


export const CheckboxGroup: Story = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Grupo de Checkboxes</h4>
        <div class="row">
          <div class="col-md-6">
            <h6>Intereses</h6>
            <sa-checkbox
              label="Deportes"
              class="mb-2">
            </sa-checkbox>
            <sa-checkbox
              label="Tecnología"
              class="mb-2">
            </sa-checkbox>
            <sa-checkbox
              label="Música"
              class="mb-2">
            </sa-checkbox>
            <sa-checkbox
              label="Arte"
              class="mb-2">
            </sa-checkbox>
          </div>
          <div class="col-md-6">
            <h6>Tamaños</h6>
            <sa-checkbox
              label="Pequeño"
              size="sm"
              class="mb-2">
            </sa-checkbox>
            <sa-checkbox
              label="Mediano"
              size="md"
              class="mb-2">
            </sa-checkbox>
            <sa-checkbox
              label="Grande"
              size="lg"
              class="mb-2">
            </sa-checkbox>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de múltiples checkboxes agrupados por categorías y diferentes tamaños.'
      },
      source: {
        code: `<div class="row">
  <div class="col-md-6">
    <h6>Intereses</h6>
    <sa-checkbox label="Deportes"></sa-checkbox>
    <sa-checkbox label="Tecnología"></sa-checkbox>
    <sa-checkbox label="Música"></sa-checkbox>
  </div>
  <div class="col-md-6">
    <h6>Tamaños</h6>
    <sa-checkbox label="Pequeño" size="sm"></sa-checkbox>
    <sa-checkbox label="Mediano" size="md"></sa-checkbox>
    <sa-checkbox label="Grande" size="lg"></sa-checkbox>
  </div>
</div>`
      }
    }
  }
};
