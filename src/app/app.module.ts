import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { OverviewComponent } from './overview/overview.component';
import { PlansComponent } from './plans/plans.component';
import { ActivitiesComponent } from './activities/activities.component';
import { WeatherWidgetComponent } from './shared/weather-widget/weather-widget.component';
import {WeatherService} from './shared/services/weather.service';
import { WeatherComponent } from './weather/weather.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PlansComponent,
    ActivitiesComponent,
    WeatherWidgetComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
