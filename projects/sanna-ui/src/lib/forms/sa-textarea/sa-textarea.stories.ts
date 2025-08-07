import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaTextareaComponent } from './sa-textarea.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';

const meta: Meta<SaTextareaComponent> = {
  title: 'Componentes/Forms/Textarea',
  component: SaTextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule],
      providers: [FormBuilder]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'Componente de textarea que soporta diferentes tamaños, estados y opciones de redimensionamiento. Compatible con ngModel y ReactiveForm.'
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
          result = result.replace(/\[placeholder\]="'([^']+)'"/g, 'placeholder="$1"');
          result = result.replace(/\[value\]="'([^']+)'"/g, 'value="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[id\]="'([^']+)'"/g, 'id="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          result = result.replace(/\[resize\]="'([^']+)'"/g, 'resize="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[readonly\]="false"/g, 'readonly="false"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          
          // Transformar number properties
          result = result.replace(/\[rows\]="(\d+)"/g, 'rows="$1"');
          result = result.replace(/\[cols\]="(\d+)"/g, 'cols="$1"');
          result = result.replace(/\[minlength\]="(\d+)"/g, 'minlength="$1"');
          result = result.replace(/\[maxlength\]="(\d+)"/g, 'maxlength="$1"');
          
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
      description: 'Etiqueta del textarea'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del textarea'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error'],
      description: 'Estado visual del textarea'
    },
    placeholder: {
      control: 'text',
      description: 'Texto del placeholder'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda debajo del textarea'
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
    value: {
      control: 'text',
      description: 'Valor del textarea'
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Número de filas visibles'
    },
    cols: {
      control: { type: 'number', min: 10, max: 100 },
      description: 'Número de columnas (ancho en caracteres)'
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: 'Tipo de redimensionamiento permitido'
    },
    minlength: {
      control: { type: 'number', min: 0 },
      description: 'Longitud mínima del texto'
    },
    maxlength: {
      control: { type: 'number', min: 1 },
      description: 'Longitud máxima del texto'
    }
  }
};

export default meta;
type Story = StoryObj<SaTextareaComponent>;

export const Default: Story = {
  args: {
    label: 'Comentarios',
    placeholder: 'Escriba sus comentarios aquí...',
    size: 'md',
    status: 'default',
    rows: 3,
    resize: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea básico con placeholder. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithValue: Story = {
  args: {
    label: 'Descripción',
    value: 'Este es un texto de ejemplo que ya está en el textarea.',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea con valor predefinido. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Required: Story = {
  args: {
    label: 'Mensaje',
    placeholder: 'Este campo es obligatorio...',
    required: true,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea requerido con asterisco rojo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Textarea deshabilitado',
    value: 'Este contenido no se puede editar.',
    disabled: true,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea deshabilitado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Readonly: Story = {
  args: {
    label: 'Información (solo lectura)',
    value: 'Este contenido es de solo lectura.',
    readonly: true,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea en modo solo lectura. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Textarea pequeño',
    placeholder: 'Tamaño pequeño...',
    size: 'sm',
    rows: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea tamaño pequeño. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Textarea grande',
    placeholder: 'Tamaño grande...',
    size: 'lg',
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea tamaño grande. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Success: Story = {
  args: {
    label: 'Comentario validado',
    value: 'Este comentario ha sido validado correctamente.',
    status: 'success',
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea con estado de éxito (borde verde). Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Error: Story = {
  args: {
    label: 'Mensaje con error',
    value: 'Contenido con errores...',
    status: 'error',
    errorText: 'El mensaje debe tener al menos 10 caracteres',
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea con estado de error (borde rojo) y mensaje de error. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Comparta sus comentarios...',
    helperText: 'Sus comentarios nos ayudan a mejorar el servicio',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea con texto de ayuda. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const ResizeOptions: Story = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Opciones de Redimensionamiento</h4>
        <div class="row">
          <div class="col-md-6 mb-3">
            <sa-textarea
              label="No redimensionable"
              placeholder="resize='none'"
              resize="none"
              rows="3">
            </sa-textarea>
          </div>
          <div class="col-md-6 mb-3">
            <sa-textarea
              label="Vertical"
              placeholder="resize='vertical'"
              resize="vertical"
              rows="3">
            </sa-textarea>
          </div>
          <div class="col-md-6 mb-3">
            <sa-textarea
              label="Horizontal"
              placeholder="resize='horizontal'"
              resize="horizontal"
              rows="3">
            </sa-textarea>
          </div>
          <div class="col-md-6 mb-3">
            <sa-textarea
              label="Ambas direcciones"
              placeholder="resize='both'"
              resize="both"
              rows="3">
            </sa-textarea>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes opciones de redimensionamiento del textarea.'
      },
      source: {
        code: `<sa-textarea resize="none" label="No redimensionable"></sa-textarea>
<sa-textarea resize="vertical" label="Solo vertical"></sa-textarea>
<sa-textarea resize="horizontal" label="Solo horizontal"></sa-textarea>
<sa-textarea resize="both" label="Ambas direcciones"></sa-textarea>`
      }
    }
  }
};

export const WithLengthLimits: Story = {
  args: {
    label: 'Comentario (100-500 caracteres)',
    placeholder: 'Escriba entre 100 y 500 caracteres...',
    minlength: 100,
    maxlength: 500,
    helperText: 'Mínimo 100 caracteres, máximo 500',
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea con límites de longitud mínima y máxima. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};
