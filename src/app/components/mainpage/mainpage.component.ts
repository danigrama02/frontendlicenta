import { Component , OnInit, ViewChild} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';
import { AutocompletePlace } from '../../models/AutocompletePlace';
import { MapsComponent } from '../maps/maps.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit{
  @ViewChild(MapsComponent) mapComponent!: MapsComponent;
  weatherList : Array<any> = [];
  alertList : Array<any> = [];
  isListLoading = false;

  fromValue: AutocompletePlace = { address: '' };
  toValue: AutocompletePlace = { address: '' };

  markers : google.maps.LatLng[] = [];

  constructor(private weatherSerice : WeatherService, private router : Router){
  }

  ngOnInit() : void {
    let token;
    token  = localStorage.getItem("accessToken");
    console.log(token);
    if (token != null){
      this.router.navigate(['/home']);
    }
    else {
      this.router.navigate(['/login']).then(()=>{});
    }
  }

  getDataForCurentLocation() : void {
    this.markers = this.mapComponent.getDirectionsForCurrentLocations();
    this.getWeatherList();
    this.getAlertList();
  }

  getWeatherList() : void {
    this.weatherList = this.weatherSerice.getWeatherReport(this.markers);
  }

  getAlertList() : void {
    this.alertList = this.weatherSerice.getAlertReport(this.markers);
  }

}
