import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SaButtonComponent } from './sa-button.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
  title: 'Componentes/Button',
  component: SaButtonComponent,
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
      options: ['primary', 'secondary', 'terciary', 'danger', 'warning', 'info', 'gray'],
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
} as Meta<SaButtonComponent>;

// Historia básica
export const Primary: StoryObj<SaButtonComponent> = {
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
export const Secondary: StoryObj<SaButtonComponent> = {
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
export const Terciary: StoryObj<SaButtonComponent> = {
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

// Historia Gray
export const Gray: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'gray'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón gris con fondo #838383 y texto blanco. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Disabled
export const Disabled: StoryObj<SaButtonComponent> = {
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
export const Variants: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 flex-wrap align-items-center">
        <sa-button label="Primary" variant="primary"></sa-button>
        <sa-button label="Secondary" variant="secondary"></sa-button>
        <sa-button label="Terciary" variant="terciary"></sa-button>
        <sa-button label="Gray" variant="gray"></sa-button>
        <sa-button label="Danger" variant="danger"></sa-button>
        <sa-button label="Warning" variant="warning"></sa-button>
        <sa-button label="Info" variant="info"></sa-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-button label=\"Primary\" variant=\"primary\"></sa-button>\n<sa-button label=\"Secondary\" variant=\"secondary\"></sa-button>\n<sa-button label=\"Terciary\" variant=\"terciary\"></sa-button>\n<sa-button label=\"Gray\" variant=\"gray\"></sa-button>\n<sa-button label=\"Danger\" variant=\"danger\"></sa-button>\n<sa-button label=\"Warning\" variant=\"warning\"></sa-button>\n<sa-button label=\"Info\" variant=\"info\"></sa-button>`
      }
    }
  }
};

// Historia con diferentes tamaños
export const Sizes: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 align-items-center">
        <sa-button label="Small" size="small" variant="primary"></sa-button>
        <sa-button label="Medium" size="medium" variant="primary"></sa-button>
        <sa-button label="Large" size="large" variant="primary"></sa-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-button label=\"Small\" size=\"small\" variant=\"primary\"></sa-button>\n<sa-button label=\"Medium\" size=\"medium\" variant=\"primary\"></sa-button>\n<sa-button label=\"Large\" size=\"large\" variant=\"primary\"></sa-button>`
      }
    }
  }
};







// Historia con iconos
export const WithIcons: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Todos los Iconos Disponibles</h4>        
        <!-- === ACCIONES BÁSICAS === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Acciones Básicas</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Edit" icon="edit" position="left" variant="primary"></sa-button>
            <sa-button label="Save" icon="save" position="right" variant="success"></sa-button>
            <sa-button label="Plus" icon="plus" position="left" variant="info"></sa-button>
            <sa-button label="Minus" icon="minus" position="right" variant="warning"></sa-button>
            <sa-button label="Check" icon="check" position="left" variant="success"></sa-button>
            <sa-button label="Times" icon="times" position="right" variant="danger"></sa-button>
            <sa-button label="Pencil" icon="pencil" position="left" variant="warning"></sa-button>
            <sa-button label="Trash" icon="trash" position="right" variant="danger"></sa-button>
            <sa-button label="Settings" icon="cog" position="left" variant="gray"></sa-button>
            <sa-button label="User" icon="user" position="right" variant="gray"></sa-button>
          </div>
        </div>

        <!-- === NAVEGACIÓN === -->
        <div class="mb-4">
          <h5 class="text-success mb-2">Navegación</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Home" icon="home" position="left" variant="secondary"></sa-button>
            <sa-button label="User" icon="user" position="right" variant="terciary"></sa-button>
            <sa-button label="Search" icon="search" position="left" variant="info"></sa-button>
            <sa-button label="Cog" icon="cog" position="right" variant="secondary"></sa-button>
            <sa-button label="Arrow Left" icon="arrow-left" position="left" variant="primary"></sa-button>
            <sa-button label="Arrow Right" icon="arrow-right" position="right" variant="primary"></sa-button>
            <sa-button label="Arrow Up" icon="arrow-up" position="left" variant="info"></sa-button>
            <sa-button label="Arrow Down" icon="arrow-down" position="right" variant="info"></sa-button>
            <sa-button label="Back" icon="chevron-left" position="left" variant="gray"></sa-button>
            <sa-button label="Next" icon="chevron-right" position="right" variant="gray"></sa-button>
          </div>
        </div>

        <!-- === CHEVRONS === -->
        <div class="mb-4">
          <h5 class="text-info mb-2">Chevrons</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Chevron Down" icon="chevron-down" position="left" variant="secondary"></sa-button>
            <sa-button label="Chevron Up" icon="chevron-up" position="right" variant="secondary"></sa-button>
            <sa-button label="Chevron Left" icon="chevron-left" position="left" variant="secondary"></sa-button>
            <sa-button label="Chevron Right" icon="chevron-right" position="right" variant="secondary"></sa-button>
          </div>
        </div>

        <!-- === COMUNICACIÓN === -->
        <div class="mb-4">
          <h5 class="text-warning mb-2">Comunicación</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Envelope" icon="envelope" position="left" variant="info"></sa-button>
            <sa-button label="Phone" icon="phone" position="right" variant="success"></sa-button>
            <sa-button label="Bell" icon="bell" position="left" variant="warning"></sa-button>
            <sa-button label="Share" icon="share" position="right" variant="primary"></sa-button>
          </div>
        </div>

        <!-- === ARCHIVOS Y DOCUMENTOS === -->
        <div class="mb-4">
          <h5 class="text-danger mb-2">Archivos y Documentos</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Print" icon="print" position="left" variant="primary"></sa-button>
            <sa-button label="Download" icon="download" position="right" variant="info"></sa-button>
            <sa-button label="Save" icon="save" position="left" variant="success"></sa-button>
            <sa-button label="Edit" icon="edit" position="right" variant="warning"></sa-button>
          </div>
        </div>

        <!-- === INTERACCIÓN === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Interacción</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Heart" icon="heart" position="left" variant="danger"></sa-button>
            <sa-button label="Star" icon="star" position="right" variant="warning"></sa-button>
            <sa-button label="Eye" icon="eye" position="left" variant="info"></sa-button>
            <sa-button label="Eye Slash" icon="eye-slash" position="right" variant="secondary"></sa-button>
          </div>
        </div>

        <!-- === SEGURIDAD === -->
        <div class="mb-4">
          <h5 class="text-success mb-2">Seguridad</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Lock" icon="lock" position="left" variant="danger"></sa-button>
            <sa-button label="Unlock" icon="unlock" position="right" variant="success"></sa-button>
          </div>
        </div>

        <!-- === UBICACIÓN Y TIEMPO === -->
        <div class="mb-4">
          <h5 class="text-info mb-2">Ubicación y Tiempo</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Map Marker" icon="map-marker-alt" position="left" variant="info"></sa-button>
            <sa-button label="Calendar" icon="calendar" position="right" variant="primary"></sa-button>
            <sa-button label="Clock" icon="clock" position="left" variant="secondary"></sa-button>
          </div>
        </div>

        <!-- === INFORMACIÓN === -->
        <div class="mb-4">
          <h5 class="text-warning mb-2">Información</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button label="Info" icon="info" position="left" variant="info"></sa-button>
            <sa-button label="Question" icon="question" position="right" variant="warning"></sa-button>
            <sa-button label="Exclamation" icon="exclamation-triangle" position="left" variant="danger"></sa-button>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<!-- Acciones Básicas -->
<sa-button label="Edit" icon="edit" position="left" variant="primary"></sa-button>
<sa-button label="Save" icon="save" position="right" variant="success"></sa-button>
<sa-button label="Plus" icon="plus" position="left" variant="info"></sa-button>
<sa-button label="Minus" icon="minus" position="right" variant="warning"></sa-button>
<sa-button label="Check" icon="check" position="left" variant="success"></sa-button>
<sa-button label="Times" icon="times" position="right" variant="danger"></sa-button>
<sa-button label="Pencil" icon="pencil" position="left" variant="warning"></sa-button>
<sa-button label="Trash" icon="trash" position="right" variant="danger"></sa-button>
<sa-button label="Settings" icon="cog" position="left" variant="gray"></sa-button>
<sa-button label="User" icon="user" position="right" variant="gray"></sa-button>

<!-- Navegación -->
<sa-button label="Home" icon="home" position="left" variant="secondary"></sa-button>
<sa-button label="User" icon="user" position="right" variant="terciary"></sa-button>
<sa-button label="Search" icon="search" position="left" variant="info"></sa-button>
<sa-button label="Cog" icon="cog" position="right" variant="secondary"></sa-button>
<sa-button label="Arrow Left" icon="arrow-left" position="left" variant="primary"></sa-button>
<sa-button label="Arrow Right" icon="arrow-right" position="right" variant="primary"></sa-button>
<sa-button label="Arrow Up" icon="arrow-up" position="left" variant="info"></sa-button>
<sa-button label="Arrow Down" icon="arrow-down" position="right" variant="info"></sa-button>
<sa-button label="Back" icon="chevron-left" position="left" variant="gray"></sa-button>
<sa-button label="Next" icon="chevron-right" position="right" variant="gray"></sa-button>

<!-- Chevrons -->
<sa-button label="Chevron Down" icon="chevron-down" position="left" variant="secondary"></sa-button>
<sa-button label="Chevron Up" icon="chevron-up" position="right" variant="secondary"></sa-button>
<sa-button label="Chevron Left" icon="chevron-left" position="left" variant="secondary"></sa-button>
<sa-button label="Chevron Right" icon="chevron-right" position="right" variant="secondary"></sa-button>

<!-- Comunicación -->
<sa-button label="Envelope" icon="envelope" position="left" variant="info"></sa-button>
<sa-button label="Phone" icon="phone" position="right" variant="success"></sa-button>
<sa-button label="Bell" icon="bell" position="left" variant="warning"></sa-button>
<sa-button label="Share" icon="share" position="right" variant="primary"></sa-button>

<!-- Archivos y Documentos -->
<sa-button label="Print" icon="print" position="left" variant="primary"></sa-button>
<sa-button label="Download" icon="download" position="right" variant="info"></sa-button>
<sa-button label="Save" icon="save" position="left" variant="success"></sa-button>
<sa-button label="Edit" icon="edit" position="right" variant="warning"></sa-button>

<!-- Interacción -->
<sa-button label="Heart" icon="heart" position="left" variant="danger"></sa-button>
<sa-button label="Star" icon="star" position="right" variant="warning"></sa-button>
<sa-button label="Eye" icon="eye" position="left" variant="info"></sa-button>
<sa-button label="Eye Slash" icon="eye-slash" position="right" variant="secondary"></sa-button>

<!-- Seguridad -->
<sa-button label="Lock" icon="lock" position="left" variant="danger"></sa-button>
<sa-button label="Unlock" icon="unlock" position="right" variant="success"></sa-button>

<!-- Ubicación y Tiempo -->
<sa-button label="Map Marker" icon="map-marker-alt" position="left" variant="info"></sa-button>
<sa-button label="Calendar" icon="calendar" position="right" variant="primary"></sa-button>
<sa-button label="Clock" icon="clock" position="left" variant="secondary"></sa-button>

<!-- Información -->
<sa-button label="Info" icon="info" position="left" variant="info"></sa-button>
<sa-button label="Question" icon="question" position="right" variant="warning"></sa-button>
<sa-button label="Exclamation" icon="exclamation-triangle" position="left" variant="danger"></sa-button>

<!-- Estados -->
<sa-button label="Spinner" icon="spinner" position="left" variant="primary"></sa-button>
<sa-button label="Loading..." icon="spinner" position="right" variant="info"></sa-button>`
      }
    }
  }
};








