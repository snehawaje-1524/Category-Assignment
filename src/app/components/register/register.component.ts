import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../models/user';
import { Register } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../../store/app.states';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.errorMessage = null;
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password,
    };
    this.store.dispatch(new Register(payload));
  }


}
