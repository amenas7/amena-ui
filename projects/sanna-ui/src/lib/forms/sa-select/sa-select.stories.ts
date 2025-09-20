import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaSelectComponent } from './sa-select.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';

const meta: Meta<SaSelectComponent> = {
  title: 'Componentes/Forms/Select',
  component: SaSelectComponent,
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
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[readonly\]="false"/g, 'readonly="false"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          result = result.replace(/\[showPlaceholder\]="true"/g, 'showPlaceholder="true"');
          result = result.replace(/\[showPlaceholder\]="false"/g, 'showPlaceholder="false"');
          result = result.replace(/\[noLabel\]="true"/g, 'noLabel="true"');
          result = result.replace(/\[noLabel\]="false"/g, 'noLabel="false"');
          
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
      description: 'Etiqueta del select'
    },
    noLabel: {
      control: { type: 'boolean' },
      description: 'Mantiene el espacio del label pero lo hace invisible (útil para alineación)'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del select'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error'],
      description: 'Estado visual del select'
    },
    placeholder: {
      control: 'text',
      description: 'Texto del placeholder/opción por defecto'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda debajo del select'
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
    showPlaceholder: {
      control: { type: 'boolean' },
      description: 'Mostrar opción placeholder'
    },
    value: {
      control: 'text',
      description: 'Valor seleccionado'
    }
  }
};

export default meta;
type Story = StoryObj<SaSelectComponent>;

const defaultOptions = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3' },
  { value: '4', label: 'Opción 4' },
  { value: '5', label: 'Opción 5' },
];

export const Default: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    placeholder: '--Seleccione--',
    showPlaceholder: true,
    size: 'md',
    status: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select básico con placeholder. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const WithValue: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    value: '2',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con valor preseleccionado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Required: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    required: true,
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select requerido con asterisco rojo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    disabled: true,
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select deshabilitado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Readonly: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    readonly: true,
    value: '2',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select en modo solo lectura. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    size: 'sm',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select tamaño pequeño. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    size: 'lg',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select tamaño grande. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Success: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    status: 'success',
    value: '2',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con estado de éxito (borde verde). Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};



export const Error: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    status: 'error',
    errorText: 'Este campo es requerido',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con estado de error (borde rojo) y mensaje de error. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const CompleteForm: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="container-fluid p-4">
        <div class="row">
          <div class="col-md-6">
            <sa-select 
              [label]="'País'"
              [options]="[
                { value: 'pe', label: 'Perú' },
                { value: 'co', label: 'Colombia' },
                { value: 'mx', label: 'México' },
                { value: 'ar', label: 'Argentina' }
              ]"
              [required]="true"
              [placeholder]="'--Seleccione un país--'">
            </sa-select>
          </div>
          <div class="col-md-6">
            <sa-select 
              [label]="'Estado'"
              [options]="[
                { value: 'activo', label: 'Activo' },
                { value: 'inactivo', label: 'Inactivo' },
                { value: 'pendiente', label: 'Pendiente' }
              ]"
              [size]="'sm'"
              [helperText]="'Selecciona el estado del registro'">
            </sa-select>
          </div>
        </div>
      </div>
    `
  }),
  args: {},
};

export const WithHelperText: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    helperText: 'Selecciona la opción que mejor se adapte a tus necesidades',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con texto de ayuda. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithoutPlaceholder: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    showPlaceholder: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select sin opción placeholder. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Selecciona una opción',
    options: [
      { value: '1', label: 'Opción 1' },
      { value: '2', label: 'Opción 2', disabled: true },
      { value: '3', label: 'Opción 3' },
      { value: '4', label: 'Opción 4', disabled: true },
      { value: '5', label: 'Opción 5' },
    ],
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con algunas opciones deshabilitadas. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const NoLabelAlignment: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="container-fluid p-4">
        <h5 class="mb-3">Alineación perfecta usando noLabel</h5>
        <div class="row">
          <div class="col-md-6">
            <sa-select 
              label="Clasificación"
              size="sm"
              [options]="[
                { value: '1', label: 'Tipo A' },
                { value: '2', label: 'Tipo B' },
                { value: '3', label: 'Tipo C' }
              ]"
              placeholder="--Seleccione--">
            </sa-select>
          </div>
          <div class="col-md-6">
            <sa-select 
              [noLabel]="true"
              size="sm"
              [options]="[
                { value: 'activo', label: 'Activo' },
                { value: 'inactivo', label: 'Inactivo' },
                { value: 'pendiente', label: 'Pendiente' }
              ]"
              placeholder="--Seleccione--">
            </sa-select>
          </div>
        </div>
        <p class="mt-3 text-muted">
          <strong>Nota:</strong> El segundo select usa <code>noLabel="true"</code> para mantener el mismo espaciado que el primero con label, 
          logrando una alineación perfecta. Esto es útil cuando necesitas que algunos selects no tengan label visible pero 
          mantengan la misma altura que otros con label.
        </p>
      </div>
    `
  }),
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Demonstración de cómo usar `noLabel` para alinear perfectamente selects con y sin labels visibles. La propiedad `noLabel` mantiene el espacio del label pero lo hace invisible, útil para crear layouts balanceados.'
      }
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
            <sa-select 
              label="Tamaño Pequeño"
              size="sm"
              [options]="[
                { value: '1', label: 'Opción 1' },
                { value: '2', label: 'Opción 2' },
                { value: '3', label: 'Opción 3' }
              ]"
              placeholder="--Seleccione--"
              helperText="Altura: 23px, Font: 11px">
            </sa-select>
          </div>
          <div class="col-md-4">
            <h6 class="mb-3 text-muted">Medium (md)</h6>
            <sa-select 
              label="Tamaño Mediano"
              size="md"
              [options]="[
                { value: '1', label: 'Opción 1' },
                { value: '2', label: 'Opción 2' },
                { value: '3', label: 'Opción 3' }
              ]"
              placeholder="--Seleccione--"
              helperText="Altura: 30px, Font: 13px">
            </sa-select>
          </div>
          <div class="col-md-4">
            <h6 class="mb-3 text-muted">Large (lg)</h6>
            <sa-select 
              label="Tamaño Grande"
              size="lg"
              [options]="[
                { value: '1', label: 'Opción 1' },
                { value: '2', label: 'Opción 2' },
                { value: '3', label: 'Opción 3' }
              ]"
              placeholder="--Seleccione--"
              helperText="Altura: 37px, Font: 15px">
            </sa-select>
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
                  <th>Flecha Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>sm</code></td>
                  <td>23px</td>
                  <td>4px 28px 4px 8px</td>
                  <td>11px</td>
                  <td>5px</td>
                  <td>right 8px</td>
                </tr>
                <tr>
                  <td><code>md</code></td>
                  <td>30px</td>
                  <td>8px 36px 8px 12px</td>
                  <td>13px</td>
                  <td>6px</td>
                  <td>right 12px</td>
                </tr>
                <tr>
                  <td><code>lg</code></td>
                  <td>37px</td>
                  <td>10px 44px 10px 14px</td>
                  <td>15px</td>
                  <td>7px</td>
                  <td>right 14px</td>
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
        story: 'Comparación visual de los tres tamaños disponibles del componente sa-select. Muestra las diferencias sutiles entre sm, md y lg, incluyendo las especificaciones técnicas detalladas.'
      }
    }
  }
};