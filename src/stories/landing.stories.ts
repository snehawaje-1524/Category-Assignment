import { LandingComponent } from '../app/components/landing/landing.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Landing component',
    component: LandingComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<LandingComponent> = (args: LandingComponent) => ({
    component: LandingComponent,
    template: `<app-landing></app-landing>`,
    styles: ['../app/components/Landing/Landing.component.scss'],
    moduleMetadata: {
        imports: [RouterTestingModule.withRoutes([]), FormsModule, ReactiveFormsModule],
        declarations: [LandingComponent],
        providers: [provideMockStore({})],
    },
    props: args,
});

export const Landing = Template.bind({});
