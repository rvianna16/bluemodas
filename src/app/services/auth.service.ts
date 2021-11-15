import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuth: boolean = false;
  public userConnected: any = [];

  showMenuEmitter = new EventEmitter<boolean>();

  private apiUrl = 'https://bluemodas20211114194147.azurewebsites.net/api/Users';

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  createUser(data: any) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(
        this.apiUrl, data,
        {
          headers,
        }
      )
      .subscribe((res) => console.log(res));
  }

  auth(status: boolean) {
    if (status) {
      this.userAuth = status;

      this.showMenuEmitter.emit(status);

      this.router.navigate(['/']);
    } else {
      this.userAuth = status;

      this.showMenuEmitter.emit(status);
    }
  }

  getUserAuth() {
    return this.userConnected;
  }

  setUserAuth(user: any) {
    this.userConnected = user;
  }

  userIsAuth() {
    return this.userAuth;
  }
}
