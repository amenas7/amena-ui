import type { Meta, StoryObj } from '@storybook/angular';
import { SaTableComponent, TableColumn, TableData } from './sa-table.component';

const meta: Meta<SaTableComponent> = {
  title: 'Componentes/SaTable',
  component: SaTableComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Un componente de tabla responsive con paginación, ordenamiento y múltiples opciones de configuración.

## Características

- **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Paginación**: Navegación entre páginas con información de totales
- **Ordenamiento**: Capacidad de ordenar columnas (configurable por columna)
- **Personalizable**: Múltiples opciones de configuración para adaptarse a diferentes necesidades
- **Bootstrap 5**: Utiliza las clases de Bootstrap 5 para un diseño consistente

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| columns | TableColumn[] | [] | Configuración de las columnas |
| data | TableData[] | [] | Datos a mostrar en la tabla |
| itemsPerPage | number | 10 | Elementos por página |
| showPagination | boolean | true | Mostrar controles de paginación |
| showItemsPerPage | boolean | true | Mostrar selector de elementos por página |
| showTotal | boolean | true | Mostrar información de totales |
| striped | boolean | true | Filas alternadas |
| hover | boolean | true | Efecto hover en las filas |
| bordered | boolean | false | Bordes en la tabla |
| responsive | boolean | true | Tabla responsive |
| sortable | boolean | true | Habilitar ordenamiento |
| loading | boolean | false | Estado de carga |
| emptyMessage | string | 'No hay datos disponibles' | Mensaje cuando no hay datos |

## Events

| Event | Tipo | Descripción |
|-------|------|-------------|
| pageChange | number | Emitido cuando cambia la página |
| itemsPerPageChange | number | Emitido cuando cambia el número de elementos por página |
| sortChange | {column: string, direction: 'asc' \| 'desc'} | Emitido cuando se ordena una columna |

## Interfaces

### TableColumn
\`\`\`typescript
interface TableColumn {
  key: string;           // Clave única de la columna
  label: string;         // Etiqueta visible
  sortable?: boolean;    // Si la columna es ordenable
  width?: string;        // Ancho de la columna (opcional)
}
\`\`\`

### TableData
\`\`\`typescript
interface TableData {
  [key: string]: any;    // Objeto con los datos de la fila
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Configuración de las columnas de la tabla'
    },
    data: {
      control: 'object',
      description: 'Datos a mostrar en la tabla'
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Número de elementos por página'
    },
    showPagination: {
      control: 'boolean',
      description: 'Mostrar controles de paginación'
    },
    showItemsPerPage: {
      control: 'boolean',
      description: 'Mostrar selector de elementos por página'
    },
    showTotal: {
      control: 'boolean',
      description: 'Mostrar información de totales'
    },
    striped: {
      control: 'boolean',
      description: 'Aplicar filas alternadas'
    },
    hover: {
      control: 'boolean',
      description: 'Aplicar efecto hover'
    },
    bordered: {
      control: 'boolean',
      description: 'Mostrar bordes en la tabla'
    },
    responsive: {
      control: 'boolean',
      description: 'Hacer la tabla responsive'
    },
    sortable: {
      control: 'boolean',
      description: 'Habilitar ordenamiento'
    },
    loading: {
      control: 'boolean',
      description: 'Mostrar estado de carga'
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensaje cuando no hay datos'
    }
  }
};

export default meta;
type Story = StoryObj<SaTableComponent>;

// Datos de ejemplo
const sampleData: TableData[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan.perez@email.com', age: 28, department: 'Desarrollo', salary: 45000 },
  { id: 2, name: 'María García', email: 'maria.garcia@email.com', age: 32, department: 'Diseño', salary: 52000 },
  { id: 3, name: 'Carlos López', email: 'carlos.lopez@email.com', age: 25, department: 'Marketing', salary: 38000 },
  { id: 4, name: 'Ana Rodríguez', email: 'ana.rodriguez@email.com', age: 29, department: 'Ventas', salary: 41000 },
  { id: 5, name: 'Luis Martínez', email: 'luis.martinez@email.com', age: 35, department: 'Desarrollo', salary: 48000 },
  { id: 6, name: 'Sofia Herrera', email: 'sofia.herrera@email.com', age: 27, department: 'Diseño', salary: 44000 },
  { id: 7, name: 'Diego Silva', email: 'diego.silva@email.com', age: 31, department: 'Marketing', salary: 39000 },
  { id: 8, name: 'Carmen Vega', email: 'carmen.vega@email.com', age: 33, department: 'Ventas', salary: 43000 },
  { id: 9, name: 'Roberto Torres', email: 'roberto.torres@email.com', age: 26, department: 'Desarrollo', salary: 42000 },
  { id: 10, name: 'Patricia Ruiz', email: 'patricia.ruiz@email.com', age: 30, department: 'Diseño', salary: 46000 },
  { id: 11, name: 'Fernando Morales', email: 'fernando.morales@email.com', age: 34, department: 'Marketing', salary: 40000 },
  { id: 12, name: 'Isabel Castro', email: 'isabel.castro@email.com', age: 28, department: 'Ventas', salary: 42000 }
];

const sampleColumns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true, width: '80px' },
  { key: 'name', label: 'Nombre', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'age', label: 'Edad', sortable: true, width: '80px' },
  { key: 'department', label: 'Departamento', sortable: true },
  { key: 'salary', label: 'Salario', sortable: true, width: '100px' }
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    itemsPerPage: 10,
    showPagination: true,
    showItemsPerPage: true,
    showTotal: true,
    striped: true,
    hover: true,
    bordered: false,
    responsive: true,
    sortable: true,
    loading: false,
    emptyMessage: 'No hay datos disponibles'
  }
};

export const Bordered: Story = {
  args: {
    ...Default.args,
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con bordes visibles para mejor separación visual.'
      }
    }
  }
};

export const NoStripes: Story = {
  args: {
    ...Default.args,
    striped: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin filas alternadas para un diseño más limpio.'
      }
    }
  }
};

export const NoHover: Story = {
  args: {
    ...Default.args,
    hover: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin efecto hover en las filas.'
      }
    }
  }
};

export const NoSorting: Story = {
  args: {
    ...Default.args,
    sortable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con ordenamiento deshabilitado.'
      }
    }
  }
};

export const NoPagination: Story = {
  args: {
    ...Default.args,
    showPagination: false,
    showItemsPerPage: false,
    showTotal: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin paginación, mostrando todos los datos.'
      }
    }
  }
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla en estado de carga con spinner.'
      }
    }
  }
};

export const Empty: Story = {
  args: {
    ...Default.args,
    data: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin datos, mostrando el mensaje de estado vacío.'
      }
    }
  }
};

export const CustomEmptyMessage: Story = {
  args: {
    ...Default.args,
    data: [],
    emptyMessage: 'No se encontraron registros que coincidan con los criterios de búsqueda'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con mensaje personalizado cuando no hay datos.'
      }
    }
  }
};

export const LargeDataset: Story = {
  args: {
    ...Default.args,
    data: Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Usuario ${i + 1}`,
      email: `usuario${i + 1}@email.com`,
      age: 20 + (i % 40),
      department: ['Desarrollo', 'Diseño', 'Marketing', 'Ventas'][i % 4],
      salary: 35000 + (i * 1000)
    })),
    itemsPerPage: 25
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con un conjunto grande de datos para demostrar la paginación.'
      }
    }
  }
};

export const MobileOptimized: Story = {
  args: {
    ...Default.args,
    itemsPerPage: 5
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Tabla optimizada para dispositivos móviles con menos elementos por página.'
      }
    }
  }
}; 