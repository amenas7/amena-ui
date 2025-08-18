import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SaLegendComponent } from './sa-legend.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';

export default {
  title: 'Componentes/Legend',
  component: SaLegendComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SannaUiModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
        Componente de leyenda que muestra un rectángulo coloreado con tooltip opcional.
        Ideal para leyendas de gráficos, indicadores de estado y visualizaciones de datos.
        `
      },
      source: {
        type: 'dynamic',
        language: 'html',
        transform: (code: string, storyContext: any) => {
          let result = code;
          
          // Transformar property bindings a attribute binding
          result = result.replace(/\[color\]="'([^']+)'"/g, 'color="$1"');
          result = result.replace(/\[tooltip\]="'([^']+)'"/g, 'tooltip="$1"');
          result = result.replace(/\[tooltipPosition\]="'([^']+)'"/g, 'tooltipPosition="$1"');
          
          // Limpiar espacios extra
          result = result.replace(/\n\s*\n/g, '\n');
          
          return result;
        }
      }
    }
  },
  argTypes: {
    color: {
      control: { type: 'color' },
      description: 'Color hexadecimal del rectángulo de la leyenda'
    },
    tooltip: {
      control: { type: 'text' },
      description: 'Texto que se muestra como tooltip al pasar el mouse'
    },
    tooltipPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición donde aparecerá el tooltip'
    }
  }
} as Meta<SaLegendComponent>;

// Historia básica
export const Primary: StoryObj<SaLegendComponent> = {
  args: {
    color: '#36AD55',
    tooltip: 'Ventas completadas'
  },
  parameters: {
    docs: {
      description: {
        story: 'Leyenda básica con color y tooltip. Pasa el cursor sobre el rectángulo para ver el tooltip.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia con diferentes colores
export const DifferentColors: StoryObj<SaLegendComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Leyendas con Diferentes Colores</h4>
        <p class="mb-4 text-muted">Pasa el cursor sobre cada rectángulo para ver su descripción:</p>
        
        <div class="d-flex gap-3 align-items-center flex-wrap">
          <div class="d-flex align-items-center gap-2">
            <sa-legend color="#36AD55" tooltip="Ventas completadas: 85%"></sa-legend>
            <span class="text-muted">Completadas</span>
          </div>
          
          <div class="d-flex align-items-center gap-2">
            <sa-legend color="#FFC107" tooltip="Ventas pendientes: 10%"></sa-legend>
            <span class="text-muted">Pendientes</span>
          </div>
          
          <div class="d-flex align-items-center gap-2">
            <sa-legend color="#DC3545" tooltip="Ventas canceladas: 5%"></sa-legend>
            <span class="text-muted">Canceladas</span>
          </div>
          
          <div class="d-flex align-items-center gap-2">
            <sa-legend color="#007BFF" tooltip="Ventas en proceso: 12%"></sa-legend>
            <span class="text-muted">En proceso</span>
          </div>
          
          <div class="d-flex align-items-center gap-2">
            <sa-legend color="#6F42C1" tooltip="Ventas programadas: 3%"></sa-legend>
            <span class="text-muted">Programadas</span>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de múltiples leyendas con diferentes colores y tooltips descriptivos, ideal para gráficos y dashboards.'
      },
      source: {
        code: `<!-- Leyendas con diferentes colores -->
<div class="d-flex align-items-center gap-2">
  <sa-legend color="#36AD55" tooltip="Ventas completadas: 85%"></sa-legend>
  <span>Completadas</span>
</div>

<div class="d-flex align-items-center gap-2">
  <sa-legend color="#FFC107" tooltip="Ventas pendientes: 10%"></sa-legend>
  <span>Pendientes</span>
</div>

<div class="d-flex align-items-center gap-2">
  <sa-legend color="#DC3545" tooltip="Ventas canceladas: 5%"></sa-legend>
  <span>Canceladas</span>
</div>`
      }
    }
  }
};

// Historia con diferentes posiciones de tooltip
export const TooltipPositions: StoryObj<SaLegendComponent> = {
  render: () => ({
    template: `
      <div class="p-5">
        <h4 class="mb-3">Posiciones del Tooltip</h4>
        <p class="mb-4 text-muted">Las leyendas pueden mostrar tooltips en diferentes posiciones:</p>
        
        <div class="d-flex flex-column align-items-center gap-4">
          <!-- Tooltip TOP -->
          <div class="text-center">
            <p class="text-muted mb-2">Posición: <strong>TOP</strong></p>
            <sa-legend color="#007BFF" tooltip="Tooltip arriba" tooltipPosition="top"></sa-legend>
          </div>
          
          <!-- Tooltips LEFT y RIGHT -->
          <div class="d-flex justify-content-center align-items-center gap-5">
            <div class="text-center">
              <p class="text-muted mb-2">Posición: <strong>LEFT</strong></p>
              <sa-legend color="#28A745" tooltip="Tooltip izquierda" tooltipPosition="left"></sa-legend>
            </div>
            
            <div class="text-center">
              <p class="text-muted mb-2">Posición: <strong>RIGHT</strong></p>
              <sa-legend color="#FFC107" tooltip="Tooltip derecha" tooltipPosition="right"></sa-legend>
            </div>
          </div>
          
          <!-- Tooltip BOTTOM -->
          <div class="text-center">
            <p class="text-muted mb-2">Posición: <strong>BOTTOM</strong></p>
            <sa-legend color="#DC3545" tooltip="Tooltip abajo" tooltipPosition="bottom"></sa-legend>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demostración de todas las posiciones disponibles para el tooltip de las leyendas.'
      },
      source: {
        code: `<!-- Diferentes posiciones de tooltip -->
<sa-legend color="#007BFF" tooltip="Tooltip arriba" tooltipPosition="top"></sa-legend>
<sa-legend color="#28A745" tooltip="Tooltip izquierda" tooltipPosition="left"></sa-legend>
<sa-legend color="#FFC107" tooltip="Tooltip derecha" tooltipPosition="right"></sa-legend>
<sa-legend color="#DC3545" tooltip="Tooltip abajo" tooltipPosition="bottom"></sa-legend>`
      }
    }
  }
};

// Historia con tooltips largos
export const LongTooltips: StoryObj<SaLegendComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Leyendas con Descripciones Detalladas</h4>
        <p class="mb-4 text-muted">Los tooltips se adaptan automáticamente a texto largo:</p>
        
        <div class="d-flex gap-4 align-items-center flex-wrap">
          <div class="d-flex align-items-center gap-2">
            <sa-legend 
              color="#36AD55" 
              tooltip="Ventas completadas exitosamente durante el mes actual, incluyendo todas las transacciones procesadas y confirmadas por el sistema de pagos."
              tooltipPosition="top">
            </sa-legend>
            <span class="text-muted">Ventas exitosas</span>
          </div>
          
          <div class="d-flex align-items-center gap-2">
            <sa-legend 
              color="#FFC107" 
              tooltip="Ventas que están pendientes de aprobación o confirmación por parte del cliente o del sistema financiero."
              tooltipPosition="bottom">
            </sa-legend>
            <span class="text-muted">Pendientes</span>
          </div>
          
          <div class="d-flex align-items-center gap-2">
            <sa-legend 
              color="#DC3545" 
              tooltip="Canceladas por el cliente"
              tooltipPosition="left">
            </sa-legend>
            <span class="text-muted">Canceladas</span>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Las leyendas pueden incluir descripciones detalladas que se muestran en tooltips multilínea cuando es necesario.'
      },
      source: {
        code: `<!-- Leyenda con tooltip largo -->
<sa-legend 
  color="#36AD55" 
  tooltip="Ventas completadas exitosamente durante el mes actual, incluyendo todas las transacciones procesadas y confirmadas por el sistema de pagos."
  tooltipPosition="top">
</sa-legend>

<!-- Leyenda con tooltip corto -->
<sa-legend 
  color="#DC3545" 
  tooltip="Canceladas por el cliente"
  tooltipPosition="left">
</sa-legend>`
      }
    }
  }
};

// Historia de ejemplo de uso real
export const RealWorldExample: StoryObj<SaLegendComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Ejemplo: Dashboard de Ventas</h4>
        <p class="mb-3 text-muted">Ejemplo de uso en un dashboard real:</p>
        
        <div class="card p-3 mb-4">
          <h6 class="card-title">Estado de Ventas - Marzo 2024</h6>
          <div class="d-flex gap-4 align-items-center flex-wrap mt-3">
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#28A745" tooltip="1,234 ventas completadas - $543,210 en ingresos"></sa-legend>
              <span>Completadas (78%)</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#FFC107" tooltip="156 ventas pendientes de confirmación - $67,890 esperados"></sa-legend>
              <span>Pendientes (12%)</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#17A2B8" tooltip="89 ventas en proceso de revisión - $34,560 en validación"></sa-legend>
              <span>En revisión (7%)</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#DC3545" tooltip="45 ventas canceladas por el cliente - $23,100 perdidos"></sa-legend>
              <span>Canceladas (3%)</span>
            </div>
          </div>
        </div>
        
        <div class="card p-3">
          <h6 class="card-title">Categorías de Productos</h6>
          <div class="d-flex gap-3 align-items-center flex-wrap mt-3">
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#6F42C1" tooltip="Productos electrónicos: laptops, smartphones, tablets"></sa-legend>
              <span>Electrónicos</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#E83E8C" tooltip="Ropa y accesorios de moda para todas las edades"></sa-legend>
              <span>Ropa</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#20C997" tooltip="Productos para el hogar y decoración"></sa-legend>
              <span>Hogar</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <sa-legend color="#FD7E14" tooltip="Libros, material educativo y entretenimiento"></sa-legend>
              <span>Educación</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo práctico de cómo usar las leyendas en un dashboard real con múltiples secciones y datos detallados.'
      },
      source: {
        code: `<!-- Dashboard con leyendas -->
<div class="card p-3">
  <h6>Estado de Ventas - Marzo 2024</h6>
  <div class="d-flex gap-4 align-items-center flex-wrap">
    <div class="d-flex align-items-center gap-2">
      <sa-legend color="#28A745" tooltip="1,234 ventas completadas - $543,210 en ingresos"></sa-legend>
      <span>Completadas (78%)</span>
    </div>
    
    <div class="d-flex align-items-center gap-2">
      <sa-legend color="#FFC107" tooltip="156 ventas pendientes - $67,890 esperados"></sa-legend>
      <span>Pendientes (12%)</span>
    </div>
    
    <div class="d-flex align-items-center gap-2">
      <sa-legend color="#DC3545" tooltip="45 ventas canceladas - $23,100 perdidos"></sa-legend>
      <span>Canceladas (3%)</span>
    </div>
  </div>
</div>`
      }
    }
  }
};
