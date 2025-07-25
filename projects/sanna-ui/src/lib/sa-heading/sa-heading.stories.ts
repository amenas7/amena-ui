import type { Meta, StoryObj } from '@storybook/angular';
import { SaHeadingComponent } from './sa-heading.component';

const meta: Meta<SaHeadingComponent> = {
  title: 'Componentes/Typografia/Heading',
  component: SaHeadingComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'El texto del encabezado'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'El tamaño del encabezado'
    },
    weight: {
      control: 'select',
      options: ['bold', 'regular', 'light', 'semibold'],
      description: 'El peso de la fuente (grosor)'
    },
    mt: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-top del encabezado (usando clases Bootstrap mt-0 a mt-5 y mt-auto)'
    },
    mb: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-bottom del encabezado (usando clases Bootstrap mb-0 a mb-5 y mb-auto)'
    },
    mr: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-right del encabezado (usando clases Bootstrap me-0 a me-5 y me-auto)'
    },
    ml: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', 'auto'],
      description: 'Margin-left del encabezado (usando clases Bootstrap ms-0 a ms-5 y ms-auto)'
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
        <sa-heading size="xs" weight="bold" children="Tamaño XS"></sa-heading>
        <sa-heading size="sm" weight="bold" children="Tamaño SM"></sa-heading>
        <sa-heading size="md" weight="bold" children="Tamaño MD"></sa-heading>
        <sa-heading size="lg" weight="bold" children="Tamaño LG"></sa-heading>
        <sa-heading size="xl" weight="bold" children="Tamaño XL"></sa-heading>
        <sa-heading size="2xl" weight="bold" children="Tamaño 2XL"></sa-heading>
        <sa-heading size="3xl" weight="bold" children="Tamaño 3XL"></sa-heading>
        <sa-heading size="4xl" weight="bold" children="Tamaño 4XL"></sa-heading>
        <sa-heading size="5xl" weight="bold" children="Tamaño 5XL"></sa-heading>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}; 