import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Weather } from "../models/Weather";
import { Alert } from "../models/Alert";

@Injectable({
    providedIn : 'root'
})
export class WeatherService{
    constructor(private httpClient : HttpClient){}

    getWeatherReport(markers : google.maps.LatLng[]) : any {
        var w1 = <Weather>{};
        w1.precipitaion = "1";
        w1.pressure = "1";
        w1.temperature ="1";
        w1.weatherImg = "1";
        w1.weatherId = "1";
        return [w1,w1,w1,w1,w1,w1,w1,w1,w1,w1,w1,w1,w1];
    }

    getAlertReport(markers : google.maps.LatLng[]) : any {
        var a1 = <Alert>{}
        a1.alertId = "1";
        a1.alertImage = "1";
        a1.alertText = "1";
        return [a1,a1,a1,a1,a1,a1,a1,a1];
    }
}