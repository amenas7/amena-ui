import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SaInputComponent } from './sa-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SannaUiModule } from '../../sanna-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
  title: 'Componentes/Forms/Input',
  component: SaInputComponent,
} as Meta<SaInputComponent>;

type Story = StoryObj<SaInputComponent>;

export const NgModelExample: Story = {
  render: () => ({
    props: {
      miVariable: ''
    },
    template: `
      <div style="padding: 20px; max-width: 400px;">
        <h3>Ejemplo con ngModel</h3>
        <sa-input [(ngModel)]="miVariable" label="ngModel" placeholder="Puedes escribir aquí!"></sa-input>
        <p>Valor actual: <b>{{ miVariable }}</b></p>
      </div>
    `
  }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SannaUiModule, FontAwesomeModule]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'Puedes escribir en el input y ver el valor actualizado en tiempo real usando ngModel.'
      }
    }
  }
};

export const ReactiveFormExample: Story = {
  render: () => {
    const fb = new FormBuilder();
    const form: FormGroup = fb.group({ campo: [''] });
    return {
      props: { form },
      template: `
        <div style="padding: 20px; max-width: 400px;">
          <h3>Ejemplo con Formulario Reactivo</h3>
          <form [formGroup]="form">
            <sa-input formControlName="campo" label="Reactivo" placeholder="Puedes escribir aquí!"></sa-input>
          </form>
          <p>Valor actual: <b>{{ form.get('campo')?.value }}</b></p>
        </div>
      `
    };
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SannaUiModule, FontAwesomeModule],
      providers: [FormBuilder]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'Puedes escribir en el input y ver el valor actualizado en tiempo real usando formularios reactivos.'
      }
    }
  }
};