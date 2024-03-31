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


@NgModule({
    declarations : [
        LoginComponent,
        HistoryComponent,
        CreateaccountComponent,
        ProfileComponent,
        MainpageComponent,
        AppComponent
        
    ],
    imports:[
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialDesignModule,
        BrowserAnimationsModule,
        
    ],
    providers :[

    ],
    bootstrap : [AppComponent]

})
export class AppModule{}