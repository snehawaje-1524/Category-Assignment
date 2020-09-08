import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AddEditOfferComponent } from './add-edit-offer.component';
import { OfferService } from 'src/app/services/offer.service';
import { RouterTestingModule } from '@angular/router/testing';
import * as offer from '../../offer-store/reducers/offer.reducers';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddEditOfferComponent', () => {
  let component: AddEditOfferComponent;
  let fixture: ComponentFixture<AddEditOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditOfferComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({ offer: offer.reducer }), ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [provideMockStore(), OfferService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AddEditOfferComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
