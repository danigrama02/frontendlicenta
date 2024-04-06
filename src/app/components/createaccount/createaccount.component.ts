import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  username!:string;
  password!:string;

  constructor(private loginService : LoginService, private router : Router){}

  onSubmit() {
    this.loginService.createAccount(this.username,this.password).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      }
    )
  }

}
