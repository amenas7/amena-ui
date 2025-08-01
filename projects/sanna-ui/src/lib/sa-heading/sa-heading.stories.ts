import type { Meta, StoryObj } from '@storybook/angular';
import { SaHeadingComponent } from './sa-heading.component';

const meta: Meta<SaHeadingComponent> = {
  title: 'Componentes/Typografia/Heading',
  component: SaHeadingComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          // Transformación simple que preserva el resaltado de sintaxis
          let result = code;
          
          // Solo children usa property binding, las demás NO tienen comillas simples
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[weight\]="'([^']+)'"/g, 'weight="$1"');
          result = result.replace(/\[mt\]="'([^']+)'"/g, 'mt="$1"');
          result = result.replace(/\[mb\]="'([^']+)'"/g, 'mb="$1"');
          result = result.replace(/\[mr\]="'([^']+)'"/g, 'mr="$1"');
          result = result.replace(/\[ml\]="'([^']+)'"/g, 'ml="$1"');
          
          // Limpiar espacios extra
          result = result.replace(/\n\s*\n/g, '\n');
          
          return result;
        }
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '🔤 **ÚNICA propiedad que usa property binding**: `[children]="\'Mi texto\'"` o `[children]="dynamicText"`. El contenido del encabezado.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'Tamaño del encabezado (xs=fs-6, sm=fs-5, md=fs-4, lg=fs-3, xl=fs-2, 2xl=fs-1, 3xl=display-6, 4xl=display-5, 5xl=display-4)'
    },
    weight: {
      control: 'select',
      options: ['bold', 'regular', 'light', 'semibold'],
      description: 'Peso de la fuente (bold=fw-bold, regular=fw-normal, light=fw-light, semibold=fw-semibold)'
    },
    mt: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-top usando clases Bootstrap (mt-0, mt-1, mt-2, mt-3, mt-4, mt-5, mt-auto)'
    },
    mb: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-bottom usando clases Bootstrap (mb-0, mb-1, mb-2, mb-3, mb-4, mb-5, mb-auto)'
    },
    mr: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-right usando clases Bootstrap (me-0, me-1, me-2, me-3, me-4, me-5, me-auto)'
    },
    ml: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-left usando clases Bootstrap (ms-0, ms-1, ms-2, ms-3, ms-4, ms-5, ms-auto)'
    }
  }
};

export default meta;
type Story = StoryObj<SaHeadingComponent>;

export const Default: Story = {
  args: {
    children: 'Encabezado por defecto',
    size: 'md',
    weight: 'bold'
  },
  parameters: {
    docs: {
      description: {
        story: 'Encabezado por defecto con tamaño mediano y peso bold. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div class="d-flex flex-column gap-2">
        <sa-heading [children]="'Tamaño XS'" size="xs" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño SM'" size="sm" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño MD'" size="md" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño LG'" size="lg" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño XL'" size="xl" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño 2XL'" size="2xl" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño 3XL'" size="3xl" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño 4XL'" size="4xl" weight="bold"></sa-heading>
        <sa-heading [children]="'Tamaño 5XL'" size="5xl" weight="bold"></sa-heading>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños disponibles del componente sa-heading, desde xs (más pequeño) hasta 5xl (más grande).'
      },
      source: {
        code: `<sa-heading [children]="'Tamaño XS'" size="xs" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño SM'" size="sm" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño MD'" size="md" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño LG'" size="lg" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño XL'" size="xl" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño 2XL'" size="2xl" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño 3XL'" size="3xl" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño 4XL'" size="4xl" weight="bold"></sa-heading>
<sa-heading [children]="'Tamaño 5XL'" size="5xl" weight="bold"></sa-heading>`
      }
    }
  }
}; 