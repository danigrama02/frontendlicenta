import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor() {}

  login() {
    // Here you can implement login logic, such as calling an authentication service
    console.log('Logging in with username:', this.username, 'and password:', this.password);
    // Reset the form after login
    this.username = '';
    this.password = '';
  }
}