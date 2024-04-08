import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError, tap } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class LoginService{
    constructor(private http: HttpClient){}

    BACKEND_API : string = "http://localhost:8080/api/v1/authentication/" ;

    login(username : string, password : string) : Observable<any>{
    
        const loginPayload = {username, password };
    
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type' :'application/json',
                'Access-Control-Allow-Origin' :'*'
            })
        }

        return this.http.post<any>(this.BACKEND_API + "login", loginPayload,httpOptions).pipe(
            tap(response => {
                if(response.token){
                    localStorage.setItem('accessToken', response.token);
                    localStorage.setItem('username',username);
                }
            }),
            catchError(error =>{
                return throwError(error);
            })
        )
    }

    logout() : void {
        var token = localStorage.getItem("accessToken");
        const logoutPayload = { token };
    
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type' :'application/json',
                'Access-Control-Allow-Origin' :'*'
            })
        }
        console.log(this.BACKEND_API + "logout");
        localStorage.removeItem('accessToken');
                console.log("Successful logout");
        this.http.post<any>(this.BACKEND_API + "logout",logoutPayload,httpOptions).pipe(
            tap(response => {
                console.log(response.string);
                localStorage.removeItem('accessToken');
                console.log("Successful logout");
            }),
            catchError(error =>{
                console.log("pula");
                return throwError(error);
            })
        )
    }

    isAuthenticated(): boolean {
        const accessToken = localStorage.getItem('accessToken');
        return !!accessToken;
    }

    createAccount(username : String, password : String) :Observable<any> {
        const createAccountPayload = {username, password };
    
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type' :'application/json',
                'Access-Control-Allow-Origin' :'*'
            })
        }

        return this.http.post<any>(this.BACKEND_API + "register", createAccountPayload,httpOptions).pipe(
            tap(response => {
            }),
            catchError(error =>{
                return throwError(error);
            })
        )
    }
}