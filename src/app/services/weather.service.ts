import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Weather } from "../models/Weather";
import { Alert } from "../models/Alert";

@Injectable({
    providedIn : 'root'
})
export class WeatherService{

    BACKEND_API : string = "http://localhost:8080/api/v1/weather/" ;

    constructor(private httpClient : HttpClient){}

    getWeatherReport(markers : google.maps.LatLng[], fromLocation : string, toLocation : string) : Observable<any> {
        
        const locations = JSON.stringify(markers);
        const username = localStorage.getItem("username")!;
        const WeatherRequest = {locations,fromLocation,toLocation,username};
        const requestJsonBody = JSON.stringify(WeatherRequest);
        console.log(requestJsonBody);
        return this.httpClient.post<any>(this.BACKEND_API + "forecast",requestJsonBody,
        {headers : new HttpHeaders({
            'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+localStorage.getItem("accessToken")!.toString()})
        });
    }
}