import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaDateComponent } from './sa-date.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';

const meta: Meta<SaDateComponent> = {
  title: 'Componentes/Forms/Date',
  component: SaDateComponent,
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
          result = result.replace(/\[placeholder\]="'([^']+)'"/g, 'placeholder="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[id\]="'([^']+)'"/g, 'id="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          result = result.replace(/\[min\]="'([^']+)'"/g, 'min="$1"');
          result = result.replace(/\[max\]="'([^']+)'"/g, 'max="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[readonly\]="false"/g, 'readonly="false"');
          result = result.replace(/\[blockFutureDates\]="true"/g, 'blockFutureDates="true"');
          result = result.replace(/\[blockFutureDates\]="false"/g, 'blockFutureDates="false"');
          result = result.replace(/\[showCurrentDate\]="true"/g, 'showCurrentDate="true"');
          result = result.replace(/\[showCurrentDate\]="false"/g, 'showCurrentDate="false"');
          
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
      description: 'Etiqueta del campo de fecha'
    },
    value: {
      control: 'text',
      description: 'Valor de la fecha (formato ISO: YYYY-MM-DD)'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del campo de fecha'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error'],
      description: 'Estado visual del campo de fecha'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda debajo del campo'
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
    min: {
      control: 'text',
      description: 'Fecha mínima permitida (formato YYYY-MM-DD)'
    },
    max: {
      control: 'text',
      description: 'Fecha máxima permitida (formato YYYY-MM-DD)'
    },
    blockFutureDates: {
      control: { type: 'boolean' },
      description: 'Bloquear fechas futuras (establece max=hoy automáticamente)'
    },
    showCurrentDate: {
      control: { type: 'boolean' },
      description: 'Mostrar fecha actual como valor inicial'
    },
    placeholder: {
      control: 'text',
      description: 'Texto del placeholder'
    }
  }
};

export default meta;
type Story = StoryObj<SaDateComponent>;

export const Default: Story = {
  args: {
    label: 'Fecha de nacimiento',
    size: 'md',
    status: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha básico. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const WithValue: Story = {
  args: {
    label: 'Fecha seleccionada',
    value: '2025-05-08',
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha con valor predefinido. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Required: Story = {
  args: {
    label: 'Fecha de inicio',
    required: true,
    helperText: 'Este campo es obligatorio'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha requerido con asterisco rojo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const ShowCurrentDate: Story = {
  args: {
    label: 'Fecha actual',
    showCurrentDate: true,
    helperText: 'Se establece automáticamente la fecha de hoy'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo que muestra automáticamente la fecha actual como valor inicial. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const BlockFutureDates: Story = {
  args: {
    label: 'Fecha de evento (solo pasado)',
    blockFutureDates: true,
    helperText: 'No se pueden seleccionar fechas futuras'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo que bloquea automáticamente las fechas futuras. Útil para fechas de nacimiento o eventos pasados. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const DateRange: Story = {
  args: {
    label: 'Fecha del evento',
    min: '2024-01-01',
    max: '2024-12-31',
    helperText: 'Solo fechas del año 2024'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo con rango de fechas específico usando min y max. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Fecha deshabilitada',
    value: '2024-12-25',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha deshabilitado. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Readonly: Story = {
  args: {
    label: 'Fecha (solo lectura)',
    value: '2024-01-15',
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha en modo solo lectura. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Fecha pequeña',
    size: 'sm',
    value: '2024-06-15'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha tamaño pequeño. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Fecha grande',
    size: 'lg',
    value: '2024-09-20'
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha tamaño grande. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Success: Story = {
  args: {
    label: 'Fecha validada',
    value: '2024-03-10',
    status: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha con estado de éxito (borde verde). Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};

export const Error: Story = {
  args: {
    label: 'Fecha con error',
    value: '2024-02-30',
    status: 'error',
    errorText: 'La fecha seleccionada no es válida',
  },
  parameters: {
    docs: {
      description: {
        story: 'Campo de fecha con estado de error (borde rojo) y mensaje de error. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: { type: 'dynamic' }
    }
  }
};
