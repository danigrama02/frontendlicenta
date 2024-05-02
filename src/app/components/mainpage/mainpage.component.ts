import { Component , OnInit, ViewChild} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';
import { AutocompletePlace } from '../../models/AutocompletePlace';
import { MapsComponent } from '../maps/maps.component';
import { Subscription } from 'rxjs';
import { Weather } from '../../models/Weather';
import { Alert } from '../../models/Alert';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit{
  @ViewChild(MapsComponent) mapComponent!: MapsComponent;
  weatherList : Array<Weather> = [];
  alertList : Array<Alert> = [];
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
    this.mapComponent.getDirectionsForCurrentLocations();
  }



  getWeatherList() : void {
    this.markers = [];
    this.markers.push(this.fromValue.location!);
    var mapMarkser = this.mapComponent.getMarkers();
    mapMarkser.forEach(element => {this.markers.push(element)});
    this.markers.push(this.toValue.location!);
    this.weatherList = [];
    console.log(this.weatherList.length);
    console.log("start printing ");
    console.log("markeri pe harta")
    console.log(this.markers);
    this.markers.forEach(element => {console.log(element);console.log("pula")});
    this.weatherSerice.getWeatherReport(this.markers,this.fromValue.name!,this.toValue.name!).subscribe({
      next : data =>
        {
          console.log(data);
          for (const key in data) {
            console.log(data[key]);
            this.weatherList.push(data[key]);
           let w : Weather = data[key];
           let a : Alert = {alertText : ""};
           if (Number(w.temperature) > 30){
            a.alertText  ="Temperatura periculoasa : " + w.temperature;
           }
           if (Number(w.temperature) < 0){
            a.alertText  ="Temperatura scazuta, aveti grija la posibilitatea ca drumul sa fie inghetat : " + w.temperature;
           }
           if (Number(w.precipitaion) > 50){
            if (Number(w.temperature) < 2){
              a.alertText  ="Pericol de ninsoare : " + w.precipitaion;
            }
            else {
              a.alertText  = "Pericol de ploaie : " + w.precipitaion;
            }
           }
           if (a.alertText != ""){
            this.alertList.push(a);
          }
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

}
