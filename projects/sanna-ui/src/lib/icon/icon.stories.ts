import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
  title: 'Componentes/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SannaUiModule, FontAwesomeModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
        `
      },
      source: {
        type: 'code'
      }
    }
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Nombre del icono (ej: "heart", "fas fa-heart")'
    },
    color: {
      control: { type: 'color' },
      description: 'Color hexadecimal del icono'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del icono'
    }
  }
} as Meta<IconComponent>;

// Historia básica
export const Basic: StoryObj<IconComponent> = {
  args: {
    name: 'pencil',
    color: '#5BAB5F',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icono básico con todas las propiedades personalizables. Modifica los controles para ver cómo cambia dinámicamente.'
      },
      source: {
        type: 'dynamic'
      }
    }
  }
};

// Historia con diferentes tamaños
export const Sizes: StoryObj<IconComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Diferentes Tamaños</h4>
        <p class="text-muted mb-3">Compara los tres tamaños disponibles:</p>
        
        <div class="d-flex gap-4 align-items-center">
          <div class="text-center">
            <lib-icon name="pencil" color="#5BAB5F" size="sm"></lib-icon>
            <small class="d-block mt-1 text-muted">Small (14px)</small>
          </div>
          <div class="text-center">
            <lib-icon name="pencil" color="#5BAB5F" size="md"></lib-icon>
            <small class="d-block mt-1 text-muted">Medium (16px)</small>
          </div>
          <div class="text-center">
            <lib-icon name="pencil" color="#5BAB5F" size="lg"></lib-icon>
            <small class="d-block mt-1 text-muted">Large (20px)</small>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-icon name="heart" color="#ff0000" size="sm"></lib-icon>
<lib-icon name="heart" color="#ff0000" size="md"></lib-icon>
<lib-icon name="heart" color="#ff0000" size="lg"></lib-icon>`
      }
    }
  }
};

// Historia con diferentes colores
export const Colors: StoryObj<IconComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Diferentes Colores</h4>
        <p class="text-muted mb-3">Ejemplos con colores hexadecimales:</p>
        
        <div class="d-flex gap-3 flex-wrap align-items-center">
          <lib-icon name="heart" color="#ff0000" size="md"></lib-icon>
          <lib-icon name="star" color="#ffd700" size="md"></lib-icon>
          <lib-icon name="check" color="#28a745" size="md"></lib-icon>
          <lib-icon name="info" color="#17a2b8" size="md"></lib-icon>
          <lib-icon name="exclamation-triangle" color="#ffc107" size="md"></lib-icon>
          <lib-icon name="times" color="#dc3545" size="md"></lib-icon>
          <lib-icon name="user" color="#6c757d" size="md"></lib-icon>
          <lib-icon name="home" color="#007bff" size="md"></lib-icon>
          <lib-icon name="pencil" color="#17a2b8" size="md"></lib-icon>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<lib-icon name="heart" color="#ff0000" size="md"></lib-icon>
<lib-icon name="star" color="#ffd700" size="md"></lib-icon>
<lib-icon name="check" color="#28a745" size="md"></lib-icon>
<lib-icon name="info" color="#17a2b8" size="md"></lib-icon>
<lib-icon name="exclamation-triangle" color="#ffc107" size="md"></lib-icon>
<lib-icon name="times" color="#dc3545" size="md"></lib-icon>
<lib-icon name="user" color="#6c757d" size="md"></lib-icon>
<lib-icon name="home" color="#007bff" size="md"></lib-icon>`
      }
    }
  }
};

// Historia con tabla de todos los iconos disponibles
export const IconGallery: StoryObj<IconComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-4">Galería Completa de Iconos Disponibles</h4>
        <p class="text-muted mb-4">Más de 150 iconos organizados por categorías. Todos los iconos se muestran en color negro para mejor visualización.</p>
        
        <!-- Iconos Básicos -->
        <div class="mb-5">
          <h5 class="mb-3 text-primary">Iconos Básicos</h5>
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-plus</code>
                  <lib-icon name="user-plus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-minus</code>
                  <lib-icon name="user-minus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>video</code>
                  <lib-icon name="video" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>exclamation-circle</code>
                  <lib-icon name="exclamation-circle" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>wifi</code>
                  <lib-icon name="wifi" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>spinner</code>
                  <lib-icon name="spinner" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>download</code>
                  <lib-icon name="download" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>trash</code>
                  <lib-icon name="trash" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>share</code>
                  <lib-icon name="share" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>print</code>
                  <lib-icon name="print" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>heart</code>
                  <lib-icon name="heart" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>home</code>
                  <lib-icon name="home" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user</code>
                  <lib-icon name="user" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cog</code>
                  <lib-icon name="cog" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>search</code>
                  <lib-icon name="search" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>star</code>
                  <lib-icon name="star" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>edit</code>
                  <lib-icon name="edit" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>save</code>
                  <lib-icon name="save" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>plus</code>
                  <lib-icon name="plus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>minus</code>
                  <lib-icon name="minus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>check</code>
                  <lib-icon name="check" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>times</code>
                  <lib-icon name="times" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>eye</code>
                  <lib-icon name="eye" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>eye-slash</code>
                  <lib-icon name="eye-slash" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>lock</code>
                  <lib-icon name="lock" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>unlock</code>
                  <lib-icon name="unlock" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bell</code>
                  <lib-icon name="bell" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>envelope</code>
                  <lib-icon name="envelope" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>phone</code>
                  <lib-icon name="phone" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>map-marker-alt</code>
                  <lib-icon name="map-marker-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calendar</code>
                  <lib-icon name="calendar" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>clock</code>
                  <lib-icon name="clock" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>info</code>
                  <lib-icon name="info" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>exclamation-triangle</code>
                  <lib-icon name="exclamation-triangle" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>question</code>
                  <lib-icon name="question" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>pencil</code>
                  <lib-icon name="pencil" color="#000000" size="md"></lib-icon>
                </li>
              </ul>
            </div>
            
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-down</code>
                  <lib-icon name="chevron-down" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-up</code>
                  <lib-icon name="chevron-up" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-left</code>
                  <lib-icon name="chevron-left" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-right</code>
                  <lib-icon name="chevron-right" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-left</code>
                  <lib-icon name="arrow-left" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-right</code>
                  <lib-icon name="arrow-right" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-up</code>
                  <lib-icon name="arrow-up" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-down</code>
                  <lib-icon name="arrow-down" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>table</code>
                  <lib-icon name="table" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>th-large</code>
                  <lib-icon name="th-large" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>users</code>
                  <lib-icon name="users" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>link</code>
                  <lib-icon name="link" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>copy</code>
                  <lib-icon name="copy" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>universal-access</code>
                  <lib-icon name="universal-access" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>running</code>
                  <lib-icon name="running" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>image</code>
                  <lib-icon name="image" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calendar-alt</code>
                  <lib-icon name="calendar-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chart-bar</code>
                  <lib-icon name="chart-bar" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chart-line</code>
                  <lib-icon name="chart-line" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>apple-alt</code>
                  <lib-icon name="apple-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>robot</code>
                  <lib-icon name="robot" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>gift</code>
                  <lib-icon name="gift" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>shopping-bag</code>
                  <lib-icon name="shopping-bag" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>balance-scale</code>
                  <lib-icon name="balance-scale" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-three-quarters</code>
                  <lib-icon name="battery-three-quarters" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-half</code>
                  <lib-icon name="battery-half" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-quarter</code>
                  <lib-icon name="battery-quarter" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-empty</code>
                  <lib-icon name="battery-empty" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bell-slash</code>
                  <lib-icon name="bell-slash" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bicycle</code>
                  <lib-icon name="bicycle" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bookmark</code>
                  <lib-icon name="bookmark" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bowl-food</code>
                  <lib-icon name="bowl-food" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>box</code>
                  <lib-icon name="box" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bus</code>
                  <lib-icon name="bus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>birthday-cake</code>
                  <lib-icon name="birthday-cake" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calculator</code>
                  <lib-icon name="calculator" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calendar-day</code>
                  <lib-icon name="calendar-day" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>camera</code>
                  <lib-icon name="camera" color="#000000" size="md"></lib-icon>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Iconos de Navegación -->
        <div class="mb-5">
          <h5 class="mb-3 text-success">Iconos de Navegación</h5>
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-down</code>
                  <lib-icon name="caret-down" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-left</code>
                  <lib-icon name="caret-left" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-right</code>
                  <lib-icon name="caret-right" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-up</code>
                  <lib-icon name="caret-up" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file</code>
                  <lib-icon name="file" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chart-pie</code>
                  <lib-icon name="chart-pie" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>comments</code>
                  <lib-icon name="comments" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>flask</code>
                  <lib-icon name="flask" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>microscope</code>
                  <lib-icon name="microscope" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cookie-bite</code>
                  <lib-icon name="cookie-bite" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>spray-can</code>
                  <lib-icon name="spray-can" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>soap</code>
                  <lib-icon name="soap" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>expand</code>
                  <lib-icon name="expand" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cloud</code>
                  <lib-icon name="cloud" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>coffee</code>
                  <lib-icon name="coffee" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>comment</code>
                  <lib-icon name="comment" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>credit-card</code>
                  <lib-icon name="credit-card" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>crop</code>
                  <lib-icon name="crop" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>crop-alt</code>
                  <lib-icon name="crop-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>truck</code>
                  <lib-icon name="truck" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file-upload</code>
                  <lib-icon name="file-upload" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ellipsis-h</code>
                  <lib-icon name="ellipsis-h" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>plane</code>
                  <lib-icon name="plane" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>graduation-cap</code>
                  <lib-icon name="graduation-cap" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>equals</code>
                  <lib-icon name="equals" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>eraser</code>
                  <lib-icon name="eraser" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file-excel</code>
                  <lib-icon name="file-excel" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file-download</code>
                  <lib-icon name="file-download" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sign-out-alt</code>
                  <lib-icon name="sign-out-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>smile</code>
                  <lib-icon name="smile" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>frown</code>
                  <lib-icon name="frown" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mask</code>
                  <lib-icon name="mask" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>medal</code>
                  <lib-icon name="medal" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>box-open</code>
                  <lib-icon name="box-open" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>seedling</code>
                  <lib-icon name="seedling" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>filter</code>
                  <lib-icon name="filter" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>fingerprint</code>
                  <lib-icon name="fingerprint" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>fire</code>
                  <lib-icon name="fire" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>trophy</code>
                  <lib-icon name="trophy" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>fish</code>
                  <lib-icon name="fish" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>flag</code>
                  <lib-icon name="flag" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>forward</code>
                  <lib-icon name="forward" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>volume-up</code>
                  <lib-icon name="volume-up" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>expand-arrows-alt</code>
                  <lib-icon name="expand-arrows-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>globe</code>
                  <lib-icon name="globe" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>volume-mute</code>
                  <lib-icon name="volume-mute" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bars</code>
                  <lib-icon name="bars" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>briefcase</code>
                  <lib-icon name="briefcase" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>microchip</code>
                  <lib-icon name="microchip" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>heartbeat</code>
                  <lib-icon name="heartbeat" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>history</code>
                  <lib-icon name="history" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>microphone</code>
                  <lib-icon name="microphone" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ice-cream</code>
                  <lib-icon name="ice-cream" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>lightbulb</code>
                  <lib-icon name="lightbulb" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>key</code>
                  <lib-icon name="key" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>laptop</code>
                  <lib-icon name="laptop" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>layer-group</code>
                  <lib-icon name="layer-group" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>list-ul</code>
                  <lib-icon name="list-ul" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>volume-down</code>
                  <lib-icon name="volume-down" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>map-pin</code>
                  <lib-icon name="map-pin" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>pills</code>
                  <lib-icon name="pills" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mobile</code>
                  <lib-icon name="mobile" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mobile-alt</code>
                  <lib-icon name="mobile-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>money-bill</code>
                  <lib-icon name="money-bill" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>motorcycle</code>
                  <lib-icon name="motorcycle" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sticky-note</code>
                  <lib-icon name="sticky-note" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ellipsis-v</code>
                  <lib-icon name="ellipsis-v" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>lungs</code>
                  <lib-icon name="lungs" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cash-register</code>
                  <lib-icon name="cash-register" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>paper-plane</code>
                  <lib-icon name="paper-plane" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>paperclip</code>
                  <lib-icon name="paperclip" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>desktop</code>
                  <lib-icon name="desktop" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>pause</code>
                  <lib-icon name="pause" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>percent</code>
                  <lib-icon name="percent" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>piggy-bank</code>
                  <lib-icon name="piggy-bank" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>play</code>
                  <lib-icon name="play" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mouse-pointer</code>
                  <lib-icon name="mouse-pointer" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>swimming-pool</code>
                  <lib-icon name="swimming-pool" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ban</code>
                  <lib-icon name="ban" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tag</code>
                  <lib-icon name="tag" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>shield</code>
                  <lib-icon name="shield" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>qrcode</code>
                  <lib-icon name="qrcode" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>receipt</code>
                  <lib-icon name="receipt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>redo</code>
                  <lib-icon name="redo" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ruler</code>
                  <lib-icon name="ruler" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>utensils</code>
                  <lib-icon name="utensils" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tshirt</code>
                  <lib-icon name="tshirt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>shopping-cart</code>
                  <lib-icon name="shopping-cart" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sliders-h</code>
                  <lib-icon name="sliders-h" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>glass-whiskey</code>
                  <lib-icon name="glass-whiskey" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sort</code>
                  <lib-icon name="sort" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tachometer-alt</code>
                  <lib-icon name="tachometer-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>spoon</code>
                  <lib-icon name="spoon" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>star-half</code>
                  <lib-icon name="star-half" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>stop</code>
                  <lib-icon name="stop" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>store</code>
                  <lib-icon name="store" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tablet</code>
                  <lib-icon name="tablet" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tablet-alt</code>
                  <lib-icon name="tablet-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>thermometer-half</code>
                  <lib-icon name="thermometer-half" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>thumbs-down</code>
                  <lib-icon name="thumbs-down" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>thumbs-up</code>
                  <lib-icon name="thumbs-up" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bolt</code>
                  <lib-icon name="bolt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ticket-alt</code>
                  <lib-icon name="ticket-alt" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sitemap</code>
                  <lib-icon name="sitemap" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bath</code>
                  <lib-icon name="bath" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>undo</code>
                  <lib-icon name="undo" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>upload</code>
                  <lib-icon name="upload" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-plus</code>
                  <lib-icon name="user-plus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-minus</code>
                  <lib-icon name="user-minus" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>video</code>
                  <lib-icon name="video" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>exclamation-circle</code>
                  <lib-icon name="exclamation-circle" color="#000000" size="md"></lib-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>wifi</code>
                  <lib-icon name="wifi" color="#000000" size="md"></lib-icon>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: ''
      },
      source: {
        code: `<!-- Ejemplo de uso -->
<lib-icon name="heart" color="#000000" size="md"></lib-icon>
<lib-icon name="star" color="#000000" size="md"></lib-icon>
<lib-icon name="edit" color="#000000" size="md"></lib-icon>
<lib-icon name="pencil" color="#000000" size="md"></lib-icon>`
      }
    }
  }
}; 