import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  user: any = [];
  subscription!: Subscription;
  userEmail!: string;
  userPassword!: string;
  userAuth: any = this.authService.userIsAuth();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.get();
    this.user = this.authService.getUserAuth();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get() {
    this.subscription = this.authService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  login() {    
    this.get();
    let auth = false;
    this.users.map((userAuth) => {
      if (
        userAuth.email === this.userEmail &&
        userAuth.password === this.userPassword
      ) {
        this.authService.auth(true);
        this.authService.setUserAuth(userAuth);
        auth = true;
      }
    });

    if (!auth) {
      alert('Email ou senha incorretos');
      this.authService.auth(false);
    }
  }
}
