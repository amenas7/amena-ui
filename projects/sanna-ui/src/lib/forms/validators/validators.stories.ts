import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { ValidatorsModule } from './validators.module';

const meta: Meta = {
  title: 'Componentes/Forms/Directivas',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Las directivas de validación permiten controlar qué caracteres se pueden ingresar en los campos de entrada.

## Directivas Disponibles

### \`saLettersOnly\`
Permite solo letras en el input. **Por defecto incluye espacios y acentos.**

**Propiedades:**
- \`allowSpaces\`: boolean (default: true) - Permite espacios
- \`allowAccents\`: boolean (default: true) - Permite acentos y caracteres especiales del español

### \`saNumbersOnly\`
Permite solo números en el input. **Por defecto solo números enteros.**

**Propiedades:**
- \`allowDecimals\`: boolean (default: false) - Permite decimales
- \`allowNegative\`: boolean (default: false) - Permite números negativos
- \`maxDecimals\`: number (default: 2) - Máximo número de decimales


## Uso

\`\`\`html
<!-- Solo letras (con espacios y acentos por defecto) -->
<input saLettersOnly />

<!-- Solo números (enteros por defecto) -->
<input saNumbersOnly />

<!-- Números con decimales -->
<input saNumbersOnly [allowDecimals]="true" [maxDecimals]="2" />

\`\`\`
        `
      },
      source: {
        type: 'dynamic',
        language: 'html'
      }
    },
    controls: { expanded: true }
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ValidatorsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj;

export const LettersOnly: Story = {
  args: {
    allowSpaces: true,
    allowAccents: true
  },
  argTypes: {
    allowSpaces: {
      control: 'boolean',
      description: 'Permite espacios en el texto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    allowAccents: {
      control: 'boolean',
      description: 'Permite acentos y caracteres especiales del español',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <input
        type="text"
        saLettersOnly
        [allowSpaces]="allowSpaces"
        [allowAccents]="allowAccents"
        placeholder="Escribe solo letras..."
        style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Directiva que permite solo letras en el input. Por defecto incluye espacios y acentos.'
      },
      source: {
        type: 'dynamic',
        transform: (code: string, storyContext: any) => {
          const { allowSpaces, allowAccents } = storyContext.args;
          // Generar el código con los valores actuales
          return `<input type="text" saLettersOnly [allowSpaces]="${allowSpaces}" [allowAccents]="${allowAccents}" placeholder="Escribe solo letras..." />`;
        }
      }
    }
  }
};

export const NumbersOnly: Story = {
  args: {
    allowDecimals: false,
    allowNegative: false,
    maxDecimals: 2
  },
  argTypes: {
    allowDecimals: {
      control: 'boolean',
      description: 'Permite números decimales',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    allowNegative: {
      control: 'boolean',
      description: 'Permite números negativos',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    maxDecimals: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: 'Máximo número de decimales permitidos',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '2' }
      }
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <input
        type="text"
        saNumbersOnly
        [allowDecimals]="allowDecimals"
        [allowNegative]="allowNegative"
        [maxDecimals]="maxDecimals"
        placeholder="Escribe solo números..."
        style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Directiva que permite solo números en el input. Por defecto solo acepta números enteros positivos.'
      },
      source: {
        type: 'dynamic',
        transform: (code: string, storyContext: any) => {
          const { allowDecimals, allowNegative, maxDecimals } = storyContext.args;
          // Generar el código con los valores actuales
          return `<input type="text" saNumbersOnly [allowDecimals]="${allowDecimals}" [allowNegative]="${allowNegative}" [maxDecimals]="${maxDecimals}" placeholder="Escribe solo números..." />`;
        }
      }
    }
  }
};


