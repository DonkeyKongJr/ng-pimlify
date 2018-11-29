import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantOverviewComponent } from './views/restaurant-overview/restaurant-overview.component';
import { RestaurantMenuComponent } from './views/restaurant-menu/restaurant-menu.component';

const routes: Routes = [
  { path: 'home', component: RestaurantOverviewComponent },
  { path: 'menu/:id', component: RestaurantMenuComponent },
  { path: '**', component: RestaurantOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
