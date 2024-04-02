import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError, tap } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class LoginService{
    constructor(private http: HttpClient){}

    BACKEND_API : string = "http://localhost:8080/api/v1/authentication/login" ;

    login(username : string, password : string) : Observable<any>{
    
        const loginPayload = {username, password };
    
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type' :'application/json',
                'Access-Control-Allow-Origin' :'*'
            })
        }

        return this.http.post<any>(this.BACKEND_API, loginPayload,httpOptions).pipe(
            tap(response => {
                if(response.token){
                    localStorage.setItem('accessToken', response.token);
                }
            }),
            catchError(error =>{
                return throwError(error);
            })
        )
    }

    logout() : void {
        localStorage.removeItem('accessToken');
    }

    isAuthenticated(): boolean {
        const accessToken = localStorage.getItem('accessToken');
        return !!accessToken;
    }
}