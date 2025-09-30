import type { Meta, StoryObj } from '@storybook/angular';
import { SaTableServerComponent, TableColumn, TableData, ServerTableRequest, ServerTableResponse } from './sa-table-server.component';
import { Observable, of, delay, map, catchError, BehaviorSubject } from 'rxjs';

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

// Función para llamar a JSONPlaceholder API real
function callRealAPI(request: ServerTableRequest): Observable<ServerTableResponse> {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  
  // Construir URL con parámetros
  let url = `${baseUrl}/posts`;
  const params = new URLSearchParams();
  
  // Paginación: JSONPlaceholder soporta _page y _limit
  params.append('_page', request.pageNumber.toString());
  params.append('_limit', request.rowsPerPage.toString());
  
  // Filtros: JSONPlaceholder soporta filtros por campos
  if (request.filters) {
    Object.keys(request.filters).forEach(key => {
      if (request.filters![key]) {
        // Mapear nuestros campos a los de JSONPlaceholder
        if (key === 'titulo') {
          params.append('title_like', request.filters![key]);
        } else if (key === 'userId') {
          params.append('userId', request.filters![key]);
        }
      }
    });
  }
  
  // Ordenamiento: JSONPlaceholder soporta _sort y _order
  if (request.sortColumn) {
    params.append('_sort', request.sortColumn);
    params.append('_order', request.sortDirection || 'asc');
  }
  
  const fullUrl = `${url}?${params.toString()}`;
  
  return new Observable<ServerTableResponse>(observer => {
    fetch(fullUrl)
      .then(response => {
        // JSONPlaceholder incluye el total en los headers
        const totalItems = parseInt(response.headers.get('x-total-count') || '100');
        return response.json().then(data => ({ data, totalItems }));
      })
      .then(({ data, totalItems }) => {
        // Transformar datos de JSONPlaceholder a nuestro formato
        const transformedData = data.map((post: any) => ({
          id: post.id,
          codigo: `POST-${post.id.toString().padStart(3, '0')}`,
          titulo: post.title,
          userId: post.userId,
          autor: `Usuario ${post.userId}`,
          estado: post.id % 3 === 0 ? 'Publicado' : post.id % 2 === 0 ? 'Borrador' : 'Revisión',
          fecha: new Date(2024, 0, post.id).toLocaleDateString('es-ES')
        }));
        
        const response: ServerTableResponse = {
          data: transformedData,
          totalItems: totalItems,
          currentPage: request.pageNumber,
          itemsPerPage: request.rowsPerPage
        };
        
        observer.next(response);
        observer.complete();
      })
      .catch(error => {
        console.error('Error llamando a API:', error);
        // Fallback a datos simulados en caso de error
        observer.next({
          data: [],
          totalItems: 0,
          currentPage: request.pageNumber,
          itemsPerPage: request.rowsPerPage
        });
        observer.complete();
      });
  }).pipe(delay(300)); // Pequeño delay para simular latencia real
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
          result = result.replace(/\[loading\]="true"/g, 'loading="true"');
          result = result.replace(/\[loading\]="false"/g, 'loading="false"');
          result = result.replace(/\[showFirstLastButtons\]="true"/g, 'showFirstLastButtons="true"');
          result = result.replace(/\[showFirstLastButtons\]="false"/g, 'showFirstLastButtons="false"');
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
    loading: {
      control: { type: 'boolean' },
      description: 'Mostrar estado de carga. Usa attribute binding: loading="true"'
    },
    showFirstLastButtons: {
      control: { type: 'boolean' },
      description: 'Mostrar botones de primera y última página. Usa attribute binding: showFirstLastButtons="true"'
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Mensaje cuando no hay datos. Property binding: [emptyMessage]="mensaje"'
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Ancho mínimo de la tabla. Ejemplos: 600px, 800px, 1000px'
    },
    minTableHeight: {
      control: { type: 'number' },
      description: 'Altura mínima de la tabla en píxeles cuando no hay datos. Evita que se vea colapsada. Valor por defecto: 200px (~5 filas)'
    }
  },
  args: {
    // Valores por defecto
    loading: false,
    showFirstLastButtons: true,
    autoLoad: false, // No cargar automáticamente en stories
    emptyMessage: 'No hay datos disponibles',
    minWidth: '600px',
    minTableHeight: 200
  }
};

export default meta;
type Story = StoryObj<SaTableServerComponent>;

// Story básico con datos estáticos
export const Basico: Story = {
  args: {
    columns: [
      { key: 'codigo', label: 'Código', sortable: true, width: '120px' },
      { key: 'titulo', label: 'Título', sortable: true },
      { key: 'autor', label: 'Autor', sortable: false, width: '120px' },
      { key: 'estado', label: 'Estado', sortable: false, width: '100px' },
      { key: 'fecha', label: 'Fecha', sortable: true, width: '120px' }
    ],
    data: [
      { id: 1, codigo: 'POST-001', titulo: 'sunt aut facere repellat provident occaecati excepturi', autor: 'Usuario 1', estado: 'Revisión', fecha: '01/01/2024' },
      { id: 2, codigo: 'POST-002', titulo: 'qui est esse', autor: 'Usuario 1', estado: 'Borrador', fecha: '02/01/2024' },
      { id: 3, codigo: 'POST-003', titulo: 'ea molestias quasi exercitationem repellat', autor: 'Usuario 1', estado: 'Publicado', fecha: '03/01/2024' },
      { id: 4, codigo: 'POST-004', titulo: 'eum et est occaecati', autor: 'Usuario 1', estado: 'Revisión', fecha: '04/01/2024' },
      { id: 5, codigo: 'POST-005', titulo: 'nesciunt quas odio', autor: 'Usuario 1', estado: 'Borrador', fecha: '05/01/2024' }
    ],
    paginationData: {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: 47,
      currentItemsCount: 5
    },
    paginationOptions: {
      itemsPerPageOptions: [5, 10, 15],
      showItemsPerPageSelector: true,
      showPageInfo: true
    },
    loading: false, // ✅ Asegurar que no esté en loading
    autoLoad: false, // ✅ No cargar automáticamente
    emptyMessage: 'No hay datos disponibles',
    minWidth: '600px',
    loadData: (request: ServerTableRequest) => {
      console.log('🚀 SIMULACIÓN DE LLAMADA AL BACKEND:');
      console.log('📡 Request:', {
        method: 'GET',
        url: `https://api.ejemplo.com/posts?page=${request.pageNumber}&limit=${request.rowsPerPage}`,
        params: request
      });
      console.log('⏱️ En una app real aquí se vería loading: true');
      console.log('📊 Después de 1-2s llegaría la respuesta del servidor');
    },
    rowClick: (row: TableData) => {
      console.log('🖱️ Row clicked:', row);
    }
  },
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  }
};



// Story con estado de carga
export const ConCarga: Story = {
  args: {
    ...Basico.args,
    loading: true, // Mantener para mostrar el estado de carga
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
        `
      }
    }
  }
};



// Story sin datos
export const SinDatos: Story = {
  args: {
    ...Basico.args,
    data: [],
    paginationData: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      currentItemsCount: 0
    },
    loading: false, // ✅ Sin loading
    autoLoad: false, // ✅ No cargar automáticamente
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
