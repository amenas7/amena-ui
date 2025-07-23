import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SaMessageboxComponent } from './sa-messagebox.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';

export default {
  title: 'Componentes/Messagebox',
  component: SaMessageboxComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SannaUiModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'El texto del mensaje que se mostrará en el componente. Soporta HTML como <b>, <i>, <u>, emojis, etc.'
    },
    isFullWidth: {
      control: 'boolean',
      description: 'Determina si el componente debe ocupar todo el ancho disponible'
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info'],
      description: 'Tipo de mensaje que determina el color y estilo (success = verde por defecto)'
    },
    iconName: {
      control: 'text',
      description: 'Nombre del icono a mostrar a la izquierda (ej: "paperclip", "heart", "star")'
    },
    iconSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del icono'
    },
    iconColor: {
      control: 'color',
      description: 'Color hexadecimal del icono (ej: "#5BAB5F")'
    }
  }
} as Meta<SaMessageboxComponent>;

export const Default: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isFullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje por defecto (success) con texto plano. El componente también soporta HTML y emojis, pero por defecto muestra texto simple. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Success: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje de éxito que indica que la operación se completó correctamente.',
    isFullWidth: false,
    type: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje de éxito con colores verde. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Warning: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje de advertencia que requiere tu atención.',
    isFullWidth: false,
    type: 'warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje de advertencia con colores naranja/amarillo. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Error: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje de error que indica que algo salió mal.',
    isFullWidth: false,
    type: 'error'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje de error con colores rojo/rosa. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Info: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje informativo con información útil para el usuario.',
    isFullWidth: false,
    type: 'info'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje informativo con colores azul. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const FullWidth: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje que ocupa todo el ancho disponible del contenedor.',
    isFullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje que ocupa todo el ancho disponible. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const ShortMessage: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Mensaje corto',
    isFullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje corto que mantiene su tamaño natural. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const LongMessage: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje muy largo que debería envolverse en múltiples líneas para demostrar cómo se comporta el componente cuando el texto es extenso y necesita ser dividido en varias líneas para mantener la legibilidad.',
    isFullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje largo que demuestra el comportamiento de wrapping del texto. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const WithIcon: StoryObj<SaMessageboxComponent> = {
  args: {
    message: 'Este es un mensaje con un icono a la izquierda.',
    isFullWidth: false,
    type: 'success',
    iconName: 'paperclip',
    iconSize: 'md',
    iconColor: '#5BAB5F'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje que incluye un icono a la izquierda. El icono se alinea correctamente con el texto y mantiene el estilo del componente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const IconColors: StoryObj<SaMessageboxComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Iconos con diferentes colores</h4>
        
        <div class="mb-4">
          <h5 class="mb-2">Icono verde</h5>
          <sa-messagebox 
            message="Mensaje con icono verde"
            [iconName]="'paperclip'"
            [iconSize]="'md'"
            [iconColor]="'#5BAB5F'">
          </sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Icono azul</h5>
          <sa-messagebox 
            message="Mensaje con icono azul"
            type="info"
            [iconName]="'paperclip'"
            [iconSize]="'md'"
            [iconColor]="'#007bff'">
          </sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Icono rojo</h5>
          <sa-messagebox 
            message="Mensaje con icono rojo"
            type="error"
            [iconName]="'paperclip'"
            [iconSize]="'md'"
            [iconColor]="'#dc3545'">
          </sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Icono naranja</h5>
          <sa-messagebox 
            message="Mensaje con icono naranja"
            type="warning"
            [iconName]="'paperclip'"
            [iconSize]="'md'"
            [iconColor]="'#fd7e14'">
          </sa-messagebox>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de iconos con diferentes colores personalizados. El color del icono se puede modificar independientemente del tipo de mensaje.'
      },
      source: {
        code: `<sa-messagebox 
  message="Mensaje con icono verde"
  [iconName]="'paperclip'"
  [iconSize]="'md'"
  [iconColor]="'#5BAB5F'">
</sa-messagebox>

<sa-messagebox 
  message="Mensaje con icono azul"
  type="info"
  [iconName]="'paperclip'"
  [iconSize]="'md'"
  [iconColor]="'#007bff'">
</sa-messagebox>

<sa-messagebox 
  message="Mensaje con icono rojo"
  type="error"
  [iconName]="'paperclip'"
  [iconSize]="'md'"
  [iconColor]="'#dc3545'">
</sa-messagebox>

<sa-messagebox 
  message="Mensaje con icono naranja"
  type="warning"
  [iconName]="'paperclip'"
  [iconSize]="'md'"
  [iconColor]="'#fd7e14'">
</sa-messagebox>`
      }
    }
  }
};

export const HtmlContent: StoryObj<SaMessageboxComponent> = {
  args: {
    message: '🚨 <b>¡Atención!</b> Este es un mensaje con <i>formato HTML</i> que incluye <u>texto subrayado</u> y emojis 🎉',
    isFullWidth: false,
    type: 'warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje que demuestra el soporte para HTML incluyendo etiquetas <b>, <i>, <u> y emojis. Esta story muestra específicamente las capacidades de formato HTML del componente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Examples: StoryObj<SaMessageboxComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Ejemplos de Messagebox</h4>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje con icono</h5>
          <sa-messagebox 
            message="Este es un mensaje con un icono a la izquierda."
            [iconName]="'paperclip'"
            [iconSize]="'md'"
            [iconColor]="'#5BAB5F'">
          </sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje de advertencia con HTML</h5>
          <sa-messagebox message="🚨 <b>¡Atención!</b> Este es un mensaje con <i>formato HTML</i>." type="warning"></sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje de error con icono y HTML</h5>
          <sa-messagebox 
            message="❌ <b>Error:</b> Algo salió <i>mal</i> en el proceso." 
            type="error"
            [iconName]="'exclamation-triangle'"
            [iconSize]="'md'"
            [iconColor]="'#dc3545'">
          </sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje informativo con HTML</h5>
          <sa-messagebox message="ℹ️ <b>Información:</b> Este es un mensaje <u>informativo</u> con formato." type="info"></sa-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje con ancho completo y HTML</h5>
          <sa-messagebox message="📢 <b>Anuncio:</b> Este mensaje ocupa todo el ancho y tiene <i>formato HTML</i>." [isFullWidth]="true"></sa-messagebox>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-messagebox message=\"👆 Lorem <b>ipsum</b> dolor sit amet, <u>consectetur</u> adipiscing elit.\"></sa-messagebox>\n\n<sa-messagebox message=\"Este es un mensaje con un icono a la izquierda.\" [iconName]=\"'paperclip'\" [iconSize]=\"'md'\" [iconColor]=\"'#5BAB5F'\"></sa-messagebox>\n\n<sa-messagebox message=\"🚨 <b>¡Atención!</b> Este es un mensaje con <i>formato HTML</i>.\" type=\"warning\"></sa-messagebox>\n\n<sa-messagebox message=\"❌ <b>Error:</b> Algo salió <i>mal</i> en el proceso.\" type=\"error\" [iconName]=\"'exclamation-triangle'\" [iconSize]=\"'md'\"></sa-messagebox>\n\n<sa-messagebox message=\"ℹ️ <b>Información:</b> Este es un mensaje <u>informativo</u> con formato.\" type=\"info\"></sa-messagebox>\n\n<sa-messagebox message=\"📢 <b>Anuncio:</b> Este mensaje ocupa todo el ancho y tiene <i>formato HTML</i>.\" [isFullWidth]=\"true\"></sa-messagebox>`
      }
    }
  }
}; 