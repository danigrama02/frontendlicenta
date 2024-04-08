import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router : Router, private loginService : LoginService){}
  goToProfile() : void {
    this.router.navigate(["/profile"]);
  }

  goToHome() : void {
    this.router.navigate(["/home"])
  }

  logout() : void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
