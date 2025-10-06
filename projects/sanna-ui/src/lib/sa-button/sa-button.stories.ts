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
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          // Transformación simple que preserva el resaltado de sintaxis
          let result = code;
          
          // Transformar property bindings innecesarios a attribute binding
          result = result.replace(/\[label\]="'([^']+)'"/g, 'label="$1"');
          result = result.replace(/\[variant\]="'([^']+)'"/g, 'variant="$1"');
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          result = result.replace(/\[icon\]="'([^']+)'"/g, 'icon="$1"');
          result = result.replace(/\[position\]="'([^']+)'"/g, 'position="$1"');
          result = result.replace(/\[type\]="'([^']+)'"/g, 'type="$1"');
          result = result.replace(/\[tooltip\]="'([^']+)'"/g, 'tooltip="$1"');
          result = result.replace(/\[tooltipPosition\]="'([^']+)'"/g, 'tooltipPosition="$1"');
          
          // Transformar boolean properties
          result = result.replace(/\[disabled\]="true"/g, 'disabled="true"');
          result = result.replace(/\[disabled\]="false"/g, 'disabled="false"');
          result = result.replace(/\[loading\]="true"/g, 'loading="true"');
          result = result.replace(/\[loading\]="false"/g, 'loading="false"');
          result = result.replace(/\[fullWidth\]="true"/g, 'fullWidth="true"');
          result = result.replace(/\[fullWidth\]="false"/g, 'fullWidth="false"');
          result = result.replace(/\[iconOnly\]="true"/g, 'iconOnly="true"');
          result = result.replace(/\[iconOnly\]="false"/g, 'iconOnly="false"');
          result = result.replace(/\[noAnimate\]="true"/g, 'noAnimate="true"');
          result = result.replace(/\[noAnimate\]="false"/g, 'noAnimate="false"');
          
          // Limpiar espacios extra
          result = result.replace(/\n\s*\n/g, '\n');
          
          return result;
        }
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto del botón'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'terciary', 'danger', 'danger-light', 'warning', 'warning-light', 'info', 'info-light', 'gray', 'red', 'success', 'success-light'],
      description: 'Variante de color del botón'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
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
      description: 'Icono de FontAwesome. Ejemplos: "edit", "trash", "eye", "download", "plus", "check", "times", "heart", "star", "user", "cog", "search", "save", "home", "bell", "calendar", "clock", "info", "warning-triangle"'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del icono'
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Mostrar solo el icono sin texto'
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo de botón HTML'
    },
    tooltip: {
      control: { type: 'text' },
      description: 'Texto que se muestra como tooltip al pasar el mouse sobre el botón'
    },
    tooltipPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición donde aparecerá el tooltip'
    },
    noAnimate: {
      control: { type: 'boolean' },
      description: 'Desactivar animaciones de hover (transform: translateY). Útil para interfaces más estáticas o barras de herramientas densas.'
    },
    // Eventos
    clicked: {
      description: 'Evento emitido cuando se hace clic en el botón. Emite el evento MouseEvent nativo',
      table: {
        type: { summary: 'EventEmitter<MouseEvent>' },
        category: 'Eventos',
      },
    }
  }
} as Meta<SaButtonComponent>;

// Historia básica
export const Primary: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'primary',
    noAnimate: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón principal interactivo con tooltip. Pasa el cursor sobre el botón para ver el tooltip. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
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

// Historia Red
export const Red: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'red'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón rojo con fondo #DC3545 y texto blanco. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Success
export const Success: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón success con fondo #D3F7E3 y texto verde. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Info Light
export const InfoLight: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'info-light'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón info-light con fondo blanco, borde azul y texto azul. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Warning Light
export const WarningLight: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'warning-light'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón warning-light con fondo blanco, borde amarillo y texto amarillo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Success Light
export const SuccessLight: StoryObj<SaButtonComponent> = {
  args: {
    label: 'Click me',
    variant: 'success-light'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón success-light con fondo blanco, borde verde y texto verde. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
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



// Historia con todas las posiciones de tooltip
export const TooltipPositions: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-5">
        <h4 class="mb-3">Posiciones del Tooltip</h4>
        <p class="mb-4 text-muted">Pasa el cursor sobre cada botón para ver el tooltip en diferentes posiciones:</p>
        
        <div class="d-flex flex-column align-items-center gap-4">
          <!-- Tooltip TOP -->
          <div class="text-center">
            <p class="text-muted mb-2">Posición: <strong>TOP</strong> (por defecto)</p>
            <sa-button 
              label="Tooltip arriba" 
              variant="primary" 
              tooltip="¡Tooltip en la parte superior!"
              tooltipPosition="top">
            </sa-button>
          </div>
          
          <!-- Tooltips LEFT y RIGHT en la misma fila -->
          <div class="d-flex justify-content-center align-items-center gap-5">
            <!-- Tooltip LEFT -->
            <div class="text-center">
              <p class="text-muted mb-2">Posición: <strong>LEFT</strong></p>
              <sa-button 
                label="Tooltip izquierda" 
                variant="info" 
                tooltip="¡Tooltip a la izquierda!"
                tooltipPosition="left">
              </sa-button>
            </div>
            
            <!-- Tooltip RIGHT -->
            <div class="text-center">
              <p class="text-muted mb-2">Posición: <strong>RIGHT</strong></p>
              <sa-button 
                label="Tooltip derecha" 
                variant="warning" 
                tooltip="¡Tooltip a la derecha!"
                tooltipPosition="right">
              </sa-button>
            </div>
          </div>
          
          <!-- Tooltip BOTTOM -->
          <div class="text-center">
            <p class="text-muted mb-2">Posición: <strong>BOTTOM</strong></p>
            <sa-button 
              label="Tooltip abajo" 
              variant="success" 
              tooltip="¡Tooltip en la parte inferior!"
              tooltipPosition="bottom">
            </sa-button>
          </div>
        </div>
        
        <div class="mt-5">
          <h5 class="mb-3">Ejemplo con botones de solo icono</h5>
          <div class="d-flex justify-content-center gap-3">
            <sa-button 
              icon="edit" 
              iconOnly="true"
              variant="primary" 
              tooltip="Editar (arriba)"
              tooltipPosition="top">
            </sa-button>
            <sa-button 
              icon="trash" 
              iconOnly="true"
              variant="danger" 
              tooltip="Eliminar (derecha)"
              tooltipPosition="right">
            </sa-button>
            <sa-button 
              icon="eye" 
              iconOnly="true"
              variant="info" 
              tooltip="Ver (abajo)"
              tooltipPosition="bottom">
            </sa-button>
            <sa-button 
              icon="share" 
              iconOnly="true"
              variant="secondary" 
              tooltip="Compartir (izquierda)"
              tooltipPosition="left">
            </sa-button>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demostración de todas las posiciones disponibles para el tooltip: top, bottom, left y right. Cada posición es útil según el contexto y espacio disponible.'
      },
      source: {
        code: `<!-- Tooltip en diferentes posiciones -->
<sa-button label="Tooltip arriba" tooltip="¡Arriba!" tooltipPosition="top"></sa-button>
<sa-button label="Tooltip abajo" tooltip="¡Abajo!" tooltipPosition="bottom"></sa-button>
<sa-button label="Tooltip izquierda" tooltip="¡Izquierda!" tooltipPosition="left"></sa-button>
<sa-button label="Tooltip derecha" tooltip="¡Derecha!" tooltipPosition="right"></sa-button>

<!-- Con botones de solo icono -->
<sa-button icon="edit" iconOnly="true" tooltip="Editar" tooltipPosition="top"></sa-button>
<sa-button icon="trash" iconOnly="true" tooltip="Eliminar" tooltipPosition="bottom"></sa-button>`
      }
    }
  }
};

// Historia con tooltips de texto largo (múltiples líneas)
export const LongTextTooltips: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-5">
        <h4 class="mb-3">Tooltips con Texto Largo - Múltiples Líneas</h4>
        <p class="mb-4 text-muted">Los tooltips automáticamente se adaptan a texto largo dividiéndolo en múltiples líneas con un ancho máximo de 250px:</p>
        
        <div class="d-flex flex-column align-items-center gap-4">
          <!-- Tooltip con texto muy largo -->
          <div class="text-center">
            <p class="text-muted mb-2">Tooltip con descripción larga:</p>
            <sa-button 
              label="Información detallada" 
              variant="primary" 
              tooltip="Este es un tooltip con mucho texto que automáticamente se divide en múltiples líneas cuando el contenido es demasiado largo para caber en una sola línea."
              tooltipPosition="top">
            </sa-button>
          </div>
          
          <!-- Tooltips en diferentes posiciones con texto largo -->
          <div class="d-flex justify-content-center align-items-center gap-5">
            <div class="text-center">
              <p class="text-muted mb-2">Posición: LEFT</p>
              <sa-button 
                label="Ayuda izquierda" 
                variant="info" 
                tooltip="Instrucciones detalladas: Para usar esta función, primero debes completar todos los campos requeridos y luego hacer clic en este botón."
                tooltipPosition="left">
              </sa-button>
            </div>
            
            <div class="text-center">
              <p class="text-muted mb-2">Posición: RIGHT</p>
              <sa-button 
                label="Ayuda derecha" 
                variant="warning" 
                tooltip="Advertencia importante: Esta acción modificará permanentemente los datos del sistema. Asegúrate de tener una copia de seguridad antes de continuar."
                tooltipPosition="right">
              </sa-button>
            </div>
          </div>
          
          <!-- Tooltip BOTTOM con texto largo -->
          <div class="text-center">
            <p class="text-muted mb-2">Posición: BOTTOM</p>
            <sa-button 
              label="Procesar datos" 
              variant="success" 
              tooltip="Proceso de datos: Esta operación puede tardar varios minutos dependiendo del volumen de información. Durante el proceso no cierres la ventana del navegador."
              tooltipPosition="bottom">
            </sa-button>
          </div>
        </div>
        
        <div class="mt-5">
          <h5 class="mb-3">Botones con solo icono y descripciones largas</h5>
          <div class="d-flex justify-content-center gap-3">
            <sa-button 
              icon="edit" 
              iconOnly="true"
              variant="primary" 
              tooltip="Editar elemento: Permite modificar todos los campos del registro seleccionado. Los cambios se guardan automáticamente."
              tooltipPosition="top">
            </sa-button>
            <sa-button 
              icon="trash" 
              iconOnly="true"
              variant="danger" 
              tooltip="Eliminar permanentemente: Esta acción no se puede deshacer. El elemento se eliminará de forma definitiva del sistema."
              tooltipPosition="bottom">
            </sa-button>
            <sa-button 
              icon="download" 
              iconOnly="true"
              variant="success" 
              tooltip="Descargar archivo: Genera un archivo Excel con todos los datos filtrados. El proceso puede tardar unos segundos."
              tooltipPosition="left">
            </sa-button>
            <sa-button 
              icon="cog" 
              iconOnly="true"
              variant="gray" 
              tooltip="Configuración avanzada: Accede a opciones adicionales de personalización del sistema. Requiere permisos de administrador."
              tooltipPosition="right">
            </sa-button>
          </div>
        </div>
        
        <div class="mt-5">
          <h5 class="mb-3">Comparación: Texto Corto vs Texto Largo</h5>
          <div class="d-flex justify-content-center gap-4 flex-wrap">
            <sa-button 
              label="Tooltip corto" 
              variant="secondary" 
              tooltip="Texto corto"
              tooltipPosition="top">
            </sa-button>
            <sa-button 
              label="Tooltip medio" 
              variant="info" 
              tooltip="Este es un texto de longitud media que se mantiene en una línea"
              tooltipPosition="top">
            </sa-button>
            <sa-button 
              label="Tooltip largo" 
              variant="warning" 
              tooltip="Este es un texto mucho más largo que automáticamente se convierte en multilínea porque excede los 60 caracteres permitidos"
              tooltipPosition="top">
            </sa-button>
          </div>
        </div>
        
        <div class="mt-5 alert alert-info">
          <h6>✅ Sistema inteligente mejorado:</h6>
          <ul class="mb-0">
            <li><strong>Texto corto (&lt;60 caracteres):</strong> Una sola línea, ancho máximo 350px</li>
            <li><strong>Texto largo (&gt;60 caracteres):</strong> Múltiples líneas, ancho máximo 280px</li>
            <li><strong>Ancho mínimo (multilínea):</strong> 200px para mejor legibilidad</li>
            <li><strong>Alineación inteligente:</strong> Centrado para texto corto, izquierda para texto largo</li>
            <li><strong>Detección automática:</strong> Basada en longitud de caracteres</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Los tooltips pueden manejar texto largo automáticamente, dividiéndolo en múltiples líneas con un ancho máximo de 250px. Esto los hace perfectos para descripciones detalladas e instrucciones.'
      },
      source: {
        code: `<!-- Tooltip con texto largo -->
<sa-button 
  label="Información detallada" 
  variant="primary" 
  tooltip="Este es un tooltip con mucho texto que automáticamente se divide en múltiples líneas cuando el contenido es demasiado largo para caber en una sola línea."
  tooltipPosition="top">
</sa-button>

<!-- Botón con solo icono y descripción larga -->
<sa-button 
  icon="edit" 
  iconOnly="true"
  variant="primary" 
  tooltip="Editar elemento: Permite modificar todos los campos del registro seleccionado. Los cambios se guardan automáticamente."
  tooltipPosition="top">
</sa-button>

<!-- Advertencia con texto largo -->
<sa-button 
  label="Eliminar" 
  variant="danger" 
  tooltip="Advertencia importante: Esta acción modificará permanentemente los datos del sistema. Asegúrate de tener una copia de seguridad antes de continuar."
  tooltipPosition="bottom">
</sa-button>`
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
        <sa-button label="Red" variant="red"></sa-button>
        <sa-button label="Success" variant="success"></sa-button>
        <sa-button label="Success Light" variant="success-light"></sa-button>
        <sa-button label="Danger" variant="danger"></sa-button>
        <sa-button label="Danger Light" variant="danger-light"></sa-button>
        <sa-button label="Warning" variant="warning"></sa-button>
        <sa-button label="Warning Light" variant="warning-light"></sa-button>
        <sa-button label="Info" variant="info"></sa-button>
        <sa-button label="Info Light" variant="info-light"></sa-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-button label=\"Primary\" variant=\"primary\"></sa-button>\n<sa-button label=\"Secondary\" variant=\"secondary\"></sa-button>\n<sa-button label=\"Terciary\" variant=\"terciary\"></sa-button>\n<sa-button label=\"Gray\" variant=\"gray\"></sa-button>\n<sa-button label=\"Red\" variant=\"red\"></sa-button>\n<sa-button label=\"Success\" variant=\"success\"></sa-button>\n<sa-button label=\"Success Light\" variant=\"success-light\"></sa-button>\n<sa-button label=\"Danger\" variant=\"danger\"></sa-button>\n<sa-button label=\"Danger Light\" variant=\"danger-light\"></sa-button>\n<sa-button label=\"Warning\" variant=\"warning\"></sa-button>\n<sa-button label=\"Warning Light\" variant=\"warning-light\"></sa-button>\n<sa-button label=\"Info\" variant=\"info\"></sa-button>\n<sa-button label=\"Info Light\" variant=\"info-light\"></sa-button>`
      }
    }
  }
};

// Historia con diferentes tamaños
export const Sizes: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 align-items-center">
        <sa-button label="Small" size="sm" variant="primary"></sa-button>
        <sa-button label="Medium" size="md" variant="primary"></sa-button>
        <sa-button label="Large" size="lg" variant="primary"></sa-button>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-button label=\"Small\" size=\"sm\" variant=\"primary\"></sa-button>\n<sa-button label=\"Medium\" size=\"md\" variant=\"primary\"></sa-button>\n<sa-button label=\"Large\" size=\"lg\" variant=\"primary\"></sa-button>`
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
            <sa-button label="Cancel" icon="close" position="right" variant="danger"></sa-button>
            <sa-button label="Pencil" icon="pencil" position="left" variant="warning"></sa-button>
            <sa-button label="Trash" icon="trash" position="right" variant="danger"></sa-button>
            <sa-button label="Settings" icon="cog" position="left" variant="gray"></sa-button>
            <sa-button label="User" icon="user" position="right" variant="gray"></sa-button>
            <sa-button label="Heart" icon="heart" position="left" variant="red"></sa-button>
            <sa-button label="Star" icon="star" position="right" variant="red"></sa-button>
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
          <h5 class="text-info mb-2">Posiciones</h5>
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
            <sa-button label="Ubicación" icon="location" position="left" variant="danger"></sa-button>
            <sa-button label="Pin Mapa" icon="map-pin" position="right" variant="info"></sa-button>
            <sa-button label="Dirección" icon="location-arrow" position="left" variant="primary"></sa-button>
            <sa-button label="Brújula" icon="compass" position="right" variant="success"></sa-button>
            <sa-button label="Mapas" icon="maps" position="left" variant="warning"></sa-button>
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
<sa-button label="Ubicación" icon="location" position="left" variant="danger"></sa-button>
<sa-button label="Pin Mapa" icon="map-pin" position="right" variant="info"></sa-button>
<sa-button label="Dirección" icon="location-arrow" position="left" variant="primary"></sa-button>
<sa-button label="Brújula" icon="compass" position="right" variant="success"></sa-button>
<sa-button label="Mapas" icon="maps" position="left" variant="warning"></sa-button>
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

// Historia con botones que solo tienen icono
export const IconOnlyButtons: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Botones Solo con Icono</h4>
        <p class="mb-4 text-muted">Botones que muestran únicamente un icono sin texto, ideales para acciones compactas y barras de herramientas.</p>
        
        <!-- === ACCIONES BÁSICAS === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Acciones Básicas</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>
            <sa-button icon="save" iconOnly="true" variant="success" size="sm"></sa-button>
            <sa-button icon="plus" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="minus" iconOnly="true" variant="warning" size="sm"></sa-button>
            <sa-button icon="check" iconOnly="true" variant="success" size="sm"></sa-button>
            <sa-button icon="times" iconOnly="true" variant="danger" size="sm"></sa-button>
            <sa-button icon="pencil" iconOnly="true" variant="warning" size="sm"></sa-button>
            <sa-button icon="trash" iconOnly="true" variant="danger" size="sm"></sa-button>
            <sa-button icon="cog" iconOnly="true" variant="gray" size="sm"></sa-button>
            <sa-button icon="user" iconOnly="true" variant="gray" size="sm"></sa-button>
            <sa-button icon="heart" iconOnly="true" variant="red" size="sm"></sa-button>
            <sa-button icon="star" iconOnly="true" variant="red" size="sm"></sa-button>
          </div>
        </div>

        <!-- === NAVEGACIÓN === -->
        <div class="mb-4">
          <h5 class="text-success mb-2">Navegación</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button icon="home" iconOnly="true" variant="secondary" size="sm"></sa-button>
            <sa-button icon="search" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="arrow-left" iconOnly="true" variant="primary" size="sm"></sa-button>
            <sa-button icon="arrow-right" iconOnly="true" variant="primary" size="sm"></sa-button>
            <sa-button icon="arrow-up" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="arrow-down" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="chevron-left" iconOnly="true" variant="gray" size="sm"></sa-button>
            <sa-button icon="chevron-right" iconOnly="true" variant="gray" size="sm"></sa-button>
          </div>
        </div>

        <!-- === COMUNICACIÓN === -->
        <div class="mb-4">
          <h5 class="text-warning mb-2">Comunicación</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button icon="envelope" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="phone" iconOnly="true" variant="success" size="sm"></sa-button>
            <sa-button icon="bell" iconOnly="true" variant="warning" size="sm"></sa-button>
            <sa-button icon="share" iconOnly="true" variant="primary" size="sm"></sa-button>
          </div>
        </div>

        <!-- === DIFERENTES TAMAÑOS === -->
        <div class="mb-4">
          <h5 class="text-info mb-2">Diferentes Tamaños</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button icon="heart" iconOnly="true" variant="danger" size="sm"></sa-button>
            <sa-button icon="heart" iconOnly="true" variant="danger" size="md"></sa-button>
            <sa-button icon="heart" iconOnly="true" variant="danger" size="lg"></sa-button>
          </div>
        </div>

        <!-- === ESTADOS === -->
        <div class="mb-4">
          <h5 class="text-danger mb-2">Estados</h5>
          <div class="d-flex gap-3 flex-wrap align-items-center">
            <sa-button icon="eye" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="eye" iconOnly="true" variant="info" size="sm" disabled="true"></sa-button>
            <sa-button icon="spinner" iconOnly="true" variant="primary" size="sm" loading="true"></sa-button>
          </div>
        </div>

        <!-- === EJEMPLO DE USO REAL === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Ejemplo de Barra de Herramientas</h5>
          <div class="d-flex gap-2 flex-wrap align-items-center p-3 bg-light rounded">
            <sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>
            <sa-button icon="save" iconOnly="true" variant="success" size="sm"></sa-button>
            <sa-button icon="trash" iconOnly="true" variant="danger" size="sm"></sa-button>
            <div class="vr mx-2"></div>
            <sa-button icon="eye" iconOnly="true" variant="info" size="sm"></sa-button>
            <sa-button icon="share" iconOnly="true" variant="secondary" size="sm"></sa-button>
            <div class="vr mx-2"></div>
            <sa-button icon="cog" iconOnly="true" variant="gray" size="sm"></sa-button>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Botones que muestran únicamente un icono sin texto. Son ideales para barras de herramientas, acciones compactas y interfaces donde el espacio es limitado. El botón mantiene su funcionalidad completa pero ocupa menos espacio visual.'
      },
      source: {
        code: `<!-- Botón solo con icono -->
<sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>
<sa-button icon="save" iconOnly="true" variant="success" size="sm"></sa-button>
<sa-button icon="trash" iconOnly="true" variant="danger" size="sm"></sa-button>

<!-- Con diferentes tamaños -->
<sa-button icon="heart" iconOnly="true" variant="danger" size="sm"></sa-button>
<sa-button icon="heart" iconOnly="true" variant="danger" size="md"></sa-button>
<sa-button icon="heart" iconOnly="true" variant="danger" size="lg"></sa-button>

<!-- Con estados -->
<sa-button icon="eye" iconOnly="true" variant="info" size="sm"></sa-button>
<sa-button icon="eye" iconOnly="true" variant="info" size="sm" disabled="true"></sa-button>
<sa-button icon="spinner" iconOnly="true" variant="primary" size="sm" loading="true"></sa-button>`
      }
    }
  }
};

// Historia comparativa entre botones con texto y solo icono
export const TextVsIconOnly: StoryObj<SaButtonComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Comparación: Texto vs Solo Icono</h4>
        <p class="mb-4 text-muted">Comparación entre botones con texto y botones que solo muestran icono.</p>
        
        <!-- === ACCIONES BÁSICAS === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Acciones Básicas</h5>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Con texto:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button label="Editar" icon="edit" position="left" variant="primary" size="sm"></sa-button>
              <sa-button label="Guardar" icon="save" position="right" variant="success" size="sm"></sa-button>
              <sa-button label="Eliminar" icon="trash" position="left" variant="danger" size="sm"></sa-button>
              <sa-button label="Configuración" icon="cog" position="right" variant="gray" size="sm"></sa-button>
            </div>
          </div>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Solo icono:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>
              <sa-button icon="save" iconOnly="true" variant="success" size="sm"></sa-button>
              <sa-button icon="trash" iconOnly="true" variant="danger" size="sm"></sa-button>
              <sa-button icon="cog" iconOnly="true" variant="gray" size="sm"></sa-button>
            </div>
          </div>
        </div>

        <!-- === NAVEGACIÓN === -->
        <div class="mb-4">
          <h5 class="text-success mb-2">Navegación</h5>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Con texto:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button label="Inicio" icon="home" position="left" variant="secondary" size="sm"></sa-button>
              <sa-button label="Buscar" icon="search" position="right" variant="info" size="sm"></sa-button>
              <sa-button label="Anterior" icon="arrow-left" position="left" variant="primary" size="sm"></sa-button>
              <sa-button label="Siguiente" icon="arrow-right" position="right" variant="primary" size="sm"></sa-button>
            </div>
          </div>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Solo icono:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button icon="home" iconOnly="true" variant="secondary" size="sm"></sa-button>
              <sa-button icon="search" iconOnly="true" variant="info" size="sm"></sa-button>
              <sa-button icon="arrow-left" iconOnly="true" variant="primary" size="sm"></sa-button>
              <sa-button icon="arrow-right" iconOnly="true" variant="primary" size="sm"></sa-button>
            </div>
          </div>
        </div>

        <!-- === COMUNICACIÓN === -->
        <div class="mb-4">
          <h5 class="text-warning mb-2">Comunicación</h5>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Con texto:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button label="Correo" icon="envelope" position="left" variant="info" size="sm"></sa-button>
              <sa-button label="Teléfono" icon="phone" position="right" variant="success" size="sm"></sa-button>
              <sa-button label="Notificaciones" icon="bell" position="left" variant="warning" size="sm"></sa-button>
              <sa-button label="Compartir" icon="share" position="right" variant="primary" size="sm"></sa-button>
            </div>
          </div>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Solo icono:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button icon="envelope" iconOnly="true" variant="info" size="sm"></sa-button>
              <sa-button icon="phone" iconOnly="true" variant="success" size="sm"></sa-button>
              <sa-button icon="bell" iconOnly="true" variant="warning" size="sm"></sa-button>
              <sa-button icon="share" iconOnly="true" variant="primary" size="sm"></sa-button>
            </div>
          </div>
        </div>

        <!-- === DIFERENTES TAMAÑOS === -->
        <div class="mb-4">
          <h5 class="text-info mb-2">Diferentes Tamaños</h5>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Con texto:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button label="Me gusta" icon="heart" position="left" variant="danger" size="sm"></sa-button>
              <sa-button label="Me gusta" icon="heart" position="left" variant="danger" size="md"></sa-button>
              <sa-button label="Me gusta" icon="heart" position="left" variant="danger" size="lg"></sa-button>
            </div>
          </div>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Solo icono:</h6>
            <div class="d-flex gap-3 flex-wrap align-items-center">
              <sa-button icon="heart" iconOnly="true" variant="danger" size="sm"></sa-button>
              <sa-button icon="heart" iconOnly="true" variant="danger" size="md"></sa-button>
              <sa-button icon="heart" iconOnly="true" variant="danger" size="lg"></sa-button>
            </div>
          </div>
        </div>

        <!-- === EJEMPLO DE USO REAL === -->
        <div class="mb-4">
          <h5 class="text-primary mb-2">Ejemplo de Barra de Herramientas</h5>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Barra de herramientas con texto:</h6>
            <div class="d-flex gap-2 flex-wrap align-items-center p-3 bg-light rounded">
              <sa-button label="Editar" icon="edit" position="left" variant="primary" size="sm"></sa-button>
              <sa-button label="Guardar" icon="save" position="left" variant="success" size="sm"></sa-button>
              <sa-button label="Eliminar" icon="trash" position="left" variant="danger" size="sm"></sa-button>
              <div class="vr mx-2"></div>
              <sa-button label="Vista" icon="eye" position="left" variant="info" size="sm"></sa-button>
              <sa-button label="Compartir" icon="share" position="left" variant="secondary" size="sm"></sa-button>
            </div>
          </div>
          <div class="mb-3">
            <h6 class="text-muted mb-2">Barra de herramientas solo iconos (más compacta):</h6>
            <div class="d-flex gap-2 flex-wrap align-items-center p-3 bg-light rounded">
              <sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>
              <sa-button icon="save" iconOnly="true" variant="success" size="sm"></sa-button>
              <sa-button icon="trash" iconOnly="true" variant="danger" size="sm"></sa-button>
              <div class="vr mx-2"></div>
              <sa-button icon="eye" iconOnly="true" variant="info" size="sm"></sa-button>
              <sa-button icon="share" iconOnly="true" variant="secondary" size="sm"></sa-button>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparación entre botones con texto y botones que solo muestran icono. Los botones solo con icono son más compactos y ideales para barras de herramientas, mientras que los botones con texto proporcionan más contexto para acciones principales.'
      },
      source: {
        code: `<!-- Botón con texto e icono -->
<sa-button label="Editar" icon="edit" position="left" variant="primary" size="sm"></sa-button>

<!-- Botón solo con icono -->
<sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>

<!-- Barra de herramientas con texto -->
<div class="toolbar">
  <sa-button label="Editar" icon="edit" position="left" variant="primary" size="sm"></sa-button>
  <sa-button label="Guardar" icon="save" position="left" variant="success" size="sm"></sa-button>
  <sa-button label="Eliminar" icon="trash" position="left" variant="danger" size="sm"></sa-button>
</div>

<!-- Barra de herramientas solo iconos (más compacta) -->
<div class="toolbar">
  <sa-button icon="edit" iconOnly="true" variant="primary" size="sm"></sa-button>
  <sa-button icon="save" iconOnly="true" variant="success" size="sm"></sa-button>
  <sa-button icon="trash" iconOnly="true" variant="danger" size="sm"></sa-button>
</div>`
      }
    }
  }
};








