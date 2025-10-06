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
          result = result.replace(/\[saNumbersOnly\]="true"/g, '[saNumbersOnly]="true"');
          result = result.replace(/\[allowDecimals\]="true"/g, '[allowDecimals]="true"');
          result = result.replace(/\[allowNegative\]="true"/g, '[allowNegative]="true"');
          result = result.replace(/\[saLettersOnly\]="true"/g, '[saLettersOnly]="true"');
          result = result.replace(/\[allowSpaces\]="false"/g, '[allowSpaces]="false"');
          result = result.replace(/\[allowAccents\]="false"/g, '[allowAccents]="false"');
          
          // Transformar number properties
          result = result.replace(/\[rows\]="(\d+)"/g, 'rows="$1"');
          result = result.replace(/\[cols\]="(\d+)"/g, 'cols="$1"');
          result = result.replace(/\[minlength\]="(\d+)"/g, 'minlength="$1"');
          result = result.replace(/\[maxlength\]="(\d+)"/g, 'maxlength="$1"');
          result = result.replace(/\[height\]="(\d+)"/g, 'height="$1"');
          
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
    },
    height: {
      control: { type: 'number', min: 50, max: 500 },
      description: 'Altura fija en píxeles. Cuando se especifica, deshabilita el resize manual y habilita scroll vertical automático'
    },
    // Validaciones integradas
    saNumbersOnly: {
      control: 'boolean',
      description: 'Permitir solo números en el textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validaciones',
      },
    },
    allowDecimals: {
      control: 'boolean',
      description: 'Permitir decimales cuando saNumbersOnly está activo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validaciones',
      },
    },
    allowNegative: {
      control: 'boolean',
      description: 'Permitir números negativos cuando saNumbersOnly está activo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validaciones',
      },
    },
    maxDecimals: {
      control: 'number',
      description: 'Cantidad máxima de decimales permitidos (cuando allowDecimals es true)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '2' },
        category: 'Validaciones',
      },
    },
    saLettersOnly: {
      control: 'boolean',
      description: 'Permitir solo letras en el textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validaciones',
      },
    },
    allowSpaces: {
      control: 'boolean',
      description: 'Permitir espacios cuando saLettersOnly está activo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Validaciones',
      },
    },
    allowAccents: {
      control: 'boolean',
      description: 'Permitir acentos y caracteres especiales (ñ, ü) cuando saLettersOnly está activo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Validaciones',
      },
    },
    // Eventos
    valueChange: {
      action: 'valueChange',
      description: 'Evento emitido cuando cambia el valor del textarea',
      table: {
        type: { summary: 'EventEmitter<string>' },
        category: 'Eventos',
      },
    },
    change: {
      action: 'change',
      description: 'Evento nativo del DOM emitido cuando cambia el valor del textarea',
      table: {
        type: { summary: 'EventEmitter<Event>' },
        category: 'Eventos',
      },
    },
    focusin: {
      action: 'focusin',
      description: 'Evento emitido cuando el textarea recibe el foco',
      table: {
        type: { summary: 'EventEmitter<FocusEvent>' },
        category: 'Eventos',
      },
    },
    focusout: {
      action: 'focusout',
      description: 'Evento emitido cuando el textarea pierde el foco',
      table: {
        type: { summary: 'EventEmitter<FocusEvent>' },
        category: 'Eventos',
      },
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

export const FixedHeight: Story = {
  args: {
    label: 'Comentarios con altura fija',
    placeholder: 'Escriba aquí... Este textarea tiene altura fija de 150px.',
    value: 'Este textarea tiene una altura fija de 150 píxeles. Cuando el contenido excede esta altura, aparece automáticamente un scroll vertical. El resize manual está deshabilitado para mantener la altura constante.\n\nPuede escribir más texto aquí para ver cómo funciona el scroll automático.',
    height: 150,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea con altura fija en píxeles. Cuando se especifica la propiedad height, el resize manual se deshabilita y se habilita scroll vertical automático.'
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

export const AllSizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="container-fluid p-4">
        <h5 class="mb-4">Comparación de Tamaños</h5>
        <div class="row">
          <div class="col-md-4">
            <h6 class="mb-3 text-muted">Small (sm)</h6>
            <sa-textarea 
              label="Tamaño Pequeño"
              size="sm"
              placeholder="Escriba aquí..."
              rows="3"
              helperText="Altura: 23px, Font: 11px">
            </sa-textarea>
          </div>
          <div class="col-md-4">
            <h6 class="mb-3 text-muted">Medium (md)</h6>
            <sa-textarea 
              label="Tamaño Mediano"
              size="md"
              placeholder="Escriba aquí..."
              rows="3"
              helperText="Altura: 30px, Font: 13px">
            </sa-textarea>
          </div>
          <div class="col-md-4">
            <h6 class="mb-3 text-muted">Large (lg)</h6>
            <sa-textarea 
              label="Tamaño Grande"
              size="lg"
              placeholder="Escriba aquí..."
              rows="3"
              helperText="Altura: 37px, Font: 15px">
            </sa-textarea>
          </div>
        </div>
        
        <div class="mt-5">
          <h6 class="mb-3">Especificaciones Técnicas</h6>
          <div class="table-responsive">
            <table class="table table-sm table-bordered">
              <thead class="table-light">
                <tr>
                  <th>Tamaño</th>
                  <th>Altura (min-height)</th>
                  <th>Padding</th>
                  <th>Font Size</th>
                  <th>Border Radius</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>sm</code></td>
                  <td>23px</td>
                  <td>4px 8px</td>
                  <td>11px</td>
                  <td>5px</td>
                </tr>
                <tr>
                  <td><code>md</code></td>
                  <td>30px</td>
                  <td>8px 12px</td>
                  <td>13px</td>
                  <td>6px</td>
                </tr>
                <tr>
                  <td><code>lg</code></td>
                  <td>37px</td>
                  <td>10px 14px</td>
                  <td>15px</td>
                  <td>7px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
  }),
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Comparación visual de los tres tamaños disponibles del componente sa-textarea. Muestra las diferencias sutiles entre sm, md y lg, incluyendo las especificaciones técnicas detalladas.'
      }
    }
  }
};

// Validaciones integradas - Solo números
export const NumbersOnly: Story = {
  args: {
    label: 'Solo números',
    placeholder: 'Solo puedes ingresar números...',
    saNumbersOnly: true,
    allowDecimals: false,
    allowNegative: false,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea que solo permite números enteros positivos.'
      }
    }
  }
};

export const NumbersWithDecimals: Story = {
  args: {
    label: 'Números con decimales',
    placeholder: 'Números con hasta 2 decimales...',
    saNumbersOnly: true,
    allowDecimals: true,
    allowNegative: false,
    maxDecimals: 2,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea que permite números decimales con un máximo de 2 decimales.'
      }
    }
  }
};

export const NumbersWithNegative: Story = {
  args: {
    label: 'Números negativos',
    placeholder: 'Permite números negativos...',
    saNumbersOnly: true,
    allowDecimals: true,
    allowNegative: true,
    maxDecimals: 2,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea que permite números negativos y decimales.'
      }
    }
  }
};

// Validaciones integradas - Solo letras
export const LettersOnly: Story = {
  args: {
    label: 'Solo letras',
    placeholder: 'Solo puedes ingresar letras...',
    saLettersOnly: true,
    allowSpaces: true,
    allowAccents: true,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea que solo permite letras, espacios y acentos. Ideal para comentarios o descripciones.'
      }
    }
  }
};

export const LettersNoSpaces: Story = {
  args: {
    label: 'Letras sin espacios',
    placeholder: 'Solo letras, sin espacios...',
    saLettersOnly: true,
    allowSpaces: false,
    allowAccents: true,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea que solo permite letras sin espacios.'
      }
    }
  }
};

export const LettersNoAccents: Story = {
  args: {
    label: 'Letras sin acentos',
    placeholder: 'Solo letras básicas A-Z...',
    saLettersOnly: true,
    allowSpaces: true,
    allowAccents: false,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea que solo permite letras básicas del alfabeto inglés (A-Z) sin acentos ni caracteres especiales.'
      }
    }
  }
};

// Ejemplo práctico combinando validaciones
export const ValidationExample: Story = {
  render: () => ({
    props: {
      codigoLote: '',
      observaciones: '',
      diagnostico: ''
    },
    template: `
      <div style="padding: 20px; max-width: 700px;">
        <h3>Ejemplo práctico de validaciones en textarea</h3>

        <div style="margin-bottom: 20px;">
          <sa-textarea
            label="Código de lote (solo números)"
            placeholder="Ingrese códigos numéricos, uno por línea..."
            [(ngModel)]="codigoLote"
            [saNumbersOnly]="true"
            [allowDecimals]="false"
            [allowNegative]="false"
            [rows]="3"
            helperText="Solo se permiten números">
          </sa-textarea>
          <small><strong>Valor:</strong> {{ codigoLote || 'vacío' }}</small>
        </div>

        <div style="margin-bottom: 20px;">
          <sa-textarea
            label="Observaciones médicas (solo letras)"
            placeholder="Describa las observaciones..."
            [(ngModel)]="observaciones"
            [saLettersOnly]="true"
            [allowSpaces]="true"
            [allowAccents]="true"
            [rows]="4"
            helperText="Solo letras, espacios y acentos permitidos">
          </sa-textarea>
          <small><strong>Valor:</strong> {{ observaciones || 'vacío' }}</small>
        </div>

        <div style="margin-bottom: 20px;">
          <sa-textarea
            label="Valores de diagnóstico (números con decimales)"
            placeholder="Ingrese valores numéricos..."
            [(ngModel)]="diagnostico"
            [saNumbersOnly]="true"
            [allowDecimals]="true"
            [allowNegative]="true"
            [maxDecimals]="2"
            [rows]="3"
            helperText="Permite decimales y negativos">
          </sa-textarea>
          <small><strong>Valor:</strong> {{ diagnostico || 'vacío' }}</small>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo práctico que muestra cómo usar las diferentes validaciones en textareas para casos de uso reales.'
      },
      source: {
        language: 'html',
        code: `
<!-- Código de lote: solo números enteros -->
<sa-textarea
  label="Código de lote (solo números)"
  placeholder="Ingrese códigos numéricos..."
  [(ngModel)]="codigoLote"
  [saNumbersOnly]="true"
  [allowDecimals]="false"
  [allowNegative]="false"
  [rows]="3">
</sa-textarea>

<!-- Observaciones: solo letras -->
<sa-textarea
  label="Observaciones médicas (solo letras)"
  placeholder="Describa las observaciones..."
  [(ngModel)]="observaciones"
  [saLettersOnly]="true"
  [allowSpaces]="true"
  [allowAccents]="true"
  [rows]="4">
</sa-textarea>

<!-- Valores: números con decimales -->
<sa-textarea
  label="Valores de diagnóstico"
  placeholder="Ingrese valores numéricos..."
  [(ngModel)]="diagnostico"
  [saNumbersOnly]="true"
  [allowDecimals]="true"
  [allowNegative]="true"
  [maxDecimals]="2"
  [rows]="3">
</sa-textarea>

<!-- TypeScript -->
export class MiComponente {
  codigoLote: string = '';
  observaciones: string = '';
  diagnostico: string = '';
}`
      }
    }
  }
};