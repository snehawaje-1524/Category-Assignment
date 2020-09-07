import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import * as offer from '../../offer-store/reducers/offer.reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditOfferComponent } from './edit-offer.component';
import { OfferService } from 'src/app/services/offer.service';
import { HttpClientModule } from '@angular/common/http';

describe('EditOfferComponent', () => {
  let component: EditOfferComponent;
  let fixture: ComponentFixture<EditOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditOfferComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({ offer: offer.reducer }), ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [provideMockStore(), OfferService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(EditOfferComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
