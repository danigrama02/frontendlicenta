import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Weather } from "../models/Weather";
import { Alert } from "../models/Alert";

@Injectable({
    providedIn : 'root'
})
export class HistoryService{

    BACKEND_API : string = "http://localhost:8080/api/v1/weather/" ;

    constructor(private httpClient : HttpClient){}

    getHistoryList() : Observable<any> {
        
        return this.httpClient.post<any>(this.BACKEND_API + "history",JSON.stringify(localStorage.getItem("username")),
        {headers : new HttpHeaders({
            'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+localStorage.getItem("accessToken")!.toString()})
        });
    }
}