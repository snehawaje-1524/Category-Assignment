import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddOfferComponent } from './add-offer.component';
import { StoreModule } from '@ngrx/store';
import * as offer from '../../offer-store/reducers/offer.reducers';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';

describe('AddOfferComponent', () => {
  let component: AddOfferComponent;
  let fixture: ComponentFixture<AddOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOfferComponent],
      imports: [StoreModule.forRoot({ offer: offer.reducer }), ReactiveFormsModule],
      providers: [Router, FormBuilder, OfferService],
    }).compileComponents();

    fixture = TestBed.createComponent(AddOfferComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddOfferComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create add component', () => {
    expect(component).toBeTruthy();
  });
});
