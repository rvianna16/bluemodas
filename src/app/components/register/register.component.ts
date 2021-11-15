import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: any[] = [];
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  number: string = ''
  password: string = ''
  subscription!: Subscription;



  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get() {
    this.subscription = this.authService.getUsers().subscribe((data: any) => {
      this.users = data;
    })    
  }

  checkField() {
    if(this.firstName.trim().length <= 1) {      
      alert('O nome é muito pequeno')
      return false;
    }else if(this.lastName.trim().length <= 1) {
      alert('O sobrenome é muito pequeno')
      return false
    }else if (this.email.trim().length <= 5) {
      alert('Digite o e-mail corretamente')
      return false
    }else if (this.number.trim().length <= 8) {
      alert('Digite um telefone válido') 
        return false      
    }else if (this.password.trim().length <= 5) {
      alert('A senha está muito pequena')
      return false
     }else {
       return true
     }    
  }

  createUser(){
    let userExists = false;
    if(this.checkField()) {
      this.users.map(user => {
        if(user.email === this.email) {
          alert('Este e-mail já está cadastrado no nosso banco de dados')
          userExists = true;
        }
      })

      if(!userExists) {
        alert('Conta criada com sucesso')
        this.authService.createUser({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,     
          number: this.number,     
          password: this.password
        })        
        this.router.navigate(['/home']);        
        this.router.navigate(['/login']);        
      }
    }     
  }
}
