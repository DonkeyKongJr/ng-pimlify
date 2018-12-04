import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantOverviewComponent } from './views/restaurant-overview/restaurant-overview.component';
import { environment } from 'src/environments/environment';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { RestaurantMenuComponent } from './views/restaurant-menu/restaurant-menu.component';
import { RestaurantService } from './services/restaurant/restaurant.service';
import { UserBasketService } from './services/user-basket/user-basket.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantOverviewComponent,
    RestaurantMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'pimlify'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [RestaurantService, UserBasketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
