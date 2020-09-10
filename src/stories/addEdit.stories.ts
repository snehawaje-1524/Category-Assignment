import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditOfferComponent } from '../app/components/add-edit-offer/add-edit-offer.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { OfferService } from '../app/services/offer.service';
import { HttpClientModule } from '@angular/common/http';
import * as offer from '../app/offer-store/reducers/offer.reducers';
import { StoreModule } from '@ngrx/store';

export default {
    title: 'Add Edit component',
    component: AddEditOfferComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<AddEditOfferComponent> = (args: AddEditOfferComponent) => ({
    component: AddEditOfferComponent,
    template: `<app-add-edit-offer></app-add-edit-offer>`,
    styles: ['../app/components/add-edit/add-edit-offer.component.scss'],
    moduleMetadata: {
        imports: [StoreModule.forRoot({ offer: offer.reducer }), RouterTestingModule.withRoutes([]),
            FormsModule, ReactiveFormsModule, HttpClientModule],
        declarations: [AddEditOfferComponent],
        providers: [provideMockStore({}), OfferService],
    },
    props: args,
});

export const AddEdit = Template.bind({});
