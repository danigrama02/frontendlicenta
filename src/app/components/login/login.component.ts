import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username!: string;
  password!: string;

  constructor(private loginService : LoginService, private router : Router) {}

  onSubmit(){
    this.loginService.login(this.username,this.password).subscribe(
    (response) => {
      this.router.navigate(['/home']);
    },
    () => {
    
    }
    );
  }
  
}