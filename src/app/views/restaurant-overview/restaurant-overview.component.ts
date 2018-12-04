import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from 'src/app/entities/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-overview',
  templateUrl: './restaurant-overview.component.html',
  styleUrls: ['./restaurant-overview.component.scss']
})
export class RestaurantOverviewComponent implements OnInit {
  constructor(
    public restaurantService: RestaurantService,
    private readonly router: Router,
    private readonly firestore: AngularFirestore
  ) {
    firestore
      .collection('restaurant')
      .valueChanges()
      .subscribe((res: Restaurant[]) => {
        this.restaurantService.restaurants = res;
      });
  }

  public routeToMenu(restaurantId: string) {
    this.router.navigate(['/menu', restaurantId]);
  }

  ngOnInit() {}
}
