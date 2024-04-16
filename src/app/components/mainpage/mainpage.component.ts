import { Component , OnInit, ViewChild} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';
import { AutocompletePlace } from '../../models/AutocompletePlace';
import { MapsComponent } from '../maps/maps.component';
import { Subscription } from 'rxjs';
import { Weather } from '../../models/Weather';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit{
  @ViewChild(MapsComponent) mapComponent!: MapsComponent;
  weatherList : Array<Weather> = [];
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
    this.weatherList = [];
    console.log(this.weatherList.length);
    console.log("start printing ");
    this.weatherSerice.getWeatherReport(this.markers).subscribe({
      next : data =>
        {
          console.log(data);
          for (const key in data) {
            console.log(data[key]);
            this.weatherList.push(data[key]);
          }
        },
        error : error =>{
          console.log(error);
        },
        complete : () =>{
          this.isListLoading = false;
        }
  });
  }

  getAlertList() : void {
    this.alertList = [];
    this.weatherSerice.getAlertReport(this.markers).subscribe({
      next : data => {
        console.log(data);
        for (const key in data) {
          console.log(data[key]);
          this.alertList.push(data[key]);
        }
      },
      error : error => {
        console.log(error);
      },
      complete : () => {
        this.isListLoading = false;
      }
    });
  }

}
