import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  weatherList : Array<any> = [1,2,3,4,5,7,8,9,10]
  alertList : Array<any> = [1,2,3,4,5,7,8,9,10]
  isListLoading = false;

  constructor(){}

}
