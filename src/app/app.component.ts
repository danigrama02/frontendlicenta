import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  
  constructor (private router : Router){}

  ngOnInit(): void {
      let token;
      token  = localStorage.getItem("accessToken");
      console.log(token);
      //if (token == null){
        this.router.navigate(['/home']);
      //}
      //else {
       // this.router.navigate(['/login']);
      //}
  }
}
