import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MessageboxComponent } from './messagebox.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';

export default {
  title: 'Componentes/Messagebox',
  component: MessageboxComponent,
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
      description: 'El texto del mensaje que se mostrará en el componente'
    },
    isFullWidth: {
      control: 'boolean',
      description: 'Determina si el componente debe ocupar todo el ancho disponible'
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info'],
      description: 'Tipo de mensaje que determina el color y estilo (success = verde por defecto)'
    }
  }
} as Meta<MessageboxComponent>;

export const Default: StoryObj<MessageboxComponent> = {
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isFullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje por defecto (success) con el texto Lorem ipsum. Modifica las propiedades en los controles para ver cómo cambia el código dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Success: StoryObj<MessageboxComponent> = {
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

export const Warning: StoryObj<MessageboxComponent> = {
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

export const Error: StoryObj<MessageboxComponent> = {
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

export const Info: StoryObj<MessageboxComponent> = {
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

export const FullWidth: StoryObj<MessageboxComponent> = {
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

export const ShortMessage: StoryObj<MessageboxComponent> = {
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

export const LongMessage: StoryObj<MessageboxComponent> = {
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

export const Examples: StoryObj<MessageboxComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Ejemplos de Messagebox</h4>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje por defecto (success)</h5>
          <lib-messagebox message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></lib-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje de advertencia</h5>
          <lib-messagebox message="Este es un mensaje de advertencia." type="warning"></lib-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje de error</h5>
          <lib-messagebox message="Este es un mensaje de error." type="error"></lib-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje informativo</h5>
          <lib-messagebox message="Este es un mensaje informativo." type="info"></lib-messagebox>
        </div>
        
        <div class="mb-4">
          <h5 class="mb-2">Mensaje con ancho completo</h5>
          <lib-messagebox message="Este mensaje ocupa todo el ancho disponible." [isFullWidth]="true"></lib-messagebox>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-messagebox message=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"></lib-messagebox>\n\n<lib-messagebox message=\"Este es un mensaje de advertencia.\" type=\"warning\"></lib-messagebox>\n\n<lib-messagebox message=\"Este es un mensaje de error.\" type=\"error\"></lib-messagebox>\n\n<lib-messagebox message=\"Este es un mensaje informativo.\" type=\"info\"></lib-messagebox>\n\n<lib-messagebox message=\"Este mensaje ocupa todo el ancho disponible.\" [isFullWidth]=\"true\"></lib-messagebox>`
      }
    }
  }
}; 