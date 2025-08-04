import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaInputComponent } from './sa-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';

export default {
  title: 'Componentes/Forms/Input',
  component: SaInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'Componente de input personalizable con soporte para ngModel y formularios reactivos.'
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          // Transformación simple que preserva el resaltado de sintaxis
          let result = code;
          
          // Eliminar propiedades string vacías completamente
          result = result.replace(/\s*\[leftIcon\]="''"\s*/g, '');
          result = result.replace(/\s*\[rightIcon\]="''"\s*/g, '');
          result = result.replace(/\s*\[helperText\]="''"\s*/g, '');
          result = result.replace(/\s*\[errorText\]="''"\s*/g, '');
          result = result.replace(/\s*\[name\]="''"\s*/g, '');
          result = result.replace(/\s*\[id\]="''"\s*/g, '');
          result = result.replace(/\s*\[pattern\]="''"\s*/g, '');
          
          // Transformar property bindings con valor a attribute binding (solo placeholder mantiene property binding)
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[variant\]="'([^']+)'"/g, 'variant="$1"');
          result = result.replace(/\[type\]="'([^']+)'"/g, 'type="$1"');
          result = result.replace(/\[name\]="'([^']+)'"/g, 'name="$1"');
          result = result.replace(/\[id\]="'([^']+)'"/g, 'id="$1"');
          result = result.replace(/\[helperText\]="'([^']+)'"/g, 'helperText="$1"');
          result = result.replace(/\[errorText\]="'([^']+)'"/g, 'errorText="$1"');
          result = result.replace(/\[leftIcon\]="'([^']+)'"/g, 'leftIcon="$1"');
          result = result.replace(/\[rightIcon\]="'([^']+)'"/g, 'rightIcon="$1"');
          result = result.replace(/\[pattern\]="'([^']+)'"/g, 'pattern="$1"');
          result = result.replace(/\[autocomplete\]="'([^']+)'"/g, 'autocomplete="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          result = result.replace(/\[readonly\]="true"/g, 'readonly="true"');
          result = result.replace(/\[readonly\]="false"/g, 'readonly="false"');
          result = result.replace(/\[required\]="true"/g, 'required="true"');
          result = result.replace(/\[required\]="false"/g, 'required="false"');
          result = result.replace(/\[showPasswordToggle\]="true"/g, 'showPasswordToggle="true"');
          result = result.replace(/\[showPasswordToggle\]="false"/g, 'showPasswordToggle="false"');
          
          // Eliminar propiedades numéricas con valor 0
          result = result.replace(/\s*\[maxlength\]="0"\s*/g, '');
          result = result.replace(/\s*\[minlength\]="0"\s*/g, '');
          
          // Limpiar espacios extra y líneas vacías
          result = result.replace(/\n\s*\n/g, '\n');
          result = result.replace(/\s+>/g, '>');
          
          return result;
        }
      }
    }
  },
  argTypes: {
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
    showPasswordToggle: { control: 'boolean' },
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    maxlength: { control: 'number' },
    minlength: { control: 'number' },
    pattern: { control: 'text' },

    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    required: { control: 'boolean' }
  }
} as Meta<SaInputComponent>;

type Story = StoryObj<SaInputComponent>;

export const PersonalizableNgModel: Story = {
  render: (args) => ({
    props: {
      ...args,
      testValue: ''
    },
    template: `
      <sa-input
        [(ngModel)]="testValue"
        [placeholder]="placeholder"
        [label]="label"
        [helperText]="helperText"
        [maxlength]="maxlength"
      ></sa-input>

      <div style="margin-top: 1rem;">
        <strong>Valor actual:</strong> <code *ngIf="testValue">{{ testValue }}</code>
      </div>
    `
  }),
  args: {
    placeholder: 'Escribe algo aquí...',
    label: 'Nombre',
    helperText: 'Texto de ayuda',
    maxlength: 100
  },
  parameters: {
    docs: {
      description: {
        story: 'Input personalizable con todas las variantes y controles. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic',
        code: `<sa-input
  [(ngModel)]="testValue"
  [placeholder]="placeholder"
  [label]="label"
  [helperText]="helperText"
  [maxlength]="maxlength"
></sa-input>`
      }
    }
  }
};

export const PersonalizableReactive: Story = {
  args: {
    placeholder: 'Escribe algo aquí...',
    label: 'Input personalizable (Reactivo)',
    helperText: 'Texto de ayuda',
    maxlength: 100
  },
  parameters: {
    docs: {
      description: {
        story: 'Input personalizable usando formularios reactivos. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};