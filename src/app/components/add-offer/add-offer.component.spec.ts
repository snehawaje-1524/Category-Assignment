import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddOfferComponent } from './add-offer.component';
import { StoreModule } from '@ngrx/store';
import * as offer from '../../offer-store/reducers/offer.reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddOfferComponent', () => {
  let component: AddOfferComponent;
  let fixture: ComponentFixture<AddOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOfferComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({ offer: offer.reducer }), ReactiveFormsModule, FormsModule],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create add component', () => {
    fixture = TestBed.createComponent(AddOfferComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
