import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
