import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {PlansComponent} from './plans/plans.component';
import {ActivitiesComponent} from './activities/activities.component';
import {WeatherComponent} from './weather/weather.component';
import {NewActivityComponent} from './activities/new-activity/new-activity.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'activities/new', component: NewActivityComponent },
  { path: 'weather', component: WeatherComponent }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
