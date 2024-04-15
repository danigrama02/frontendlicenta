import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { HistoryComponent } from "./components/history/history.component";
import { CreateaccountComponent } from "./components/createaccount/createaccount.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialDesignModule } from "./components/material-design/material-design.module";
import { RouterModule } from "@angular/router";
import { GoogleMapsModule } from "@angular/google-maps";
import { MapsComponent } from "./components/maps/maps.component";
import { HeaderComponent } from "./components/header/header.component";
import { WeatherCardComponent } from "./components/weather-card/weather-card.component";
import { AlertCardComponent } from "./components/alert-card/alert-card.component";
import { LoginService } from "./services/login.service";
import { WeatherService } from "./services/weather.service";
import { AutocompleteCardComponent } from "./autocomplete-card/autocomplete-card.component";

@NgModule({
    declarations : [
        LoginComponent,
        HistoryComponent,
        CreateaccountComponent,
        ProfileComponent,
        MainpageComponent,
        AppComponent,
        MapsComponent,
        HeaderComponent,
        WeatherCardComponent,
        AlertCardComponent,
        AutocompleteCardComponent
    ],
    imports:[
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialDesignModule,
        BrowserAnimationsModule,
        GoogleMapsModule
    ],
    providers :[
        LoginService, WeatherService,
    ],
    bootstrap : [AppComponent]

})
export class AppModule{}