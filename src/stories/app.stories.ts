import { AddEditOfferComponent } from './../app/components/add-edit-offer/add-edit-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app/app.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LoginComponent } from '../app/components/login/login.component';
import { LandingComponent } from '../app/components/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../app/store/app.states';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from '../app/app-routing.module';
import { AuthEffects } from '../app/store/effects/auth.effects';
import { OfferService } from '../app/services/offer.service';
import { AuthService } from '../app/services/auth.service';
import { OfferEffects } from '../app/offer-store/effects/offer.effects';
import { APP_BASE_HREF } from '@angular/common';

export default {
    title: 'App Component',
    component: AppComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    component: AppComponent,
    moduleMetadata: {
        declarations: [
            AppComponent,
            LandingComponent,
            LoginComponent,
            AddEditOfferComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,
            StoreModule.forRoot(reducers, {}),
            EffectsModule.forRoot([AuthEffects, OfferEffects]),
            AppRoutingModule
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService, OfferService]
    },
    props: args,
});

export const App = Template.bind({});
