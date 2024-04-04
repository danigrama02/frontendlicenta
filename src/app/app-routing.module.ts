import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { HistoryComponent } from './components/history/history.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path:'',component: AppComponent},
    { path: 'login', component: LoginComponent },
    { path:'create-account', component : CreateaccountComponent},
    { path : 'profile', component : ProfileComponent, 
       children : [{path:'history',component : HistoryComponent}]},
    { path:'home', component : MainpageComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
