import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/models/drug.model';
import { Login } from 'src/app/models/login.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userLoginRequest: Login = {
    UserEmail: '',
    Password: ''
  };
  isFormSubmitted = false;
  
  constructor(private userService: UsersService,private router: Router) { }
  login() {
    this.isFormSubmitted = true;
    this.userService.userLogin(this.userLoginRequest)
    .subscribe({
      next: (response) => {
        const token = response.token;
        this.userService.setToken(token);
        console.log(token);
        alert("Login Successfull");
        if(this.userService.getUserRole() == "user")
        {
          this.router.navigate(['displaydrug']);
        }
        else if(this.userService.getUserRole() == "admin")
        {
          this.router.navigate(['drugs']);
        }
        else{
          this.router.navigate(['']);
        }
      },
      error: (resp) => {
        console.log('Login failed:',resp);
        alert("Login Failed")
      }
    });
  }
  

}
