import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantOverviewComponent } from './views/restaurant-overview/restaurant-overview.component';

const routes: Routes = [
  { path: 'home', component: RestaurantOverviewComponent },
  { path: '**', component: RestaurantOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
