import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../models/user';
import { LogIn, Register } from '../../store/actions/auth.actions';
import { AppState, selectAuthState } from '../../store/app.states';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  showLogin: boolean;
  loginRegisterForm: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.createLoginRegister();
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.errorMessage = null;
    this.route.data.subscribe((params) => {
      if (params && params.isLogin) {
        this.showLogin = params.isLogin;
      } else {
        this.showLogin = false;
      }
    });
  }

  createLoginRegister(): void {
    this.loginRegisterForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  loginOrRegister(): void {
    if (this.showLogin) {
      this.store.dispatch(new LogIn(this.user));
    } else {
      this.store.dispatch(new Register(this.user));
    }
  }
}
