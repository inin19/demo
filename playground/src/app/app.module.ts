import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectionChartComponent } from './share/projection-chart/projection-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectionChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
