import type { Meta, StoryObj } from '@storybook/angular';
import { SaSelectComponent } from './sa-select.component';

const meta: Meta<SaSelectComponent> = {
  title: 'Componentes/Forms/SaSelect',
  component: SaSelectComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    showPlaceholder: {
      control: { type: 'boolean' },
    },
  },
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
  },
};

export const WithValue: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    value: '2',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    required: true,
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    disabled: true,
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
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
};

export const Small: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    size: 'sm',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    size: 'lg',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
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
};

export const Warning: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    status: 'warning',
    value: '2',
    placeholder: '--Seleccione--',
    showPlaceholder: true,
  },
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
};

export const WithoutPlaceholder: Story = {
  args: {
    label: 'Selecciona una opción',
    options: defaultOptions,
    showPlaceholder: false,
  },
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
};
