import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../app/components/login/login.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';

export default {
    title: 'Login component',
    component: LoginComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
    component: LoginComponent,
    template: `<app-login></app-login>`,
    styles: ['../app/components/login/login.component.scss'],
    moduleMetadata: {
        imports: [RouterTestingModule.withRoutes([]), FormsModule, ReactiveFormsModule],
        declarations: [LoginComponent],
        providers: [provideMockStore({})],
    },
    props: args,
});

export const Login = Template.bind({});
