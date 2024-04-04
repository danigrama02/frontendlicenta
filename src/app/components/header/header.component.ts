import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router : Router){}
  goToProfile() : void {
    this.router.navigate(["/profile"]);
  }

  goToHome() : void {
    this.router.navigate(["/home"])
  }
}
