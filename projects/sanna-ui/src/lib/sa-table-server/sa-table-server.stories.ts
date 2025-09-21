import type { Meta, StoryObj } from '@storybook/angular';
import { SaTableServerComponent, TableColumn, TableData, ServerTableRequest, ServerTableResponse } from './sa-table-server.component';
import { Observable, of, delay } from 'rxjs';

// Datos de ejemplo para simular una base de datos
const SAMPLE_DATA: TableData[] = [
  { id: 1, codigo: 'LAB001', paciente: 'Juan Pérez García', dni: '12345678', estado: 'Pendiente', fechaCreacion: '2024-01-15', distrito: 'San Isidro', clasificacion: 'R' },
  { id: 2, codigo: 'LAB002', paciente: 'María Elena Rodríguez', dni: '87654321', estado: 'En Proceso', fechaCreacion: '2024-01-16', distrito: 'Miraflores', clasificacion: 'T' },
  { id: 3, codigo: 'LAB003', paciente: 'Carlos Antonio López', dni: '11223344', estado: 'Completado', fechaCreacion: '2024-01-17', distrito: 'Surco', clasificacion: 'H' },
  { id: 4, codigo: 'LAB004', paciente: 'Ana Sofía Martínez', dni: '44332211', estado: 'Pendiente', fechaCreacion: '2024-01-18', distrito: 'La Molina', clasificacion: 'R' },
  { id: 5, codigo: 'LAB005', paciente: 'Luis Fernando Torres', dni: '55667788', estado: 'En Proceso', fechaCreacion: '2024-01-19', distrito: 'San Borja', clasificacion: 'T' },
  { id: 6, codigo: 'LAB006', paciente: 'Carmen Rosa Silva', dni: '88776655', estado: 'Completado', fechaCreacion: '2024-01-20', distrito: 'Barranco', clasificacion: 'H' },
  { id: 7, codigo: 'LAB007', paciente: 'Roberto Carlos Vega', dni: '99887766', estado: 'Pendiente', fechaCreacion: '2024-01-21', distrito: 'San Isidro', clasificacion: 'R' },
  { id: 8, codigo: 'LAB008', paciente: 'Patricia Isabel Morales', dni: '66554433', estado: 'En Proceso', fechaCreacion: '2024-01-22', distrito: 'Miraflores', clasificacion: 'T' },
  { id: 9, codigo: 'LAB009', paciente: 'Fernando José Castro', dni: '33445566', estado: 'Completado', fechaCreacion: '2024-01-23', distrito: 'Surco', clasificacion: 'H' },
  { id: 10, codigo: 'LAB010', paciente: 'Isabel María Herrera', dni: '22334455', estado: 'Pendiente', fechaCreacion: '2024-01-24', distrito: 'La Molina', clasificacion: 'R' },
  { id: 11, codigo: 'LAB011', paciente: 'Diego Alejandro Ruiz', dni: '77889900', estado: 'En Proceso', fechaCreacion: '2024-01-25', distrito: 'San Borja', clasificacion: 'T' },
  { id: 12, codigo: 'LAB012', paciente: 'Sofía Valentina Díaz', dni: '00998877', estado: 'Completado', fechaCreacion: '2024-01-26', distrito: 'Barranco', clasificacion: 'H' },
  { id: 13, codigo: 'LAB013', paciente: 'Andrés Sebastián Flores', dni: '11000922', estado: 'Pendiente', fechaCreacion: '2024-01-27', distrito: 'San Isidro', clasificacion: 'R' },
  { id: 14, codigo: 'LAB014', paciente: 'Valeria Nicole Mendoza', dni: '22119933', estado: 'En Proceso', fechaCreacion: '2024-01-28', distrito: 'Miraflores', clasificacion: 'T' },
  { id: 15, codigo: 'LAB015', paciente: 'Joaquín Emilio Guerrero', dni: '33228844', estado: 'Completado', fechaCreacion: '2024-01-29', distrito: 'Surco', clasificacion: 'H' },
  { id: 16, codigo: 'LAB016', paciente: 'Camila Esperanza Sánchez', dni: '44337755', estado: 'Pendiente', fechaCreacion: '2024-01-30', distrito: 'La Molina', clasificacion: 'R' },
  { id: 17, codigo: 'LAB017', paciente: 'Mateo Gabriel Ramírez', dni: '55446666', estado: 'En Proceso', fechaCreacion: '2024-02-01', distrito: 'San Borja', clasificacion: 'T' },
  { id: 18, codigo: 'LAB018', paciente: 'Lucía Fernanda Jiménez', dni: '66557777', estado: 'Completado', fechaCreacion: '2024-02-02', distrito: 'Barranco', clasificacion: 'H' },
  { id: 19, codigo: 'LAB019', paciente: 'Santiago Matías Vargas', dni: '77668888', estado: 'Pendiente', fechaCreacion: '2024-02-03', distrito: 'San Isidro', clasificacion: 'R' },
  { id: 20, codigo: 'LAB020', paciente: 'Antonella Grace Romero', dni: '88779999', estado: 'En Proceso', fechaCreacion: '2024-02-04', distrito: 'Miraflores', clasificacion: 'T' },
  { id: 21, codigo: 'LAB021', paciente: 'Emilio Maximiliano Cruz', dni: '99880011', estado: 'Completado', fechaCreacion: '2024-02-05', distrito: 'Surco', clasificacion: 'H' },
  { id: 22, codigo: 'LAB022', paciente: 'Victoria Esperanza León', dni: '00991122', estado: 'Pendiente', fechaCreacion: '2024-02-06', distrito: 'La Molina', clasificacion: 'R' },
  { id: 23, codigo: 'LAB023', paciente: 'Nicolás Eduardo Peña', dni: '11002233', estado: 'En Proceso', fechaCreacion: '2024-02-07', distrito: 'San Borja', clasificacion: 'T' },
  { id: 24, codigo: 'LAB024', paciente: 'Renata Milagros Arias', dni: '22113344', estado: 'Completado', fechaCreacion: '2024-02-08', distrito: 'Barranco', clasificacion: 'H' },
  { id: 25, codigo: 'LAB025', paciente: 'Sebastián Rodrigo Medina', dni: '33224455', estado: 'Pendiente', fechaCreacion: '2024-02-09', distrito: 'San Isidro', clasificacion: 'R' }
];

// Función para simular una llamada al servidor
function simulateServerCall(request: ServerTableRequest): Observable<ServerTableResponse> {
  let filteredData = [...SAMPLE_DATA];
  
  // Aplicar filtros si existen
  if (request.filters) {
    Object.keys(request.filters).forEach(key => {
      const filterValue = request.filters![key];
      if (filterValue) {
        filteredData = filteredData.filter(item => 
          item[key]?.toString().toLowerCase().includes(filterValue.toLowerCase())
        );
      }
    });
  }
  
  // Aplicar ordenamiento si existe
  if (request.sortColumn) {
    filteredData.sort((a, b) => {
      const aVal = a[request.sortColumn!];
      const bVal = b[request.sortColumn!];
      
      if (request.sortDirection === 'desc') {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      } else {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      }
    });
  }
  
  // Calcular paginación
  const totalItems = filteredData.length;
  const startIndex = (request.pageNumber - 1) * request.rowsPerPage;
  const endIndex = startIndex + request.rowsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);
  
  const response: ServerTableResponse = {
    data: pageData,
    totalItems: totalItems,
    currentPage: request.pageNumber,
    itemsPerPage: request.rowsPerPage
  };
  
  // Simular latencia de red
  return of(response).pipe(delay(800));
}

const meta: Meta<SaTableServerComponent> = {
  title: 'Componentes/Table Server',
  component: SaTableServerComponent,
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
          
          // Limpiar property bindings innecesarios
          result = result.replace(/\[hover\]="true"/g, 'hover="true"');
          result = result.replace(/\[hover\]="false"/g, 'hover="false"');
          result = result.replace(/\[loading\]="true"/g, 'loading="true"');
          result = result.replace(/\[loading\]="false"/g, 'loading="false"');
          result = result.replace(/\[showFirstLastButtons\]="true"/g, 'showFirstLastButtons="true"');
          result = result.replace(/\[showFirstLastButtons\]="false"/g, 'showFirstLastButtons="false"');
          result = result.replace(/\[showFilters\]="true"/g, 'showFilters="true"');
          result = result.replace(/\[showFilters\]="false"/g, 'showFilters="false"');
          result = result.replace(/\[autoLoad\]="true"/g, 'autoLoad="true"');
          result = result.replace(/\[autoLoad\]="false"/g, 'autoLoad="false"');
          result = result.replace(/\[minWidth\]="'([^']+)'"/g, 'minWidth="$1"');
          
          // Limpiar espacios extra
          result = result.replace(/\n\s*\n/g, '\n');
          
          return result;
        }
      },
      description: {
        component: `
## Events

| Event | Tipo | Descripción |
|-------|------|-------------|
| loadData | ServerTableRequest | Emitido cuando se necesita cargar datos del servidor |
| pageChange | number | Emitido cuando cambia la página |
| itemsPerPageChange | number | Emitido cuando cambia el número de elementos por página |
| sortChange | {column: string, direction: 'asc' \\| 'desc'} | Emitido cuando cambia el ordenamiento |
| rowClick | TableData | Emitido al hacer click en una fila |
| rowDoubleClick | TableData | Emitido al hacer doble click en una fila |
| filterChange | {[column: string]: string} | Emitido cuando cambian los filtros |

## Interfaces

### ServerTableRequest
\`\`\`typescript
interface ServerTableRequest {
  pageNumber: number;        // Página actual (1-based)
  rowsPerPage: number;       // Elementos por página
  searchTerm?: string;       // Término de búsqueda global
  sortColumn?: string;       // Columna a ordenar
  sortDirection?: 'asc' | 'desc'; // Dirección del ordenamiento
  filters?: { [key: string]: any }; // Filtros por columna
}
\`\`\`

### ServerTableResponse
\`\`\`typescript
interface ServerTableResponse<T = TableData> {
  data: T[];               // Datos de la página actual
  totalItems: number;      // Total de elementos en el servidor
  currentPage: number;     // Página actual
  itemsPerPage: number;    // Elementos por página
}
\`\`\`

### ServerPaginationData
\`\`\`typescript
interface ServerPaginationData {
  currentPage: number;       // Página actual
  itemsPerPage: number;      // Elementos por página
  totalItems: number;        // Total de elementos
  currentItemsCount: number; // Elementos en la página actual
}
\`\`\`

## Uso

\`\`\`typescript
import { SaTableServerComponent } from '@sanna-ui/sa-table-server';

// Configuración
const columns: TableColumn[] = [
  { key: 'codigo', label: 'Código', sortable: true, width: '120px' },
  { key: 'paciente', label: 'Paciente', sortable: true },
  { key: 'estado', label: 'Estado', sortable: true, width: '100px' }
];

const paginationData: ServerPaginationData = {
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 0,
  currentItemsCount: 0
};

// En el template
<sa-table-server 
  [columns]="columns" 
  [data]="currentPageData"
  [paginationData]="paginationData"
  [loading]="isLoading"
  showFilters="true"
  hover="true"
  (loadData)="onLoadData($event)"
  (rowClick)="onRowClick($event)">
</sa-table-server>

// En el componente
onLoadData(request: ServerTableRequest) {
  this.isLoading = true;
  
  this.dataService.getData(request).subscribe(response => {
    this.currentPageData = response.data;
    this.paginationData = {
      currentPage: response.currentPage,
      itemsPerPage: response.itemsPerPage,
      totalItems: response.totalItems,
      currentItemsCount: response.data.length
    };
    this.isLoading = false;
  });
}
\`\`\`

## Diferencias con sa-table

- **Server-Side**: Los datos se cargan desde el servidor página por página
- **Paginación Real**: No carga todos los datos en memoria
- **Filtros Remotos**: Los filtros se aplican en el servidor
- **Escalabilidad**: Maneja miles/millones de registros eficientemente
- **Latencia**: Puede tener latencia en navegación/filtros

## Métodos Públicos

- **reload()**: Recarga los datos de la página actual
- **clearFilters()**: Limpia todos los filtros y recarga
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
      description: 'Datos de la página actual (recibidos del servidor)'
    },
    paginationData: {
      control: { type: 'object' },
      description: 'Datos de paginación del servidor'
    },
    paginationOptions: {
      control: { type: 'object' },
      description: 'Opciones de configuración de la paginación'
    },
    autoLoad: {
      control: { type: 'boolean' },
      description: 'Cargar datos automáticamente al inicializar. Usa attribute binding: autoLoad="true"'
    },
    hover: {
      control: { type: 'boolean' },
      description: 'Aplicar efecto hover. Usa attribute binding: hover="true"'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Mostrar estado de carga. Usa attribute binding: loading="true"'
    },
    showFirstLastButtons: {
      control: { type: 'boolean' },
      description: 'Mostrar botones de primera y última página. Usa attribute binding: showFirstLastButtons="true"'
    },
    showFilters: {
      control: { type: 'boolean' },
      description: 'Mostrar inputs de filtrado. Usa attribute binding: showFilters="true"'
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Mensaje cuando no hay datos. Property binding: [emptyMessage]="mensaje"'
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Ancho mínimo de la tabla. Ejemplos: 600px, 800px, 1000px'
    }
  },
  args: {
    // Valores por defecto
    hover: true,
    loading: false,
    showFirstLastButtons: true,
    showFilters: false,
    autoLoad: true,
    emptyMessage: 'No hay datos disponibles',
    minWidth: '600px'
  }
};

export default meta;
type Story = StoryObj<SaTableServerComponent>;

// Story básico
export const Basic: Story = {
  args: {
    columns: [
      { key: 'codigo', label: 'Código', sortable: true, width: '120px' },
      { key: 'paciente', label: 'Paciente', sortable: true },
      { key: 'estado', label: 'Estado', sortable: true, width: '100px' },
      { key: 'fechaCreacion', label: 'Fecha', sortable: true, width: '120px' }
    ],
    data: [],
    paginationData: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      currentItemsCount: 0
    },
    paginationOptions: {
      itemsPerPageOptions: [5, 10, 25, 50],
      showItemsPerPageSelector: true,
      showPageInfo: true
    },
    hover: true,
    loading: false,
    showFilters: false,
    autoLoad: true
  },
  render: (args) => {
    // Simular estado del componente
    let currentData = args.data;
    let currentPaginationData = args.paginationData;
    let isLoading = args.loading;
    
    return {
      props: {
        ...args,
        data: currentData,
        paginationData: currentPaginationData,
        loading: isLoading,
        onLoadData: (request: ServerTableRequest) => {
          console.log('🔍 Server request:', request);
          isLoading = true;
          
          // Simular llamada al servidor
          simulateServerCall(request).subscribe(response => {
            currentData = response.data;
            currentPaginationData = {
              currentPage: response.currentPage,
              itemsPerPage: response.itemsPerPage,
              totalItems: response.totalItems,
              currentItemsCount: response.data.length
            };
            isLoading = false;
            
            console.log('📊 Server response:', response);
          });
        },
        onRowClick: (row: TableData) => {
          console.log('🖱️ Row clicked:', row);
        },
        onRowDoubleClick: (row: TableData) => {
          console.log('🖱️ Row double-clicked:', row);
        }
      },
      template: `
        <sa-table-server 
          [columns]="columns" 
          [data]="data"
          [paginationData]="paginationData"
          [paginationOptions]="paginationOptions"
          [loading]="loading"
          [hover]="hover"
          [showFilters]="showFilters"
          [showFirstLastButtons]="showFirstLastButtons"
          [autoLoad]="autoLoad"
          [emptyMessage]="emptyMessage"
          [minWidth]="minWidth"
          (loadData)="onLoadData($event)"
          (rowClick)="onRowClick($event)"
          (rowDoubleClick)="onRowDoubleClick($event)">
        </sa-table-server>
      `
    };
  },
  parameters: {
    docs: {
      description: {
        story: `
## 🖥️ Tabla con Paginación Server-Side

Esta es la implementación básica del componente **sa-table-server** que maneja la paginación en el servidor.

### Características principales:

**📡 Server-Side Processing:**
- Los datos se cargan página por página desde el servidor
- No mantiene todos los datos en memoria del cliente
- Escalable para grandes volúmenes de datos

**🔄 Estados de Carga:**
- Overlay de loading durante las peticiones
- Feedback visual inmediato al usuario
- Botones deshabilitados durante carga

**📄 Paginación Inteligente:**
- Información de página actual y total de registros
- Navegación por páginas (anterior/siguiente)
- Selector de elementos por página
- Botones de primera y última página opcionales

### Eventos del Servidor:

1. **loadData**: Se emite automáticamente cuando:
   - El componente se inicializa (si autoLoad=true)
   - Se cambia de página
   - Se modifica el número de elementos por página
   - Se aplica ordenamiento
   - Se modifican filtros

2. **Otros eventos**: rowClick, rowDoubleClick funcionan igual que sa-table

### Flujo de Datos:

1. Componente emite \`loadData\` con parámetros de la petición
2. El componente padre hace la llamada HTTP al servidor
3. El servidor procesa: filtros, ordenamiento, paginación
4. El componente padre actualiza \`data\` y \`paginationData\`
5. La tabla se renderiza con los nuevos datos

### Uso en el Código:

\`\`\`typescript
onLoadData(request: ServerTableRequest) {
  this.loading = true;
  
  this.apiService.getPagedData(request).subscribe(response => {
    this.data = response.data;
    this.paginationData = {
      currentPage: response.currentPage,
      itemsPerPage: response.itemsPerPage,
      totalItems: response.totalItems,
      currentItemsCount: response.data.length
    };
    this.loading = false;
  });
}
\`\`\`
        `
      }
    }
  }
};

// Story con filtros
export const ConFiltros: Story = {
  args: {
    ...Basic.args,
    showFilters: true,
    columns: [
      { key: 'codigo', label: 'Código', sortable: true, width: '120px' },
      { key: 'paciente', label: 'Paciente', sortable: true },
      { key: 'dni', label: 'DNI', sortable: false, width: '100px' },
      { key: 'estado', label: 'Estado', sortable: true, width: '120px' },
      { key: 'distrito', label: 'Distrito', sortable: true, width: '140px' },
      { key: 'clasificacion', label: 'Clasificación', sortable: true, width: '120px', noFilter: true }
    ]
  },
  render: Basic.render,
  parameters: {
    docs: {
      description: {
        story: `
## 🔍 Tabla con Filtros Server-Side

Demuestra el filtrado en tiempo real con procesamiento en el servidor.

### Funcionalidades de Filtrado:

**🔍 Filtros por Columna:**
- Input de texto debajo de cada encabezado
- Búsqueda en tiempo real mientras escribes
- Los filtros se envían al servidor para procesamiento
- Configuración \`noFilter: true\` para excluir columnas

**⚡ Comportamiento Inteligente:**
- **Debounce automático**: Evita sobrecarga de peticiones
- **Reset de página**: Vuelve a página 1 al filtrar
- **Combinación de filtros**: Múltiples columnas simultáneamente
- **Estado persistente**: Los filtros se mantienen al paginar

**🎯 Optimizaciones:**
- Solo se procesan en el servidor (no en cliente)
- Ideal para datasets grandes
- Menor consumo de ancho de banda

### Pruebas Sugeridas:

1. **Filtro por paciente**: Escribe "María" en la columna Paciente
2. **Filtro por estado**: Escribe "Pendiente" en Estado
3. **Filtros combinados**: Usa múltiples filtros a la vez
4. **Navegación**: Cambia de página con filtros activos
5. **Limpiar**: Borra los filtros para ver todos los datos

### Configuración de Filtros:

\`\`\`typescript
const columns = [
  { key: 'codigo', label: 'Código', sortable: true },
  { key: 'paciente', label: 'Paciente', sortable: true },
  { key: 'acciones', label: 'Acciones', noFilter: true } // Sin filtro
];
\`\`\`

### Evento de Filtros:

\`\`\`typescript
onLoadData(request: ServerTableRequest) {
  // request.filters contiene los filtros activos
  console.log('Filtros activos:', request.filters);
  
  this.apiService.getFilteredData(request).subscribe(response => {
    // Los datos ya vienen filtrados del servidor
    this.updateTableData(response);
  });
}
\`\`\`
        `
      }
    }
  }
};

// Story con estado de carga
export const ConCarga: Story = {
  args: {
    ...Basic.args,
    loading: true,
    data: SAMPLE_DATA.slice(0, 5),
    paginationData: {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: 25,
      currentItemsCount: 5
    }
  },
  parameters: {
    docs: {
      description: {
        story: `
## ⏳ Estado de Carga

Muestra cómo se ve la tabla durante las peticiones al servidor.

### Estados de Loading:

**🔄 Overlay de Carga:**
- Spinner centrado sobre la tabla
- Fondo semitransparente
- Mensaje "Cargando..." descriptivo

**🚫 Interacciones Bloqueadas:**
- Botones de paginación deshabilitados
- Tabla con opacidad reducida
- Previene clicks durante carga

**✨ Experiencia de Usuario:**
- Feedback visual inmediato
- No pérdida de contexto visual
- Transiciones suaves

### Implementación:

\`\`\`typescript
onLoadData(request: ServerTableRequest) {
  this.loading = true; // Activa el estado de carga
  
  this.apiService.getData(request).subscribe({
    next: (response) => {
      this.data = response.data;
      this.paginationData = response.pagination;
      this.loading = false; // Desactiva el estado de carga
    },
    error: (error) => {
      console.error('Error cargando datos:', error);
      this.loading = false; // Importante: desactivar en caso de error
    }
  });
}
\`\`\`

### Mejores Prácticas:

1. **Siempre desactivar loading**: En success y error
2. **Timeouts**: Considerar timeout para peticiones lentas
3. **Estados de error**: Manejar errores apropiadamente
4. **Skeleton loading**: Para mejor UX (próximas versiones)
        `
      }
    }
  }
};

// Story sin datos
export const SinDatos: Story = {
  args: {
    ...Basic.args,
    data: [],
    paginationData: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      currentItemsCount: 0
    },
    emptyMessage: 'No se encontraron registros que coincidan con los filtros aplicados'
  },
  parameters: {
    docs: {
      description: {
        story: `
## 📭 Estado Sin Datos

Muestra cómo se comporta la tabla cuando no hay datos disponibles.

### Características:

**📝 Mensaje Personalizable:**
- Texto configurable vía \`emptyMessage\`
- Centrado y con estilos apropiados
- Visible en toda la fila de la tabla

**🎨 Diseño Consistente:**
- Mantiene la estructura de la tabla
- Encabezados visibles
- Paginación oculta automáticamente

**🔧 Casos de Uso:**
- Sin datos iniciales
- Filtros sin resultados
- Errores de carga (con mensaje apropiado)
- Estados de búsqueda vacía

### Configuración:

\`\`\`typescript
// Mensaje personalizado
<sa-table-server 
  [emptyMessage]="'No se encontraron órdenes para los filtros seleccionados'"
  ...>
</sa-table-server>

// En el componente
onLoadData(request: ServerTableRequest) {
  this.apiService.getData(request).subscribe(response => {
    if (response.totalItems === 0) {
      this.emptyMessage = request.filters ? 
        'No hay resultados para los filtros aplicados' : 
        'No hay datos disponibles';
    }
    this.updateTable(response);
  });
}
\`\`\`
        `
      }
    }
  }
};
