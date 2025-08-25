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
## Uso con Angular Forms:

### Template-driven Forms (ngModel):
\`\`\`html
<sa-calendar 
  [(ngModel)]="fechaSeleccionada" 
  label="Fecha"
  (dateSelect)="onDateSelect($event)">
</sa-calendar>
\`\`\`

### Reactive Forms:
\`\`\`html
<sa-calendar 
  [formControl]="fechaControl"
  label="Fecha"
  (dateSelect)="onDateSelect($event)">
</sa-calendar>
\`\`\`
        `
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          let result = code;
          
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

// Selección múltiple
export const MultiSelect: Story = {
  args: {
    label: 'Selección múltiple',
    placeholder: 'Selecciona múltiples fechas',
    config: {
      allowMultiSelect: true,
      closeOnSelect: false
    } as CalendarConfig
  },
  parameters: {
    docs: {
      story: { height: '450px' }
    }
  }
};

// Selección de rango
export const RangeSelect: Story = {
  args: {
    label: 'Selección de rango',
    placeholder: 'Selecciona un rango de fechas',
    config: {
      allowRangeSelect: true,
      closeOnSelect: false
    } as CalendarConfig
  },
  parameters: {
    docs: {
      story: { height: '450px' }
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

// Ejemplo con reactive forms
@Component({
  template: `
    <form [formGroup]="form" class="d-flex flex-column gap-3">
      <sa-calendar 
        formControlName="startDate"
        label="Fecha de inicio"
        placeholder="Fecha no seleccionada"
        [validation]="{ minDate: minDate }"
        size="md">
      </sa-calendar>
      
      <sa-calendar 
        formControlName="endDate"
        label="Fecha de fin"
        placeholder="Fecha no seleccionada"
        [validation]="{ minDate: form.get('startDate')?.value || minDate }"
        size="md">
      </sa-calendar>
      
      <div class="mt-3">
        <h6>Valores del formulario:</h6>
        <pre>{{ form.value | json }}</pre>
        
        <h6>Estado del formulario:</h6>
        <p>Válido: {{ form.valid ? 'Sí' : 'No' }}</p>
        <p>Errores: {{ form.errors | json }}</p>
      </div>
    </form>
  `
})
class ReactiveFormComponent {
  form: FormGroup;
  minDate = new Date();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }
}

export const ReactiveForm: Story = {
  render: () => ({
    moduleMetadata: {
      declarations: [ReactiveFormComponent]
    },
    component: ReactiveFormComponent
  }),
  parameters: {
    docs: {
      story: { height: '600px' }
    }
  }
};
