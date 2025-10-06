import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaCalendarComponent } from './sa-calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { 
  CalendarColors, 
  CalendarConfig, 
  CalendarLocale, 
  CalendarValidation,
  CalendarEvent,
  DEFAULT_CALENDAR_LOCALE 
} from '../../types/calendar.types';

const meta: Meta<SaCalendarComponent> = {
  title: 'Componentes/Forms/Calendar',
  component: SaCalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      providers: [FormBuilder]
    })
  ],
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      story: {
        height: '500px'
      },
      description: {
        component: `
## 📅 Formatos de Fecha Soportados

**IMPORTANTE**: El componente sa-calendar acepta múltiples formatos para minDate y maxDate:

\`\`\`typescript
// ✅ Todos estos formatos funcionan:
minDate: new Date()                    // Objeto Date
minDate: '2025-08-24'                  // String ISO (YYYY-MM-DD)
minDate: 1756011600000                 // Timestamp en milisegundos
minDate: new Date('2025-08-24')        // Constructor con string
\`\`\`
        `
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          let result = code;
          
          // Transformar timestamps de fecha a formato legible
          result = result.replace(/\[minDate\]="(\d+)"/g, (match, timestamp) => {
            const date = new Date(parseInt(timestamp));
            return `[minDate]="new Date('${date.toISOString().split('T')[0]}')"`;
          });
          result = result.replace(/\[maxDate\]="(\d+)"/g, (match, timestamp) => {
            const date = new Date(parseInt(timestamp));
            return `[maxDate]="new Date('${date.toISOString().split('T')[0]}')"`;
          });
          
          // Transformar property bindings innecesarios a attribute binding (strings)
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[status\]="'([^']+)'"/g, 'status="$1"');
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[placeholder\]="'([^']+)'"/g, 'placeholder="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[required\]="true"/g, 'required');
          result = result.replace(/\[disabled\]="true"/g, 'disabled');
          result = result.replace(/\[inline\]="true"/g, 'inline');
          result = result.replace(/\[showInput\]="true"/g, 'showInput');
          result = result.replace(/\[readonly\]="true"/g, 'readonly');
          
          // Eliminar boolean properties false (no necesarios)
          result = result.replace(/\[required\]="false"\s*/g, '');
          result = result.replace(/\[disabled\]="false"\s*/g, '');
          result = result.replace(/\[inline\]="false"\s*/g, '');
          result = result.replace(/\[showInput\]="false"\s*/g, '');
          result = result.replace(/\[readonly\]="false"\s*/g, '');
          
          // Limpiar objetos vacíos o por defecto
          result = result.replace(/\[locale\]="{\s*}"\s*/g, '');
          result = result.replace(/\[colors\]="{\s*}"\s*/g, '');
          result = result.replace(/\[config\]="{\s*}"\s*/g, '');
          result = result.replace(/\[validation\]="{\s*}"\s*/g, '');
          result = result.replace(/\[events\]="null"\s*/g, '');
          result = result.replace(/\[events\]="\[\]"\s*/g, '');
          
          // Limpiar atributos vacíos y espacios extra
          result = result.replace(/\s+\w+=""\s*/g, ' ');
          result = result.replace(/\s+>/g, '>');
          result = result.replace(/\s{2,}/g, ' ');
          
          return result;
        }
      }
    }
  },
  argTypes: {
    size: {
      description: 'Tamaño del componente',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    status: {
      description: 'Estado del componente',
      control: { type: 'select' },
      options: ['default', 'success', 'error']
    },
    label: {
      description: 'Etiqueta del campo',
      control: { type: 'text' }
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
    placeholder: {
      description: 'Texto de placeholder',
      control: { type: 'text' }
    },
    helperText: {
      description: 'Texto de ayuda',
      control: { type: 'text' }
    },
    errorText: {
      description: 'Texto de error',
      control: { type: 'text' }
    },
    required: {
      description: 'Campo requerido',
      control: { type: 'boolean' }
    },
    readonly: {
      description: 'Solo lectura',
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Deshabilitado',
      control: { type: 'boolean' }
    },
    minDate: {
      description: 'Fecha mínima seleccionable',
      control: { 
        type: 'date' 
      },
      table: {
        type: { summary: 'Date | string | number' },
        defaultValue: { summary: 'null' }
      }
    },
    maxDate: {
      description: 'Fecha máxima seleccionable',
      control: { 
        type: 'date' 
      },
      table: {
        type: { summary: 'Date | string | number' },
        defaultValue: { summary: 'null' }
      }
    },
    inline: {
      description: 'Mostrar calendario inline (sin input)',
      control: { type: 'boolean' }
    },
    showInput: {
      description: 'Mostrar campo de input',
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<SaCalendarComponent>;

// Historia básica
export const Default: Story = {
  args: {
    label: 'Fecha de inicio',
    placeholder: 'Fecha no seleccionada',
  },
  parameters: {
    docs: {
      story: { height: '450px' }
    }
  }
};

// Tamaños
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="d-flex flex-column gap-3">
        <sa-calendar 
          size="sm" 
          label="Pequeño (sm)" 
          placeholder="Calendario pequeño">
        </sa-calendar>
        
        <sa-calendar 
          size="md" 
          label="Mediano (md)" 
          placeholder="Calendario mediano">
        </sa-calendar>
        
        <sa-calendar 
          size="lg" 
          label="Grande (lg)" 
          placeholder="Calendario grande">
        </sa-calendar>
      </div>
    `
  }),
  parameters: {
    docs: {
      story: { height: '550px' },
      source: {
        code: `
<!-- Tamaño pequeño -->
<sa-calendar 
  size="sm" 
  label="Pequeño (sm)" 
  placeholder="Calendario pequeño">
</sa-calendar>

<!-- Tamaño mediano (por defecto) -->
<sa-calendar 
  size="md" 
  label="Mediano (md)" 
  placeholder="Calendario mediano">
</sa-calendar>

<!-- Tamaño grande -->
<sa-calendar 
  size="lg" 
  label="Grande (lg)" 
  placeholder="Calendario grande">
</sa-calendar>
        `,
        language: 'html'
      }
    }
  }
};

// Estados
export const States: Story = {
  render: () => ({
    template: `
      <div class="d-flex flex-column gap-3">
        <sa-calendar 
          status="default" 
          label="Estado normal" 
          placeholder="Normal">
        </sa-calendar>
        
        <sa-calendar 
          status="success" 
          label="Estado exitoso" 
          placeholder="Exitoso"
          helperText="Fecha válida">
        </sa-calendar>
        
        <sa-calendar 
          status="error" 
          label="Estado error" 
          placeholder="Error"
          errorText="Fecha inválida">
        </sa-calendar>
        
        <sa-calendar 
          disabled="true" 
          label="Deshabilitado" 
          placeholder="Deshabilitado">
        </sa-calendar>
        
        <sa-calendar 
          readonly="true" 
          label="Solo lectura" 
          placeholder="Solo lectura">
        </sa-calendar>
      </div>
    `
  }),
  parameters: {
    docs: {
      story: { height: '600px' },
      source: {
        code: `
<!-- Estado normal -->
<sa-calendar 
  status="default" 
  label="Estado normal" 
  placeholder="Normal">
</sa-calendar>

<!-- Estado exitoso -->
<sa-calendar 
  status="success" 
  label="Estado exitoso" 
  placeholder="Exitoso"
  helperText="Fecha válida">
</sa-calendar>

<!-- Estado error -->
<sa-calendar 
  status="error" 
  label="Estado error" 
  placeholder="Error"
  errorText="Fecha inválida">
</sa-calendar>

<!-- Deshabilitado -->
<sa-calendar 
  disabled 
  label="Deshabilitado" 
  placeholder="Deshabilitado">
</sa-calendar>

<!-- Solo lectura -->
<sa-calendar 
  readonly 
  label="Solo lectura" 
  placeholder="Solo lectura">
</sa-calendar>
        `,
        language: 'html'
      }
    }
  }
};

// Calendario inline
export const Inline: Story = {
  args: {
    inline: true,
    showInput: false
  },
  parameters: {
    docs: {
      story: { height: '400px' }
    }
  }
};


// Colores personalizados
export const CustomColors: Story = {
  args: {
    label: 'Colores personalizados',
    placeholder: 'Calendario con colores custom',
    colors: {
      primary: '#8b5cf6',
      secondary: '#64748b',
      success: '#10b981',
      error: '#f97316',
      background: '#fefefe',
      surface: '#f1f5f9',
      border: '#cbd5e1',
      weekdayHeaderBg: '#e0e7ff',
      weekdayHeaderColor: '#3730a3'
    } as CalendarColors
  },
  parameters: {
    docs: {
      story: { height: '450px' }
    }
  }
};


// Validaciones
export const WithValidations: Story = {
  args: {
    label: 'Con validaciones',
    placeholder: 'Solo fechas futuras habilitadas',
    validation: {
      minDate: new Date(),
      disabledDays: [0, 6] // Deshabilitar fines de semana
    } as CalendarValidation,
    helperText: 'Solo fechas futuras, sin fines de semana'
  },
  parameters: {
    docs: {
      story: { height: '450px' }
    }
  }
};

// Ejemplo básico con fechas min/max
export const MinMaxExample: Story = {
  args: {
    label: 'Fecha con restricciones',
    placeholder: 'Solo fechas futuras',
    helperText: 'Solo puedes seleccionar fechas desde hoy en adelante',
    minDate: '2024-01-15', // Formato YYYY-MM-DD para Storybook
    maxDate: '2024-07-15'  // 6 meses después
  },
  parameters: {
    docs: {
      story: { height: '450px' },
      description: {
        story: `
## Ejemplo básico de fechas mínimas y máximas

Este ejemplo muestra un calendario que:
- **minDate**: Solo permite fechas desde hoy en adelante
- **maxDate**: Solo permite fechas hasta 6 meses en el futuro
- Los botones de navegación se deshabilitan automáticamente cuando no hay fechas válidas

**💡 Tip**: Puedes usar cualquier formato de fecha (Date, string, timestamp) como se muestra en la documentación principal.

### Código TypeScript:
\`\`\`typescript
export class MiComponente {
  // Usando objetos Date
  today = new Date();
  maxDate6Months = new Date();
  
  // O usando strings ISO
  minDateString = '2024-01-15';
  maxDateString = '2024-07-15';
  
  constructor() {
    this.maxDate6Months.setMonth(this.today.getMonth() + 6);
  }
}
\`\`\`
        `
      }
    }
  }
};

// Solo fechas pasadas
export const OnlyPastDates: Story = {
  args: {
    label: 'Fecha de nacimiento',
    placeholder: 'Selecciona una fecha pasada',
    helperText: 'Solo fechas anteriores a hoy',
    maxDate: '2023-12-31' // Solo fechas hasta el año pasado
  },
  parameters: {
    docs: {
      story: { height: '450px' },
      description: {
        story: `
## Solo fechas pasadas

Ejemplo para casos como fecha de nacimiento, fecha de eventos históricos, etc.

**Formatos de fecha soportados:**

### Código TypeScript:
\`\`\`typescript
export class MiComponente {
  // ✅ Usando objeto Date
  yesterday = new Date();
  
  // ✅ Usando string ISO
  maxDateString = '2023-12-31';
  
  // ✅ Usando timestamp
  maxDateTimestamp = 1704067199000; // 31 dic 2023
  
  constructor() {
    this.yesterday.setDate(this.yesterday.getDate() - 1);
  }
}
\`\`\`

### Template HTML:
\`\`\`html
<sa-calendar 
  [maxDate]="yesterday"
  label="Fecha de nacimiento"
  placeholder="Selecciona una fecha pasada"
  helperText="Solo fechas anteriores a hoy">
</sa-calendar>
\`\`\`
        `
      }
    }
  }
};

// Fechas mínimas y máximas - Ejemplos completos
export const MinMaxDates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
        <h3>Control de Fechas Mínimas y Máximas</h3>
        
        <div>
          <h4>Solo fechas futuras (minDate = hoy)</h4>
          <sa-calendar 
            [minDate]="today"
            label="Fecha de reserva"
            placeholder="Selecciona una fecha futura"
            helperText="Solo puedes seleccionar fechas a partir de hoy">
          </sa-calendar>
        </div>
        
        <div>
          <h4>Solo próximos 30 días</h4>
          <sa-calendar 
            [minDate]="today"
            [maxDate]="maxDate30Days"
            label="Fecha de entrega"
            placeholder="Dentro de 30 días"
            helperText="Fechas disponibles: hoy hasta {{ maxDate30Days | date:'dd/MM/yyyy' }}">
          </sa-calendar>
        </div>
        
        <div>
          <h4>Solo fechas pasadas (maxDate = ayer)</h4>
          <sa-calendar 
            [maxDate]="yesterday"
            label="Fecha de nacimiento"
            placeholder="Selecciona una fecha pasada"
            helperText="Solo fechas anteriores a hoy">
          </sa-calendar>
        </div>
        
        <div>
          <h4>Rango específico (próxima semana)</h4>
          <sa-calendar 
            [minDate]="nextWeekStart"
            [maxDate]="nextWeekEnd"
            label="Fecha de cita"
            placeholder="Solo próxima semana"
            helperText="Del {{ nextWeekStart | date:'dd/MM/yyyy' }} al {{ nextWeekEnd | date:'dd/MM/yyyy' }}">
          </sa-calendar>
        </div>
      </div>
    `,
    props: {
      today: new Date(),
      yesterday: (() => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
      })(),
      maxDate30Days: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date;
      })(),
      nextWeekStart: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
      })(),
      nextWeekEnd: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 13);
        return date;
      })()
    }
  }),
  parameters: {
    docs: {
      story: { height: '700px' },
      source: {
        code: `// Componente TypeScript
export class MiComponente {
  today = new Date();
  yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  maxDate30Days = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  nextWeekStart = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  nextWeekEnd = new Date(Date.now() + 13 * 24 * 60 * 60 * 1000);
}

<!-- 1. Solo fechas futuras (minDate = hoy) -->
<sa-calendar 
  [minDate]="today"
  label="Fecha de reserva"
  placeholder="Selecciona una fecha futura"
  helperText="Solo puedes seleccionar fechas a partir de hoy">
</sa-calendar>

<!-- 2. Solo próximos 30 días -->
<sa-calendar 
  [minDate]="today"
  [maxDate]="maxDate30Days"
  label="Fecha de entrega"
  placeholder="Dentro de 30 días"
  helperText="Fechas disponibles: hoy hasta {{ maxDate30Days | date:'dd/MM/yyyy' }}">
</sa-calendar>

<!-- 3. Solo fechas pasadas (maxDate = ayer) -->
<sa-calendar 
  [maxDate]="yesterday"
  label="Fecha de nacimiento"
  placeholder="Selecciona una fecha pasada"
  helperText="Solo fechas anteriores a hoy">
</sa-calendar>

<!-- 4. Rango específico (próxima semana) -->
<sa-calendar 
  [minDate]="nextWeekStart"
  [maxDate]="nextWeekEnd"
  label="Fecha de cita"
  placeholder="Solo próxima semana"
  helperText="Del {{ nextWeekStart | date:'dd/MM/yyyy' }} al {{ nextWeekEnd | date:'dd/MM/yyyy' }}">
</sa-calendar>`
      }
    }
  }
};

export const LabelComparison: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 500px;">
        <h3>Comparación de comportamiento del label</h3>
        
        <div style="margin-bottom: 20px;">
          <h4>Calendar normal con label</h4>
          <sa-calendar
            label="Etiqueta normal"
            placeholder="Seleccionar fecha"
            size="md">
          </sa-calendar>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Calendar con noLabel (mantiene espacio fantasma)</h4>
          <sa-calendar
            label="Etiqueta oculta"
            placeholder="Seleccionar fecha"
            size="md"
            [noLabel]="true">
          </sa-calendar>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h4>Calendar con hideLabel (sin espacio)</h4>
          <sa-calendar
            label="Etiqueta eliminada"
            placeholder="Seleccionar fecha"
            size="md"
            [hideLabel]="true">
          </sa-calendar>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparación visual entre calendar normal, noLabel (mantiene espacio) y hideLabel (elimina completamente el espacio).'
      },
      source: {
        language: 'html',
        code: `
<!-- Calendar normal con label -->
<sa-calendar
  label="Etiqueta normal"
  placeholder="Seleccionar fecha"
  size="md">
</sa-calendar>

<!-- Calendar con noLabel (mantiene espacio fantasma) -->
<sa-calendar
  label="Etiqueta oculta"
  placeholder="Seleccionar fecha"
  size="md"
  [noLabel]="true">
</sa-calendar>

<!-- Calendar con hideLabel (sin espacio) -->
<sa-calendar
  label="Etiqueta eliminada"
  placeholder="Seleccionar fecha"
  size="md"
  [hideLabel]="true">
</sa-calendar>
        `
      }
    }
  }
};
