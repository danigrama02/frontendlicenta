import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit {
  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';
  constructor() { }
  ngOnInit(): void { }
}