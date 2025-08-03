import type { Meta, StoryObj } from '@storybook/angular';
import { SaTableComponent, TableColumn, TableData } from './sa-table.component';

const meta: Meta<SaTableComponent> = {
  title: 'Componentes/SaTable',
  component: SaTableComponent,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst'
    },
    docs: {
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          // Transformación simple que preserva el resaltado de sintaxis
          let result = code;
          
          // Solo emptyMessage mantiene comillas simples, las demás propiedades NO
          result = result.replace(/\[itemsPerPage\]="'([^']+)'"/g, 'itemsPerPage="$1"');
          result = result.replace(/\[showPagination\]="true"/g, 'showPagination="true"');
          result = result.replace(/\[showPagination\]="false"/g, 'showPagination="false"');
          result = result.replace(/\[showItemsPerPage\]="true"/g, 'showItemsPerPage="true"');
          result = result.replace(/\[showItemsPerPage\]="false"/g, 'showItemsPerPage="false"');
          result = result.replace(/\[showTotal\]="true"/g, 'showTotal="true"');
          result = result.replace(/\[showTotal\]="false"/g, 'showTotal="false"');
          result = result.replace(/\[hover\]="true"/g, 'hover="true"');
          result = result.replace(/\[hover\]="false"/g, 'hover="false"');
          result = result.replace(/\[loading\]="true"/g, 'loading="true"');
          result = result.replace(/\[loading\]="false"/g, 'loading="false"');
          result = result.replace(/\[showFirstLastButtons\]="true"/g, 'showFirstLastButtons="true"');
          result = result.replace(/\[showFirstLastButtons\]="false"/g, 'showFirstLastButtons="false"');
          result = result.replace(/\[minWidth\]="'([^']+)'"/g, 'minWidth="$1"');
          
          // Limpiar espacios extra
          result = result.replace(/\n\s*\n/g, '\n');
          
          return result;
        }
      },
      description: {
        component: `
Un componente de tabla responsive con paginación y múltiples opciones de configuración. Diseñado con estilos personalizados para una apariencia moderna y limpia.

## Estilos Personalizados

### Tabla
- **Border-radius**: Esquinas redondeadas (0.375rem)
- **Cabeceras**: Fondo verde claro (#EEF8F0), sin bordes inferiores
- **Filas**: Fondo blanco puro, sin efectos hover por defecto
- **Efecto hover**: Color gris claro (#f8f9fa) cuando hover es true

### Paginación
- **Botones**: Border-radius sutil (0.25rem), bordes grises claros (#dddfe0)
- **Colores activos**: Fondo verde (#5BAB5F) con texto blanco
- **Botones primera/última página**: Opcionales, se pueden ocultar

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| columns | TableColumn[] | [] | Configuración de las columnas |
| data | TableData[] | [] | Datos a mostrar en la tabla |
| itemsPerPage | number | 10 | Elementos por página |
| showItemsPerPage | boolean | true | Mostrar selector de elementos por página |
| showPagination | boolean | true | Mostrar controles de paginación |
| showTotal | boolean | true | Mostrar información de totales |
| showFirstLastButtons | boolean | true | Mostrar botones de primera y última página |
| hover | boolean | false | Efecto hover en las filas (deshabilitado por defecto) |
| loading | boolean | false | Estado de carga |
| emptyMessage | string | 'No hay datos disponibles' | Mensaje cuando no hay datos |
| minWidth | string | 600px | Ancho mínimo de la tabla para scroll horizontal |

## Events

| Event | Tipo | Descripción |
|-------|------|-------------|
| pageChange | number | Emitido cuando cambia la página |
| itemsPerPageChange | number | Emitido cuando cambia el número de elementos por página |

## Interfaces

### TableColumn
\`\`\`typescript
interface TableColumn {
  key: string;           // Clave única de la columna
  label: string;         // Etiqueta visible
  width?: string;        // Ancho de la columna (opcional)
}
\`\`\`

### TableData
\`\`\`typescript
interface TableData {
  [key: string]: any;    // Objeto con los datos de la fila
}
\`\`\`

## Uso

\`\`\`typescript
import { SaTableComponent } from '@sanna-ui/sa-table';

// Configuración básica
const columns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Nombre', sortable: true },
  { key: 'email', label: 'Email' }
];

const data: TableData[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com' },
  { id: 2, name: 'María García', email: 'maria@email.com' }
];

// En el template
<sa-table 
  [columns]="columns" 
  [data]="data"
  [itemsPerPage]="10"
  [showPagination]="true"
  [showFirstLastButtons]="true"
  [bordered]="true"
  (pageChange)="onPageChange($event)">
</sa-table>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'object' },
      description: 'Configuración de las columnas de la tabla'
    },
    data: {
      control: { type: 'object' },
      description: 'Datos a mostrar en la tabla'
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Número de elementos por página. Usa attribute binding: itemsPerPage="10"'
    },
    showItemsPerPage: {
      control: { type: 'boolean' },
      description: 'Mostrar selector de elementos por página. Usa attribute binding: showItemsPerPage="true"'
    },
    showPagination: {
      control: { type: 'boolean' },
      description: 'Mostrar controles de paginación. Usa attribute binding: showPagination="true"'
    },
    showTotal: {
      control: { type: 'boolean' },
      description: 'Mostrar información de totales. Usa attribute binding: showTotal="true"'
    },
    showFirstLastButtons: {
      control: { type: 'boolean' },
      description: 'Mostrar botones de primera y última página. Usa attribute binding: showFirstLastButtons="true"'
    },
    hover: {
      control: { type: 'boolean' },
      description: 'Aplicar efecto hover (deshabilitado por defecto). Usa attribute binding: hover="true"'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Mostrar estado de carga. Usa attribute binding: loading="true"'
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Mensaje cuando no hay datos. NOTA: Esta es la ÚNICA propiedad que usa property binding con comillas simples: [emptyMessage]="\'texto\'"'
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Ancho mínimo de la tabla para scroll horizontal. Ejemplos: 600px, 800px, 1000px'
    }
  },
  args: {
    // Valores por defecto para todos los stories
    hover: true,
    loading: false,
    showItemsPerPage: true,
    showPagination: true,
    showTotal: true,
    showFirstLastButtons: false,
    itemsPerPage: 10,
    emptyMessage: 'No hay datos disponibles',
    minWidth: '600px'
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
    data: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con el diseño moderno por defecto: sin hover y border-radius.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const ConHover: Story = {
  args: {
    ...Default.args,
    hover: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con efecto hover en las filas. Las cabeceras mantienen su estilo sin hover.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const SinPaginacion: Story = {
  args: {
    ...Default.args,
    showPagination: false,
    showItemsPerPage: false,
    showTotal: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin paginación, mostrando todos los datos con el diseño personalizado.'
      },
      source: {
        type: 'dynamic'
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
        story: 'Tabla en estado de carga con spinner, manteniendo el diseño personalizado.'
      },
      source: {
        type: 'dynamic'
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
        story: 'Tabla sin datos, mostrando el mensaje de estado vacío con el diseño personalizado.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const MensajePersonalizado: Story = {
  args: {
    ...Default.args,
    data: [],
    emptyMessage: 'No se encontraron registros que coincidan con los criterios de búsqueda'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con mensaje personalizado cuando no hay datos, manteniendo el diseño moderno.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const RegistrosGrandes: Story = {
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
        story: 'Tabla con un conjunto grande de datos para demostrar la paginación'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const SinBotonesPrimeraUltima: Story = {
  args: {
    ...Default.args,
    showFirstLastButtons: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con paginación sin los botones de primera y última página. Útil para interfaces más limpias o cuando se prefiere navegación secuencial.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const ScrollTest: Story = {
  args: {
    columns: [
      { key: 'id', label: 'ID', width: '60px' },
      { key: 'name', label: 'Nombre Completo del Empleado', width: '250px' },
      { key: 'email', label: 'Dirección de Correo Electrónico Corporativo', width: '350px' },
      { key: 'phone', label: 'Número de Teléfono Móvil', width: '180px' },
      { key: 'department', label: 'Departamento de Trabajo', width: '220px' },
      { key: 'position', label: 'Cargo o Posición Laboral', width: '280px' },
      { key: 'salary', label: 'Salario Anual', width: '150px' },
      { key: 'startDate', label: 'Fecha de Inicio de Contrato', width: '200px' },
      { key: 'status', label: 'Estado de Empleado', width: '120px' },
      { key: 'location', label: 'Ubicación de la Oficina', width: '180px' },
      { key: 'manager', label: 'Supervisor Directo', width: '200px' },
      { key: 'projects', label: 'Proyectos Asignados', width: '300px' }
    ],
    data: [
      { 
        id: 1, 
        name: 'Juan Carlos Pérez González', 
        email: 'juan.carlos.perez.gonzalez@empresa.com', 
        phone: '+34 612 345 678',
        department: 'Desarrollo de Software',
        position: 'Desarrollador Senior Full Stack',
        salary: '€45,000',
        startDate: '15/03/2020',
        status: 'Activo',
        location: 'Madrid, España',
        manager: 'Ana García López',
        projects: 'Portal Web, App Móvil, API REST'
      },
      { 
        id: 2, 
        name: 'María Isabel García Rodríguez', 
        email: 'maria.isabel.garcia.rodriguez@empresa.com', 
        phone: '+34 623 456 789',
        department: 'Recursos Humanos',
        position: 'Directora de RRHH',
        salary: '€52,000',
        startDate: '01/01/2019',
        status: 'Activo',
        location: 'Barcelona, España',
        manager: 'Carlos Ruiz Martín',
        projects: 'Reclutamiento, Formación, Bienestar'
      },
      { 
        id: 3, 
        name: 'Carlos Alberto López Martínez', 
        email: 'carlos.alberto.lopez.martinez@empresa.com', 
        phone: '+34 634 567 890',
        department: 'Marketing Digital',
        position: 'Especialista en SEO',
        salary: '€38,000',
        startDate: '10/06/2021',
        status: 'Activo',
        location: 'Valencia, España',
        manager: 'Laura Fernández Castro',
        projects: 'SEO, SEM, Redes Sociales'
      }
    ],
    hover: true,
    showPagination: false,
    showItemsPerPage: false,
    showTotal: false,
    minWidth: '800px'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: `
## 🧪 Story para Probar Scroll Horizontal

Este story está diseñado específicamente para probar la funcionalidad de scroll horizontal. Incluye:

### Características de Prueba:

- **12 columnas muy anchas**: Para forzar el scroll horizontal
- **Nombres de columnas largos**: Para verificar que no se compriman
- **Datos extensos**: Emails corporativos largos y descripciones detalladas
- **Vista móvil por defecto**: Para simular pantallas pequeñas
- **Ancho mínimo configurable**: 800px para demostrar la propiedad minWidth

### Cómo Probar:

1. **En Storybook**: 
   - Ve a este story
   - Redimensiona la ventana del navegador
   - Deberías ver scroll horizontal cuando el ancho sea < 800px

2. **En Herramientas de Desarrollo**:
   - F12 → Device Mode
   - Selecciona iPhone o Android
   - Verifica que aparece scroll horizontal

3. **Indicadores Visuales**:
   - Scrollbar personalizado (gris claro)
   - Scroll suave al arrastrar
   - Hover en scrollbar oscurece el color

### Breakpoints de Prueba:

- **> 800px**: Sin scroll (tabla normal)
- **400px - 800px**: Scroll con ancho mínimo 800px
- **< 400px**: Scroll con ancho mínimo 400px (móvil)
        `
      }
    }
  }
};

export const CustomMinWidth: Story = {
  args: {
    columns: [
      { key: 'id', label: 'ID', width: '80px' },
      { key: 'name', label: 'Nombre', width: '200px' },
      { key: 'email', label: 'Email', width: '300px' },
      { key: 'phone', label: 'Teléfono', width: '150px' },
      { key: 'department', label: 'Departamento', width: '180px' },
      { key: 'position', label: 'Cargo', width: '200px' },
      { key: 'salary', label: 'Salario', width: '120px' },
      { key: 'startDate', label: 'Fecha Inicio', width: '150px' },
      { key: 'status', label: 'Estado', width: '100px' }
    ],
    data: [
      { 
        id: 1, 
        name: 'Juan Pérez', 
        email: 'juan.perez@empresa.com', 
        phone: '+34 612 345 678',
        department: 'Desarrollo',
        position: 'Desarrollador Senior',
        salary: '€45,000',
        startDate: '15/03/2020',
        status: 'Activo'
      },
      { 
        id: 2, 
        name: 'María García', 
        email: 'maria.garcia@empresa.com', 
        phone: '+34 623 456 789',
        department: 'RRHH',
        position: 'Directora RRHH',
        salary: '€52,000',
        startDate: '01/01/2019',
        status: 'Activo'
      }
    ],
    hover: true,
    showPagination: true,
    showItemsPerPage: true,
    showTotal: true,
    minWidth: '1000px'
  },
  parameters: {
    docs: {
      description: {
        story: `
## 📏 Tabla con Ancho Mínimo Personalizado

Este story demuestra cómo usar la propiedad minWidth para configurar el ancho mínimo de la tabla.

### Características:

- **minWidth: 1000px**: Ancho mínimo configurado a 1000px
- **Scroll horizontal**: Se activa cuando el ancho de pantalla < 1000px
- **Configuración dinámica**: El ancho mínimo se puede cambiar desde los controles

### Cómo Usar:

\`\`\`html
<!-- Ancho mínimo por defecto (600px) -->
<sa-table [columns]="columns" [data]="data"></sa-table>

<!-- Ancho mínimo personalizado -->
<sa-table [columns]="columns" [data]="data" minWidth="800px"></sa-table>

<!-- Ancho mínimo muy amplio -->
<sa-table [columns]="columns" [data]="data" minWidth="1200px"></sa-table>
\`\`\`

### Valores Recomendados:

- **600px**: Para tablas con pocas columnas
- **800px**: Para tablas con columnas moderadas
- **1000px**: Para tablas con muchas columnas
- **1200px**: Para tablas muy amplias
        `
      }
    }
  }
};
