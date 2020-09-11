import { LandingComponent } from '../app/components/landing/landing.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story } from '@storybook/angular/types-6-0';

const mockOffers = [
    {
        id: 1,
        title: 'Grab It!',
        category: 'App Offer'
    },
    {
        id: 2,
        title: 'Buy 1 Get 1',
        category: 'App Offer'
    },
    {
        id: 3,
        title: 'Free Shipping',
        category: 'New User'
    }
];

export default {
    title: 'Landing Component',
    component: LandingComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<LandingComponent> = (args: LandingComponent) => ({
    component: LandingComponent,
    moduleMetadata: {
        imports: [RouterTestingModule.withRoutes([]), FormsModule, ReactiveFormsModule],
        declarations: [LandingComponent],
        providers: [provideMockStore({})],
    },
    props: { args, offers: mockOffers },
});

export const Landing = Template.bind({});
