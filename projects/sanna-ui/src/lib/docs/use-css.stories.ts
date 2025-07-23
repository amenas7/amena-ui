import type { Meta } from '@storybook/angular';

export default {
  title: 'Layout/Docs',
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  }
} as Meta;

export const Docs = () => ({
  template: `
    <div>
      <h1>useCSS</h1>
      <p>Esta página documenta el uso de CSS en nuestro proyecto.</p>
      
      <h2>Estilos del proyecto</h2>
      
      <h3>Variables CSS</h3>
      <pre><code>
// Variables globales
:root {{ '{' }}
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
{{ '}' }}
      </code></pre>
      
      <h3>Clases utilitarias</h3>
      <pre><code>
// Clases de utilidad
.text-center {{ '{' }} text-align: center; {{ '}' }}
.mt-1 {{ '{' }} margin-top: 0.25rem; {{ '}' }}
.mb-2 {{ '{' }} margin-bottom: 0.5rem; {{ '}' }}
      </code></pre>
      
      <h2>Mejores prácticas</h2>
      <ol>
        <li><strong>Usar variables CSS</strong> para colores y espaciados</li>
        <li><strong>Mantener consistencia</strong> en el nombramiento</li>
        <li><strong>Evitar estilos inline</strong> cuando sea posible</li>
        <li><strong>Usar BEM</strong> para nombrar clases</li>
      </ol>
    </div>
  `
}); 