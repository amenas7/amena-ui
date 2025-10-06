import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

// Importar configuración de FontAwesome para Storybook
import '../src/lib/fontawesome.config';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: 'code'
      }
    },
    backgrounds: {
      disable: true
    },
    outline: {
      disable: true
    },
    measure: {
      disable: true
    },
    options: {
      storySort: {
        order: ['Introducción', 'Componentes', '*']
      }
    }
  },
};

export default preview;