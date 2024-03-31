import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations :[],
  imports : [
    CommonModule
  ],
  exports:[
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class MaterialDesignModule {}