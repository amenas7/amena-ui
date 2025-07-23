import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SaIconComponent } from './sa-icon.component';
import { CommonModule } from '@angular/common';
import { SannaUiModule } from '../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
  title: 'Componentes/Icon',
  component: SaIconComponent,
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
} as Meta<SaIconComponent>;

// Historia básica
export const Basic: StoryObj<SaIconComponent> = {
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
export const Sizes: StoryObj<SaIconComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Diferentes Tamaños</h4>
        <p class="text-muted mb-3">Compara los tres tamaños disponibles:</p>
        
        <div class="d-flex gap-4 align-items-center">
          <div class="text-center">
            <sa-icon name="pencil" color="#5BAB5F" size="sm"></sa-icon>
            <small class="d-block mt-1 text-muted">Small (14px)</small>
          </div>
          <div class="text-center">
            <sa-icon name="pencil" color="#5BAB5F" size="md"></sa-icon>
            <small class="d-block mt-1 text-muted">Medium (16px)</small>
          </div>
          <div class="text-center">
            <sa-icon name="pencil" color="#5BAB5F" size="lg"></sa-icon>
            <small class="d-block mt-1 text-muted">Large (20px)</small>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-icon name="heart" color="#ff0000" size="sm"></sa-icon>
<sa-icon name="heart" color="#ff0000" size="md"></sa-icon>
<sa-icon name="heart" color="#ff0000" size="lg"></sa-icon>`
      }
    }
  }
};

// Historia con diferentes colores
export const Colors: StoryObj<SaIconComponent> = {
  render: () => ({
    template: `
      <div class="p-4">
        <h4 class="mb-3">Diferentes Colores</h4>
        <p class="text-muted mb-3">Ejemplos con colores hexadecimales:</p>
        
        <div class="d-flex gap-3 flex-wrap align-items-center">
          <sa-icon name="heart" color="#ff0000" size="md"></sa-icon>
          <sa-icon name="star" color="#ffd700" size="md"></sa-icon>
          <sa-icon name="check" color="#28a745" size="md"></sa-icon>
          <sa-icon name="info" color="#17a2b8" size="md"></sa-icon>
          <sa-icon name="exclamation-triangle" color="#ffc107" size="md"></sa-icon>
          <sa-icon name="times" color="#dc3545" size="md"></sa-icon>
          <sa-icon name="user" color="#6c757d" size="md"></sa-icon>
          <sa-icon name="home" color="#007bff" size="md"></sa-icon>
          <sa-icon name="pencil" color="#17a2b8" size="md"></sa-icon>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<sa-icon name="heart" color="#ff0000" size="md"></sa-icon>
<sa-icon name="star" color="#ffd700" size="md"></sa-icon>
<sa-icon name="check" color="#28a745" size="md"></sa-icon>
<sa-icon name="info" color="#17a2b8" size="md"></sa-icon>
<sa-icon name="exclamation-triangle" color="#ffc107" size="md"></sa-icon>
<sa-icon name="times" color="#dc3545" size="md"></sa-icon>
<sa-icon name="user" color="#6c757d" size="md"></sa-icon>
<sa-icon name="home" color="#007bff" size="md"></sa-icon>`
      }
    }
  }
};

// Historia con tabla de todos los iconos disponibles
export const IconGallery: StoryObj<SaIconComponent> = {
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
                  <sa-icon name="user-plus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-minus</code>
                  <sa-icon name="user-minus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>video</code>
                  <sa-icon name="video" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>exclamation-circle</code>
                  <sa-icon name="exclamation-circle" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>wifi</code>
                  <sa-icon name="wifi" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>spinner</code>
                  <sa-icon name="spinner" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>download</code>
                  <sa-icon name="download" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>trash</code>
                  <sa-icon name="trash" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>share</code>
                  <sa-icon name="share" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>print</code>
                  <sa-icon name="print" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>heart</code>
                  <sa-icon name="heart" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>home</code>
                  <sa-icon name="home" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user</code>
                  <sa-icon name="user" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cog</code>
                  <sa-icon name="cog" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>search</code>
                  <sa-icon name="search" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>star</code>
                  <sa-icon name="star" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>edit</code>
                  <sa-icon name="edit" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>save</code>
                  <sa-icon name="save" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>plus</code>
                  <sa-icon name="plus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>minus</code>
                  <sa-icon name="minus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>check</code>
                  <sa-icon name="check" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>times</code>
                  <sa-icon name="times" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>eye</code>
                  <sa-icon name="eye" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>eye-slash</code>
                  <sa-icon name="eye-slash" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>lock</code>
                  <sa-icon name="lock" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>unlock</code>
                  <sa-icon name="unlock" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bell</code>
                  <sa-icon name="bell" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>envelope</code>
                  <sa-icon name="envelope" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>phone</code>
                  <sa-icon name="phone" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>map-marker-alt</code>
                  <sa-icon name="map-marker-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calendar</code>
                  <sa-icon name="calendar" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>clock</code>
                  <sa-icon name="clock" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>info</code>
                  <sa-icon name="info" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>exclamation-triangle</code>
                  <sa-icon name="exclamation-triangle" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>question</code>
                  <sa-icon name="question" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>pencil</code>
                  <sa-icon name="pencil" color="#000000" size="md"></sa-icon>
                </li>
              </ul>
            </div>
            
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-down</code>
                  <sa-icon name="chevron-down" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-up</code>
                  <sa-icon name="chevron-up" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-left</code>
                  <sa-icon name="chevron-left" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chevron-right</code>
                  <sa-icon name="chevron-right" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-left</code>
                  <sa-icon name="arrow-left" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-right</code>
                  <sa-icon name="arrow-right" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-up</code>
                  <sa-icon name="arrow-up" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>arrow-down</code>
                  <sa-icon name="arrow-down" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>table</code>
                  <sa-icon name="table" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>th-large</code>
                  <sa-icon name="th-large" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>users</code>
                  <sa-icon name="users" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>link</code>
                  <sa-icon name="link" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>copy</code>
                  <sa-icon name="copy" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>universal-access</code>
                  <sa-icon name="universal-access" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>running</code>
                  <sa-icon name="running" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>image</code>
                  <sa-icon name="image" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calendar-alt</code>
                  <sa-icon name="calendar-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chart-bar</code>
                  <sa-icon name="chart-bar" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chart-line</code>
                  <sa-icon name="chart-line" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>apple-alt</code>
                  <sa-icon name="apple-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>robot</code>
                  <sa-icon name="robot" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>gift</code>
                  <sa-icon name="gift" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>shopping-bag</code>
                  <sa-icon name="shopping-bag" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>balance-scale</code>
                  <sa-icon name="balance-scale" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-three-quarters</code>
                  <sa-icon name="battery-three-quarters" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-half</code>
                  <sa-icon name="battery-half" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-quarter</code>
                  <sa-icon name="battery-quarter" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>battery-empty</code>
                  <sa-icon name="battery-empty" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bell-slash</code>
                  <sa-icon name="bell-slash" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bicycle</code>
                  <sa-icon name="bicycle" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bookmark</code>
                  <sa-icon name="bookmark" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bowl-food</code>
                  <sa-icon name="bowl-food" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>box</code>
                  <sa-icon name="box" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bus</code>
                  <sa-icon name="bus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>birthday-cake</code>
                  <sa-icon name="birthday-cake" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calculator</code>
                  <sa-icon name="calculator" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>calendar-day</code>
                  <sa-icon name="calendar-day" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>camera</code>
                  <sa-icon name="camera" color="#000000" size="md"></sa-icon>
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
                  <sa-icon name="caret-down" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-left</code>
                  <sa-icon name="caret-left" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-right</code>
                  <sa-icon name="caret-right" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>caret-up</code>
                  <sa-icon name="caret-up" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file</code>
                  <sa-icon name="file" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>chart-pie</code>
                  <sa-icon name="chart-pie" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>comments</code>
                  <sa-icon name="comments" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>flask</code>
                  <sa-icon name="flask" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>microscope</code>
                  <sa-icon name="microscope" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cookie-bite</code>
                  <sa-icon name="cookie-bite" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>spray-can</code>
                  <sa-icon name="spray-can" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>soap</code>
                  <sa-icon name="soap" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>expand</code>
                  <sa-icon name="expand" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cloud</code>
                  <sa-icon name="cloud" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>coffee</code>
                  <sa-icon name="coffee" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>comment</code>
                  <sa-icon name="comment" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>credit-card</code>
                  <sa-icon name="credit-card" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>crop</code>
                  <sa-icon name="crop" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>crop-alt</code>
                  <sa-icon name="crop-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>truck</code>
                  <sa-icon name="truck" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file-upload</code>
                  <sa-icon name="file-upload" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ellipsis-h</code>
                  <sa-icon name="ellipsis-h" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>plane</code>
                  <sa-icon name="plane" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>graduation-cap</code>
                  <sa-icon name="graduation-cap" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>equals</code>
                  <sa-icon name="equals" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>eraser</code>
                  <sa-icon name="eraser" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file-excel</code>
                  <sa-icon name="file-excel" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>file-download</code>
                  <sa-icon name="file-download" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sign-out-alt</code>
                  <sa-icon name="sign-out-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>smile</code>
                  <sa-icon name="smile" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>frown</code>
                  <sa-icon name="frown" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mask</code>
                  <sa-icon name="mask" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>medal</code>
                  <sa-icon name="medal" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>box-open</code>
                  <sa-icon name="box-open" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>seedling</code>
                  <sa-icon name="seedling" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>filter</code>
                  <sa-icon name="filter" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>fingerprint</code>
                  <sa-icon name="fingerprint" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>fire</code>
                  <sa-icon name="fire" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>trophy</code>
                  <sa-icon name="trophy" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>fish</code>
                  <sa-icon name="fish" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>flag</code>
                  <sa-icon name="flag" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>forward</code>
                  <sa-icon name="forward" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>volume-up</code>
                  <sa-icon name="volume-up" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>expand-arrows-alt</code>
                  <sa-icon name="expand-arrows-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>globe</code>
                  <sa-icon name="globe" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>volume-mute</code>
                  <sa-icon name="volume-mute" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bars</code>
                  <sa-icon name="bars" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>briefcase</code>
                  <sa-icon name="briefcase" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>microchip</code>
                  <sa-icon name="microchip" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>heartbeat</code>
                  <sa-icon name="heartbeat" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>history</code>
                  <sa-icon name="history" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>microphone</code>
                  <sa-icon name="microphone" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ice-cream</code>
                  <sa-icon name="ice-cream" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>lightbulb</code>
                  <sa-icon name="lightbulb" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>key</code>
                  <sa-icon name="key" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>laptop</code>
                  <sa-icon name="laptop" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>layer-group</code>
                  <sa-icon name="layer-group" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>list-ul</code>
                  <sa-icon name="list-ul" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>volume-down</code>
                  <sa-icon name="volume-down" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>map-pin</code>
                  <sa-icon name="map-pin" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>pills</code>
                  <sa-icon name="pills" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mobile</code>
                  <sa-icon name="mobile" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mobile-alt</code>
                  <sa-icon name="mobile-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>money-bill</code>
                  <sa-icon name="money-bill" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>motorcycle</code>
                  <sa-icon name="motorcycle" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sticky-note</code>
                  <sa-icon name="sticky-note" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ellipsis-v</code>
                  <sa-icon name="ellipsis-v" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>lungs</code>
                  <sa-icon name="lungs" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>cash-register</code>
                  <sa-icon name="cash-register" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>paper-plane</code>
                  <sa-icon name="paper-plane" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>paperclip</code>
                  <sa-icon name="paperclip" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>desktop</code>
                  <sa-icon name="desktop" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>pause</code>
                  <sa-icon name="pause" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>percent</code>
                  <sa-icon name="percent" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>piggy-bank</code>
                  <sa-icon name="piggy-bank" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>play</code>
                  <sa-icon name="play" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>mouse-pointer</code>
                  <sa-icon name="mouse-pointer" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>swimming-pool</code>
                  <sa-icon name="swimming-pool" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ban</code>
                  <sa-icon name="ban" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tag</code>
                  <sa-icon name="tag" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>shield</code>
                  <sa-icon name="shield" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>qrcode</code>
                  <sa-icon name="qrcode" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>receipt</code>
                  <sa-icon name="receipt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>redo</code>
                  <sa-icon name="redo" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ruler</code>
                  <sa-icon name="ruler" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>utensils</code>
                  <sa-icon name="utensils" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tshirt</code>
                  <sa-icon name="tshirt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>shopping-cart</code>
                  <sa-icon name="shopping-cart" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sliders-h</code>
                  <sa-icon name="sliders-h" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>glass-whiskey</code>
                  <sa-icon name="glass-whiskey" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sort</code>
                  <sa-icon name="sort" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tachometer-alt</code>
                  <sa-icon name="tachometer-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>spoon</code>
                  <sa-icon name="spoon" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>star-half</code>
                  <sa-icon name="star-half" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>stop</code>
                  <sa-icon name="stop" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>store</code>
                  <sa-icon name="store" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tablet</code>
                  <sa-icon name="tablet" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>tablet-alt</code>
                  <sa-icon name="tablet-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>thermometer-half</code>
                  <sa-icon name="thermometer-half" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>thumbs-down</code>
                  <sa-icon name="thumbs-down" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>thumbs-up</code>
                  <sa-icon name="thumbs-up" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bolt</code>
                  <sa-icon name="bolt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>ticket-alt</code>
                  <sa-icon name="ticket-alt" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>sitemap</code>
                  <sa-icon name="sitemap" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>bath</code>
                  <sa-icon name="bath" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>undo</code>
                  <sa-icon name="undo" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>upload</code>
                  <sa-icon name="upload" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-plus</code>
                  <sa-icon name="user-plus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>user-minus</code>
                  <sa-icon name="user-minus" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>video</code>
                  <sa-icon name="video" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>exclamation-circle</code>
                  <sa-icon name="exclamation-circle" color="#000000" size="md"></sa-icon>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <code>wifi</code>
                  <sa-icon name="wifi" color="#000000" size="md"></sa-icon>
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
<sa-icon name="heart" color="#000000" size="md"></sa-icon>
<sa-icon name="star" color="#000000" size="md"></sa-icon>
<sa-icon name="edit" color="#000000" size="md"></sa-icon>
<sa-icon name="pencil" color="#000000" size="md"></sa-icon>`
      }
    }
  }
}; 