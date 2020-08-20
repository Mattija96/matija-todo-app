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
import {ActivityService} from './shared/services/activity.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NewActivityComponent } from './activities/new-activity/new-activity.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PlansComponent,
    ActivitiesComponent,
    WeatherWidgetComponent,
    WeatherComponent,
    NewActivityComponent
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
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ColorPickerModule
  ],
  providers: [WeatherService, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
