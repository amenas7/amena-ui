import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SaTagComponent } from './sa-tag.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Componentes/Tag',
  component: SaTagComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
          El componente sa-tag es un elemento inline basado en Bootstrap 5 que permite mostrar etiquetas o tags con diferentes tipos y tamaños. Es completamente responsive y compatible con la metodología de Bootstrap.
          
          ## Características principales:
          - **100% Responsive**: Basado en Bootstrap 5 para máxima compatibilidad
          - **Elemento inline**: Se integra naturalmente en el flujo del texto
          - **Múltiples tipos**: primary, secondary, success, danger, warning, info, dark, light
          - **Diferentes tamaños**: small, medium, large
          - **Accesible**: Diseñado siguiendo las mejores prácticas de accesibilidad
        `
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          // Transformación simple que preserva el resaltado de sintaxis
          let result = code;
          
          // Transformar property bindings innecesarios a attribute binding
          result = result.replace(/\[text\]="'([^']+)'"/g, 'text="$1"');
          result = result.replace(/\[type\]="'([^']+)'"/g, 'type="$1"');
          result = result.replace(/\[size\]="'([^']+)'"/g, 'size="$1"');
          

          
          // Limpiar espacios extra
          result = result.replace(/\n\s*\n/g, '\n');
          
          return result;
        }
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto que se muestra en el tag'
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'],
      description: 'Tipo/color del tag basado en Bootstrap'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del tag'
    }
  }
} as Meta<SaTagComponent>;

// Historia básica
export const Primary: StoryObj<SaTagComponent> = {
  args: {
    text: 'Tag Principal',
    type: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag principal con el color verde característico de Sanna. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Secondary
export const Secondary: StoryObj<SaTagComponent> = {
  args: {
    text: 'Tag Secundario',
    type: 'secondary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag secundario con borde verde y fondo blanco. Ideal para etiquetas menos prominentes.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Success
export const Success: StoryObj<SaTagComponent> = {
  args: {
    text: 'Éxito',
    type: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag de éxito con fondo verde claro. Perfecto para indicar estados positivos.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Danger
export const Danger: StoryObj<SaTagComponent> = {
  args: {
    text: 'Peligro',
    type: 'danger'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag de peligro con fondo rojo claro. Ideal para alertas o errores.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Warning
export const Warning: StoryObj<SaTagComponent> = {
  args: {
    text: 'Advertencia',
    type: 'warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag de advertencia con fondo amarillo. Para notificaciones importantes.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Info
export const Info: StoryObj<SaTagComponent> = {
  args: {
    text: 'Información',
    type: 'info'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag informativo con fondo azul claro. Para datos adicionales.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Dark
export const Dark: StoryObj<SaTagComponent> = {
  args: {
    text: 'Oscuro',
    type: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag oscuro con fondo gris oscuro y texto blanco.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia Light
export const Light: StoryObj<SaTagComponent> = {
  args: {
    text: 'Claro',
    type: 'light'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag claro con fondo gris claro y texto oscuro.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};



// Historia con diferentes tipos
export const AllTypes: StoryObj<SaTagComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-2 flex-wrap align-items-center">
        <sa-tag text="Primary" type="primary"></sa-tag>
        <sa-tag text="Secondary" type="secondary"></sa-tag>
        <sa-tag text="Success" type="success"></sa-tag>
        <sa-tag text="Danger" type="danger"></sa-tag>
        <sa-tag text="Warning" type="warning"></sa-tag>
        <sa-tag text="Info" type="info"></sa-tag>
        <sa-tag text="Dark" type="dark"></sa-tag>
        <sa-tag text="Light" type="light"></sa-tag>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Muestra todos los tipos disponibles de tags con sus respectivos colores y estilos.'
      },
      source: {
        code: `<sa-tag text="Primary" type="primary"></sa-tag>
<sa-tag text="Secondary" type="secondary"></sa-tag>
<sa-tag text="Success" type="success"></sa-tag>
<sa-tag text="Danger" type="danger"></sa-tag>
<sa-tag text="Warning" type="warning"></sa-tag>
<sa-tag text="Info" type="info"></sa-tag>
<sa-tag text="Dark" type="dark"></sa-tag>
<sa-tag text="Light" type="light"></sa-tag>`
      }
    }
  }
};

// Historia con diferentes tamaños
export const AllSizes: StoryObj<SaTagComponent> = {
  render: () => ({
    template: `
      <div class="d-flex gap-3 align-items-center">
        <sa-tag text="Small" size="small" type="primary"></sa-tag>
        <sa-tag text="Medium" size="medium" type="primary"></sa-tag>
        <sa-tag text="Large" size="large" type="primary"></sa-tag>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparación de los diferentes tamaños disponibles: small, medium y large.'
      },
      source: {
        code: `<sa-tag text="Small" size="small" type="primary"></sa-tag>
<sa-tag text="Medium" size="medium" type="primary"></sa-tag>
<sa-tag text="Large" size="large" type="primary"></sa-tag>`
      }
    }
  }
};

// Historia con colección de tags
export const TagCollection: StoryObj<SaTagComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h5 class="mb-3">Colección de Tags de Tecnologías</h5>
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <sa-tag text="JavaScript" type="primary"></sa-tag>
          <sa-tag text="Angular" type="success"></sa-tag>
          <sa-tag text="TypeScript" type="info"></sa-tag>
          <sa-tag text="Bootstrap" type="secondary"></sa-tag>
          <sa-tag text="SCSS" type="warning"></sa-tag>
          <sa-tag text="Desarrollo" type="dark"></sa-tag>
        </div>
        
        <h5 class="mt-4 mb-3">Diferentes Tamaños</h5>
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <sa-tag text="Small" type="primary" size="small"></sa-tag>
          <sa-tag text="Medium" type="primary" size="medium"></sa-tag>
          <sa-tag text="Large" type="primary" size="large"></sa-tag>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de colecciones de tags en diferentes tipos y tamaños. Ideal para mostrar tecnologías, categorías o etiquetas.'
      },
      source: {
        code: `<!-- Tags con diferentes tipos -->
<sa-tag text="JavaScript" type="primary"></sa-tag>
<sa-tag text="Angular" type="success"></sa-tag>
<sa-tag text="TypeScript" type="info"></sa-tag>
<sa-tag text="Bootstrap" type="secondary"></sa-tag>

<!-- Tags con diferentes tamaños -->
<sa-tag text="Small" type="primary" size="small"></sa-tag>
<sa-tag text="Medium" type="primary" size="medium"></sa-tag>
<sa-tag text="Large" type="primary" size="large"></sa-tag>`
      }
    }
  }
};

// Historia con uso en texto
export const InlineUsage: StoryObj<SaTagComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h5 class="mb-3">Uso Inline en Texto</h5>
        <p class="mb-3">
          Este proyecto está desarrollado con 
          <sa-tag text="Angular" type="success" size="small"></sa-tag> 
          y utiliza 
          <sa-tag text="TypeScript" type="info" size="small"></sa-tag> 
          como lenguaje principal. También incorpora 
          <sa-tag text="Bootstrap 5" type="primary" size="small"></sa-tag> 
          para el diseño responsive.
        </p>
        
        <h5 class="mb-3">Lista de Tecnologías</h5>
        <p class="mb-3">
          <strong>Frontend:</strong> 
          <sa-tag text="Angular 17" type="success" size="small"></sa-tag>
          <sa-tag text="TypeScript" type="info" size="small"></sa-tag>
          <sa-tag text="SCSS" type="warning" size="small"></sa-tag>
        </p>
        
        <p class="mb-3">
          <strong>UI Framework:</strong> 
          <sa-tag text="Bootstrap 5" type="primary" size="small"></sa-tag>
          <sa-tag text="FontAwesome" type="secondary" size="small"></sa-tag>
        </p>
        
        <p class="mb-3">
          <strong>Herramientas:</strong> 
          <sa-tag text="Storybook" type="dark" size="small"></sa-tag>
          <sa-tag text="Jest" type="light" size="small"></sa-tag>
        </p>
        
        <h5 class="mb-3">Estado del Proyecto</h5>
        <p class="mb-3">
          Estado actual: <sa-tag text="En Desarrollo" type="warning"></sa-tag>
          | Última actualización: <sa-tag text="Hoy" type="success"></sa-tag>
          | Versión: <sa-tag text="v1.0.0" type="info"></sa-tag>
        </p>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de cómo usar los tags inline dentro de párrafos y texto. Los tags se integran naturalmente en el flujo del texto manteniendo la alineación vertical.'
      },
      source: {
        code: `<!-- Uso inline en párrafos -->
<p>
  Este proyecto está desarrollado con 
  <sa-tag text="Angular" type="success" size="small"></sa-tag> 
  y utiliza 
  <sa-tag text="TypeScript" type="info" size="small"></sa-tag> 
  como lenguaje principal.
</p>

<!-- Agrupación de tags por categoría -->
<p>
  <strong>Frontend:</strong> 
  <sa-tag text="Angular 17" type="success" size="small"></sa-tag>
  <sa-tag text="TypeScript" type="info" size="small"></sa-tag>
  <sa-tag text="SCSS" type="warning" size="small"></sa-tag>
</p>

<!-- Tags para estados -->
<p>
  Estado: <sa-tag text="En Desarrollo" type="warning"></sa-tag>
  | Versión: <sa-tag text="v1.0.0" type="info"></sa-tag>
</p>`
      }
    }
  }
};

// Historia responsive
export const ResponsiveLayout: StoryObj<SaTagComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h5 class="mb-3">Layout Responsive</h5>
        <p class="mb-3 text-muted">Los tags se adaptan automáticamente al espacio disponible y se envuelven correctamente en diferentes tamaños de pantalla.</p>
        
        <div class="row">
          <div class="col-12 col-md-6">
            <h6 class="mb-2">Columna Responsive</h6>
            <div class="d-flex gap-2 flex-wrap">
              <sa-tag text="JavaScript" type="primary"></sa-tag>
              <sa-tag text="TypeScript" type="info"></sa-tag>
              <sa-tag text="Angular" type="success"></sa-tag>
              <sa-tag text="React" type="secondary"></sa-tag>
              <sa-tag text="Vue.js" type="warning"></sa-tag>
              <sa-tag text="Node.js" type="dark"></sa-tag>
              <sa-tag text="Express" type="light"></sa-tag>
            </div>
          </div>
          
          <div class="col-12 col-md-6">
            <h6 class="mb-2">Tags en Grid</h6>
            <div class="d-flex gap-2 flex-wrap">
              <sa-tag text="HTML5" type="danger"></sa-tag>
              <sa-tag text="CSS3" type="info"></sa-tag>
              <sa-tag text="SCSS" type="warning"></sa-tag>
              <sa-tag text="Bootstrap" type="primary"></sa-tag>
              <sa-tag text="Material UI" type="secondary"></sa-tag>
              <sa-tag text="Tailwind" type="success"></sa-tag>
            </div>
          </div>
        </div>
        
        <div class="mt-4">
          <h6 class="mb-2">Contenedor Flexible</h6>
          <div class="border p-3 rounded" style="max-width: 300px;">
            <p class="mb-2 text-muted">En contenedores estrechos:</p>
            <div class="d-flex gap-2 flex-wrap">
              <sa-tag text="Frontend" type="primary" size="small"></sa-tag>
              <sa-tag text="Backend" type="success" size="small"></sa-tag>
              <sa-tag text="Database" type="info" size="small"></sa-tag>
              <sa-tag text="DevOps" type="warning" size="small"></sa-tag>
              <sa-tag text="Testing" type="secondary" size="small"></sa-tag>
              <sa-tag text="Documentation" type="dark" size="small"></sa-tag>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demostración de cómo los tags se comportan en layouts responsive usando el sistema de grid de Bootstrap. Los tags se adaptan automáticamente y se envuelven según el espacio disponible.'
      },
      source: {
        code: `<!-- Layout responsive con Bootstrap Grid -->
<div class="row">
  <div class="col-12 col-md-6">
    <div class="d-flex gap-2 flex-wrap">
      <sa-tag text="JavaScript" type="primary"></sa-tag>
      <sa-tag text="TypeScript" type="info"></sa-tag>
      <sa-tag text="Angular" type="success"></sa-tag>
      <sa-tag text="React" type="secondary"></sa-tag>
    </div>
  </div>
</div>

<!-- Contenedor flexible -->
<div class="d-flex gap-2 flex-wrap">
  <sa-tag text="Frontend" type="primary" size="small"></sa-tag>
  <sa-tag text="Backend" type="success" size="small"></sa-tag>
  <sa-tag text="Database" type="info" size="small"></sa-tag>
</div>`
      }
    }
  }
};
