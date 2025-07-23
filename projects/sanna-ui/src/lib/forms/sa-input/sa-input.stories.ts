import type { Meta, StoryObj } from '@storybook/angular';
import { SaInputComponent } from './sa-input.component';

const meta: Meta<SaInputComponent> = {
  title: 'COMPONENTES/Forms/Input',
  component: SaInputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local'],
      description: 'Tipo de input HTML'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del input'
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Variante visual del input'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado'
    },
    readonly: {
      control: 'boolean',
      description: 'Estado de solo lectura'
    },
    required: {
      control: 'boolean',
      description: 'Campo requerido'
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Mostrar toggle de contraseña'
    },
    leftIcon: {
      control: 'text',
      description: 'Icono izquierdo (clase CSS)'
    },
    rightIcon: {
      control: 'text',
      description: 'Icono derecho (clase CSS)'
    },
    label: {
      control: 'text',
      description: 'Etiqueta del input'
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda'
    },
    errorText: {
      control: 'text',
      description: 'Texto de error'
    }
  }
};

export default meta;
type Story = StoryObj<SaInputComponent>;

// Historia básica
export const Default: Story = {
  args: {
    placeholder: 'Escribe algo aquí...',
    label: 'Input básico'
  }
};

// Input con label
export const WithLabel: Story = {
  args: {
    label: 'Nombre completo',
    placeholder: 'Ingresa tu nombre completo',
    required: true
  }
};

// Input con icono izquierdo
export const WithLeftIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Buscar productos...',
    leftIcon: 'fas fa-search'
  }
};

// Input con icono derecho
export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    type: 'email',
    rightIcon: 'fas fa-envelope'
  }
};

// Input de contraseña con toggle
export const PasswordWithToggle: Story = {
  args: {
    label: 'Contraseña',
    placeholder: 'Ingresa tu contraseña',
    type: 'password',
    showPasswordToggle: true,
    required: true
  }
};

// Input con texto de ayuda
export const WithHelperText: Story = {
  args: {
    label: 'Usuario',
    placeholder: 'Ingresa tu nombre de usuario',
    helperText: 'El nombre de usuario debe tener al menos 3 caracteres'
  }
};

// Input con error
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    type: 'email',
    errorText: 'Por favor ingresa un email válido',
    variant: 'error'
  }
};

// Input deshabilitado
export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    placeholder: 'No puedes escribir aquí',
    disabled: true
  }
};

// Input de solo lectura
export const Readonly: Story = {
  args: {
    label: 'Campo de solo lectura',
    placeholder: 'Valor fijo',
    readonly: true,
    value: 'Este valor no se puede modificar'
  }
};

// Diferentes tamaños
export const Small: Story = {
  args: {
    label: 'Input pequeño',
    placeholder: 'Tamaño pequeño',
    size: 'small'
  }
};

export const Medium: Story = {
  args: {
    label: 'Input mediano',
    placeholder: 'Tamaño mediano',
    size: 'medium'
  }
};

export const Large: Story = {
  args: {
    label: 'Input grande',
    placeholder: 'Tamaño grande',
    size: 'large'
  }
};

// Diferentes variantes
export const Success: Story = {
  args: {
    label: 'Input exitoso',
    placeholder: 'Campo válido',
    variant: 'success',
    helperText: 'Este campo es válido'
  }
};

export const Warning: Story = {
  args: {
    label: 'Input con advertencia',
    placeholder: 'Campo con advertencia',
    variant: 'warning',
    helperText: 'Este campo tiene una advertencia'
  }
};

export const Error: Story = {
  args: {
    label: 'Input con error',
    placeholder: 'Campo con error',
    variant: 'error',
    errorText: 'Este campo tiene un error'
  }
};

// Input numérico
export const Number: Story = {
  args: {
    label: 'Edad',
    placeholder: 'Ingresa tu edad',
    type: 'number',
    minlength: 1,
    maxlength: 3
  }
};

// Input de teléfono
export const Phone: Story = {
  args: {
    label: 'Teléfono',
    placeholder: '+1 (555) 123-4567',
    type: 'tel',
    leftIcon: 'fas fa-phone'
  }
};

// Input de fecha
export const Date: Story = {
  args: {
    label: 'Fecha de nacimiento',
    type: 'date'
  }
};

// Input de búsqueda
export const Search: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Buscar en el sitio...',
    type: 'search',
    leftIcon: 'fas fa-search',
    rightIcon: 'fas fa-times'
  }
}; 