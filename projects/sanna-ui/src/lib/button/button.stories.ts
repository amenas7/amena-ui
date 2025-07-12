import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';

export default {
  title: 'UI/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SannaUiModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Un componente de botón moderno y versátil con múltiples variantes, tamaños y estados.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Variante de color del botón'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Estado de carga'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ancho completo'
    },
    icon: {
      control: { type: 'text' },
      description: 'Clase CSS del icono (ej: fas fa-heart)'
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del icono'
    },
    clicked: {
      action: 'clicked',
      description: 'Evento emitido al hacer clic'
    }
  }
} as Meta<ButtonComponent>;

// Historia básica
export const Primary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'primary',
    size: 'medium'
  }
};

// Historia con diferentes variantes
export const Variants: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <lib-button label="Primary" variant="primary"></lib-button>
        <lib-button label="Secondary" variant="secondary"></lib-button>
        <lib-button label="Success" variant="success"></lib-button>
        <lib-button label="Danger" variant="danger"></lib-button>
        <lib-button label="Warning" variant="warning"></lib-button>
        <lib-button label="Info" variant="info"></lib-button>
      </div>
    `
  })
};

// Historia con diferentes tamaños
export const Sizes: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <lib-button label="Small" size="small"></lib-button>
        <lib-button label="Medium" size="medium"></lib-button>
        <lib-button label="Large" size="large"></lib-button>
      </div>
    `
  })
};

// Historia con estados
export const States: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <lib-button label="Normal"></lib-button>
        <lib-button label="Disabled" [disabled]="true"></lib-button>
        <lib-button label="Loading" [loading]="true"></lib-button>
        <lib-button label="Full Width" [fullWidth]="true"></lib-button>
      </div>
    `
  })
};

// Historia con iconos
export const WithIcons: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <lib-button label="Save" icon="fas fa-save" iconPosition="left"></lib-button>
        <lib-button label="Download" icon="fas fa-download" iconPosition="right"></lib-button>
        <lib-button label="Heart" icon="fas fa-heart" iconPosition="left"></lib-button>
        <lib-button label="Share" icon="fas fa-share" iconPosition="right"></lib-button>
      </div>
    `
  })
};

// Historia interactiva
export const Interactive: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me!',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón interactivo que emite eventos al hacer clic. Puedes ver los eventos en la pestaña Actions.'
      }
    }
  }
};

// Historia con todos los ejemplos
export const AllExamples: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div style="padding: 24px; background: #f8fafc; border-radius: 12px;">
        <h3 style="margin-bottom: 24px; color: #374151;">Sanna UI - Componente Button</h3>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px; color: #6b7280;">Variantes de Color</h4>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <lib-button label="Primary" variant="primary"></lib-button>
            <lib-button label="Secondary" variant="secondary"></lib-button>
            <lib-button label="Success" variant="success"></lib-button>
            <lib-button label="Danger" variant="danger"></lib-button>
            <lib-button label="Warning" variant="warning"></lib-button>
            <lib-button label="Info" variant="info"></lib-button>
          </div>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px; color: #6b7280;">Tamaños</h4>
          <div style="display: flex; gap: 12px; align-items: center;">
            <lib-button label="Small" size="small" variant="primary"></lib-button>
            <lib-button label="Medium" size="medium" variant="primary"></lib-button>
            <lib-button label="Large" size="large" variant="primary"></lib-button>
          </div>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px; color: #6b7280;">Estados</h4>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <lib-button label="Normal" variant="primary"></lib-button>
            <lib-button label="Disabled" [disabled]="true" variant="primary"></lib-button>
            <lib-button label="Loading" [loading]="true" variant="primary"></lib-button>
          </div>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px; color: #6b7280;">Con Iconos</h4>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <lib-button label="Save" icon="fas fa-save" iconPosition="left" variant="success"></lib-button>
            <lib-button label="Download" icon="fas fa-download" iconPosition="right" variant="info"></lib-button>
            <lib-button label="Delete" icon="fas fa-trash" iconPosition="left" variant="danger"></lib-button>
            <lib-button label="Share" icon="fas fa-share" iconPosition="right" variant="warning"></lib-button>
          </div>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px; color: #6b7280;">Ancho Completo</h4>
          <div style="max-width: 400px;">
            <lib-button label="Botón de ancho completo" [fullWidth]="true" variant="primary"></lib-button>
          </div>
        </div>
      </div>
    `
  })
};
