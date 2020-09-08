import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { AddEditOfferComponent } from './components/add-edit-offer/add-edit-offer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { isLogin: true } },
  { path: 'register', component: LoginComponent },
  { path: '', component: LandingComponent },
  { path: 'add-offer', component: AddEditOfferComponent },
  { path: 'offers/:offerId/edit-offer', component: AddEditOfferComponent, data: { isUpdate: true } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
