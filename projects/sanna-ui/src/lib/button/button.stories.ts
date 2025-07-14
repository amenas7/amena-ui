import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPrint, faDownload, faHeart, faShare, faTrash } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Componentes/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SannaUiModule, FontAwesomeModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
        `
      },
      source: {
        type: 'code'
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
      control: { type: 'object' },
      description: 'Icono de FontAwesome (ej: faHeart)'
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
  },
  parameters: {
    docs: {
      source: {
        code: `<lib-button label="Click me" variant="primary" size="medium"></lib-button>`
      }
    }
  }
};

// Historia con diferentes variantes
export const Variants: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 flex-wrap align-items-center">
        <lib-button label="Primary" variant="primary"></lib-button>
        <lib-button label="Secondary" variant="secondary"></lib-button>
        <lib-button label="Success" variant="success"></lib-button>
        <lib-button label="Danger" variant="danger"></lib-button>
        <lib-button label="Warning" variant="warning"></lib-button>
        <lib-button label="Info" variant="info"></lib-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-button label=\"Primary\" variant=\"primary\"></lib-button>\n<lib-button label=\"Secondary\" variant=\"secondary\"></lib-button>\n<lib-button label=\"Success\" variant=\"success\"></lib-button>\n<lib-button label=\"Danger\" variant=\"danger\"></lib-button>\n<lib-button label=\"Warning\" variant=\"warning\"></lib-button>\n<lib-button label=\"Info\" variant=\"info\"></lib-button>`
      }
    }
  }
};

// Historia con diferentes tamaños
export const Sizes: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 align-items-center">
        <lib-button label="Small" size="small" variant="primary"></lib-button>
        <lib-button label="Medium" size="medium" variant="primary"></lib-button>
        <lib-button label="Large" size="large" variant="primary"></lib-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-button label=\"Small\" size=\"small\" variant=\"primary\"></lib-button>\n<lib-button label=\"Medium\" size=\"medium\" variant=\"primary\"></lib-button>\n<lib-button label=\"Large\" size=\"large\" variant=\"primary\"></lib-button>`
      }
    }
  }
};

// Historia con estados
export const States: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 flex-wrap align-items-center">
        <lib-button label="Normal" variant="primary"></lib-button>
        <lib-button label="Disabled" [disabled]="true" variant="primary"></lib-button>
        <lib-button label="Loading" [loading]="true" variant="primary"></lib-button>
        <lib-button label="Full Width" [fullWidth]="true" variant="primary"></lib-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-button label=\"Normal\" variant=\"primary\"></lib-button>\n<lib-button label=\"Disabled\" [disabled]=\"true\" variant=\"primary\"></lib-button>\n<lib-button label=\"Loading\" [loading]=\"true\" variant=\"primary\"></lib-button>\n<lib-button label=\"Full Width\" [fullWidth]=\"true\" variant=\"primary\"></lib-button>`
      }
    }
  }
};

// Historia con iconos
export const WithIcons: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 flex-wrap align-items-center">
        <lib-button label="Save" [icon]="faPrint" iconPosition="left" variant="success"></lib-button>
        <lib-button label="Download" [icon]="faDownload" iconPosition="right" variant="info"></lib-button>
        <lib-button label="Heart" [icon]="faHeart" iconPosition="left" variant="danger"></lib-button>
        <lib-button label="Share" [icon]="faShare" iconPosition="right" variant="warning"></lib-button>
      </div>
    `,
    props: {
      faPrint,
      faDownload,
      faHeart,
      faShare
    }
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-button label=\"Save\" [icon]=\"faPrint\" iconPosition=\"left\" variant=\"success\"></lib-button>\n<lib-button label=\"Download\" [icon]=\"faDownload\" iconPosition=\"right\" variant=\"info\"></lib-button>\n<lib-button label=\"Heart\" [icon]=\"faHeart\" iconPosition=\"left\" variant=\"danger\"></lib-button>\n<lib-button label=\"Share\" [icon]=\"faShare\" iconPosition=\"right\" variant=\"warning\"></lib-button>`
      }
    }
  }
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
      },
      source: {
        code: `<lib-button label=\"Click me!\" variant=\"primary\" size=\"medium\" (clicked)=\"onButtonClick()\"></lib-button>`
      }
    }
  }
};

// Historia con todos los ejemplos
export const AllExamples: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-4 bg-light rounded">
        <h3 class="mb-4 text-dark">Sanna UI - Componente Button</h3>
        
        <div class="mb-4">
          <h4 class="mb-3 text-muted">Variantes de Color</h4>
          <div class="d-flex gap-2 flex-wrap">
            <lib-button label="Primary" variant="primary"></lib-button>
            <lib-button label="Secondary" variant="secondary"></lib-button>
            <lib-button label="Success" variant="success"></lib-button>
            <lib-button label="Danger" variant="danger"></lib-button>
            <lib-button label="Warning" variant="warning"></lib-button>
            <lib-button label="Info" variant="info"></lib-button>
          </div>
        </div>
        
        <div class="mb-4">
          <h4 class="mb-3 text-muted">Tamaños</h4>
          <div class="d-flex gap-2 align-items-center">
            <lib-button label="Small" size="small" variant="primary"></lib-button>
            <lib-button label="Medium" size="medium" variant="primary"></lib-button>
            <lib-button label="Large" size="large" variant="primary"></lib-button>
          </div>
        </div>
        
        <div class="mb-4">
          <h4 class="mb-3 text-muted">Estados</h4>
          <div class="d-flex gap-2 flex-wrap">
            <lib-button label="Normal" variant="primary"></lib-button>
            <lib-button label="Disabled" [disabled]="true" variant="primary"></lib-button>
            <lib-button [loading]="true" variant="primary"></lib-button>
          </div>
        </div>
        
        <div class="mb-4">
          <h4 class="mb-3 text-muted">Con Iconos</h4>
          <div class="d-flex gap-2 flex-wrap">
            <lib-button label="Save" [icon]="faPrint" iconPosition="left" variant="success"></lib-button>
            <lib-button label="Download" [icon]="faDownload" iconPosition="right" variant="info"></lib-button>
            <lib-button label="Delete" [icon]="faTrash" iconPosition="left" variant="danger"></lib-button>
            <lib-button label="Share" [icon]="faShare" iconPosition="right" variant="warning"></lib-button>
          </div>
        </div>
        
        <div class="mb-4">
          <h4 class="mb-3 text-muted">Ancho Completo</h4>
          <div style="max-width: 400px;">
            <lib-button label="Botón de ancho completo" [fullWidth]="true" variant="primary"></lib-button>
          </div>
        </div>
      </div>
    `,
    props: {
      faPrint,
      faDownload,
      faTrash,
      faShare
    }
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-button label=\"Primary\" variant=\"primary\"></lib-button>\n<lib-button label=\"Secondary\" variant=\"secondary\"></lib-button>\n<lib-button label=\"Success\" variant=\"success\"></lib-button>\n<lib-button label=\"Danger\" variant=\"danger\"></lib-button>\n<lib-button label=\"Warning\" variant=\"warning\"></lib-button>\n<lib-button label=\"Info\" variant=\"info\"></lib-button>\n<lib-button label=\"Small\" size=\"small\" variant=\"primary\"></lib-button>\n<lib-button label=\"Medium\" size=\"medium\" variant=\"primary\"></lib-button>\n<lib-button label=\"Large\" size=\"large\" variant=\"primary\"></lib-button>\n<lib-button label=\"Normal\" variant=\"primary\"></lib-button>\n<lib-button label=\"Disabled\" [disabled]=\"true\" variant=\"primary\"></lib-button>\n<lib-button [loading]=\"true\" variant=\"primary\"></lib-button>\n<lib-button label=\"Save\" [icon]=\"faPrint\" iconPosition=\"left\" variant=\"success\"></lib-button>\n<lib-button label=\"Download\" [icon]=\"faDownload\" iconPosition=\"right\" variant=\"info\"></lib-button>\n<lib-button label=\"Delete\" [icon]=\"faTrash\" iconPosition=\"left\" variant=\"danger\"></lib-button>\n<lib-button label=\"Share\" [icon]=\"faShare\" iconPosition=\"right\" variant=\"warning\"></lib-button>\n<lib-button label=\"Botón de ancho completo\" [fullWidth]=\"true\" variant=\"primary\"></lib-button>`
      }
    }
  }
};
