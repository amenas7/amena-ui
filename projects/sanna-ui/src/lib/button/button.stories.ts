import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
      options: ['primary', 'secondary', 'terciary', 'danger', 'warning', 'info'],
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
      description: 'Estado de carga (muestra spinner y oculta texto)'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ancho completo'
    },
    icon: {
      control: { type: 'text' },
      description: 'Icono de FontAwesome (ej: "heart", "fas fa-heart")'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del icono'
    },

  }
} as Meta<ButtonComponent>;

// Historia básica
export const Primary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón principal interactivo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Secondary
export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'secondary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón secundario con borde y texto verde. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Terciary
export const Terciary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'terciary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón terciario con borde y texto negro. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Disabled
export const Disabled: StoryObj<ButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'primary',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón en estado deshabilitado. Se muestra en gris y no es interactivo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
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
        <lib-button label="Terciary" variant="terciary"></lib-button>
        <lib-button label="Danger" variant="danger"></lib-button>
        <lib-button label="Warning" variant="warning"></lib-button>
        <lib-button label="Info" variant="info"></lib-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-button label=\"Primary\" variant=\"primary\"></lib-button>\n<lib-button label=\"Secondary\" variant=\"secondary\"></lib-button>\n<lib-button label=\"Terciary\" variant=\"terciary\"></lib-button>\n<lib-button label=\"Danger\" variant=\"danger\"></lib-button>\n<lib-button label=\"Warning\" variant=\"warning\"></lib-button>\n<lib-button label=\"Info\" variant=\"info\"></lib-button>`
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







// Historia con iconos
export const WithIcons: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Todos los Iconos Disponibles</h4>        
        <!-- === ACCIONES BÁSICAS === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Acciones Básicas</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Edit" icon="edit" position="left" variant="primary"></lib-button>
            <lib-button label="Save" icon="save" position="right" variant="success"></lib-button>
            <lib-button label="Plus" icon="plus" position="left" variant="info"></lib-button>
            <lib-button label="Minus" icon="minus" position="right" variant="warning"></lib-button>
            <lib-button label="Check" icon="check" position="left" variant="success"></lib-button>
            <lib-button label="Times" icon="times" position="right" variant="danger"></lib-button>
            <lib-button label="Pencil" icon="pencil" position="left" variant="warning"></lib-button>
            <lib-button label="Trash" icon="trash" position="right" variant="danger"></lib-button>
          </div>
        </div>

        <!-- === NAVEGACIÓN === -->
        <div class="mb-4">
          <h5 class="text-success mb-2">Navegación</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Home" icon="home" position="left" variant="secondary"></lib-button>
            <lib-button label="User" icon="user" position="right" variant="terciary"></lib-button>
            <lib-button label="Search" icon="search" position="left" variant="info"></lib-button>
            <lib-button label="Cog" icon="cog" position="right" variant="secondary"></lib-button>
            <lib-button label="Arrow Left" icon="arrow-left" position="left" variant="primary"></lib-button>
            <lib-button label="Arrow Right" icon="arrow-right" position="right" variant="primary"></lib-button>
            <lib-button label="Arrow Up" icon="arrow-up" position="left" variant="info"></lib-button>
            <lib-button label="Arrow Down" icon="arrow-down" position="right" variant="info"></lib-button>
          </div>
        </div>

        <!-- === CHEVRONS === -->
        <div class="mb-4">
          <h5 class="text-info mb-2">Chevrons</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Chevron Down" icon="chevron-down" position="left" variant="secondary"></lib-button>
            <lib-button label="Chevron Up" icon="chevron-up" position="right" variant="secondary"></lib-button>
            <lib-button label="Chevron Left" icon="chevron-left" position="left" variant="secondary"></lib-button>
            <lib-button label="Chevron Right" icon="chevron-right" position="right" variant="secondary"></lib-button>
          </div>
        </div>

        <!-- === COMUNICACIÓN === -->
        <div class="mb-4">
          <h5 class="text-warning mb-2">Comunicación</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Envelope" icon="envelope" position="left" variant="info"></lib-button>
            <lib-button label="Phone" icon="phone" position="right" variant="success"></lib-button>
            <lib-button label="Bell" icon="bell" position="left" variant="warning"></lib-button>
            <lib-button label="Share" icon="share" position="right" variant="primary"></lib-button>
          </div>
        </div>

        <!-- === ARCHIVOS Y DOCUMENTOS === -->
        <div class="mb-4">
          <h5 class="text-danger mb-2">Archivos y Documentos</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Print" icon="print" position="left" variant="primary"></lib-button>
            <lib-button label="Download" icon="download" position="right" variant="info"></lib-button>
            <lib-button label="Save" icon="save" position="left" variant="success"></lib-button>
            <lib-button label="Edit" icon="edit" position="right" variant="warning"></lib-button>
          </div>
        </div>

        <!-- === INTERACCIÓN === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Interacción</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Heart" icon="heart" position="left" variant="danger"></lib-button>
            <lib-button label="Star" icon="star" position="right" variant="warning"></lib-button>
            <lib-button label="Eye" icon="eye" position="left" variant="info"></lib-button>
            <lib-button label="Eye Slash" icon="eye-slash" position="right" variant="secondary"></lib-button>
          </div>
        </div>

        <!-- === SEGURIDAD === -->
        <div class="mb-4">
          <h5 class="text-success mb-2">Seguridad</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Lock" icon="lock" position="left" variant="danger"></lib-button>
            <lib-button label="Unlock" icon="unlock" position="right" variant="success"></lib-button>
          </div>
        </div>

        <!-- === UBICACIÓN Y TIEMPO === -->
        <div class="mb-4">
          <h5 class="text-info mb-2">Ubicación y Tiempo</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Map Marker" icon="map-marker-alt" position="left" variant="info"></lib-button>
            <lib-button label="Calendar" icon="calendar" position="right" variant="primary"></lib-button>
            <lib-button label="Clock" icon="clock" position="left" variant="secondary"></lib-button>
          </div>
        </div>

        <!-- === INFORMACIÓN === -->
        <div class="mb-4">
          <h5 class="text-warning mb-2">Información</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <lib-button label="Info" icon="info" position="left" variant="info"></lib-button>
            <lib-button label="Question" icon="question" position="right" variant="warning"></lib-button>
            <lib-button label="Exclamation" icon="exclamation-triangle" position="left" variant="danger"></lib-button>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<!-- Acciones Básicas -->
<lib-button label="Edit" icon="edit" position="left" variant="primary"></lib-button>
<lib-button label="Save" icon="save" position="right" variant="success"></lib-button>
<lib-button label="Plus" icon="plus" position="left" variant="info"></lib-button>
<lib-button label="Minus" icon="minus" position="right" variant="warning"></lib-button>
<lib-button label="Check" icon="check" position="left" variant="success"></lib-button>
<lib-button label="Times" icon="times" position="right" variant="danger"></lib-button>
<lib-button label="Pencil" icon="pencil" position="left" variant="warning"></lib-button>
<lib-button label="Trash" icon="trash" position="right" variant="danger"></lib-button>

<!-- Navegación -->
<lib-button label="Home" icon="home" position="left" variant="secondary"></lib-button>
<lib-button label="User" icon="user" position="right" variant="terciary"></lib-button>
<lib-button label="Search" icon="search" position="left" variant="info"></lib-button>
<lib-button label="Cog" icon="cog" position="right" variant="secondary"></lib-button>
<lib-button label="Arrow Left" icon="arrow-left" position="left" variant="primary"></lib-button>
<lib-button label="Arrow Right" icon="arrow-right" position="right" variant="primary"></lib-button>
<lib-button label="Arrow Up" icon="arrow-up" position="left" variant="info"></lib-button>
<lib-button label="Arrow Down" icon="arrow-down" position="right" variant="info"></lib-button>

<!-- Chevrons -->
<lib-button label="Chevron Down" icon="chevron-down" position="left" variant="secondary"></lib-button>
<lib-button label="Chevron Up" icon="chevron-up" position="right" variant="secondary"></lib-button>
<lib-button label="Chevron Left" icon="chevron-left" position="left" variant="secondary"></lib-button>
<lib-button label="Chevron Right" icon="chevron-right" position="right" variant="secondary"></lib-button>

<!-- Comunicación -->
<lib-button label="Envelope" icon="envelope" position="left" variant="info"></lib-button>
<lib-button label="Phone" icon="phone" position="right" variant="success"></lib-button>
<lib-button label="Bell" icon="bell" position="left" variant="warning"></lib-button>
<lib-button label="Share" icon="share" position="right" variant="primary"></lib-button>

<!-- Archivos y Documentos -->
<lib-button label="Print" icon="print" position="left" variant="primary"></lib-button>
<lib-button label="Download" icon="download" position="right" variant="info"></lib-button>
<lib-button label="Save" icon="save" position="left" variant="success"></lib-button>
<lib-button label="Edit" icon="edit" position="right" variant="warning"></lib-button>

<!-- Interacción -->
<lib-button label="Heart" icon="heart" position="left" variant="danger"></lib-button>
<lib-button label="Star" icon="star" position="right" variant="warning"></lib-button>
<lib-button label="Eye" icon="eye" position="left" variant="info"></lib-button>
<lib-button label="Eye Slash" icon="eye-slash" position="right" variant="secondary"></lib-button>

<!-- Seguridad -->
<lib-button label="Lock" icon="lock" position="left" variant="danger"></lib-button>
<lib-button label="Unlock" icon="unlock" position="right" variant="success"></lib-button>

<!-- Ubicación y Tiempo -->
<lib-button label="Map Marker" icon="map-marker-alt" position="left" variant="info"></lib-button>
<lib-button label="Calendar" icon="calendar" position="right" variant="primary"></lib-button>
<lib-button label="Clock" icon="clock" position="left" variant="secondary"></lib-button>

<!-- Información -->
<lib-button label="Info" icon="info" position="left" variant="info"></lib-button>
<lib-button label="Question" icon="question" position="right" variant="warning"></lib-button>
<lib-button label="Exclamation" icon="exclamation-triangle" position="left" variant="danger"></lib-button>

<!-- Estados -->
<lib-button label="Spinner" icon="spinner" position="left" variant="primary"></lib-button>
<lib-button label="Loading..." icon="spinner" position="right" variant="info"></lib-button>`
      }
    }
  }
};








