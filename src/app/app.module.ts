import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { HistoryComponent } from "./history/history.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { ProfileComponent } from "./profile/profile.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialDesignModule } from "./material-design/material-design.module";
import { RouterModule } from "@angular/router";
import { GoogleMapsModule } from "@angular/google-maps";
import { MapsComponent } from "./maps/maps.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

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
        FooterComponent
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

    ],
    bootstrap : [AppComponent]

})
export class AppModule{}