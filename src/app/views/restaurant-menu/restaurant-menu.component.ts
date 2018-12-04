import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/entities/restaurant.model';
import { Menu } from 'src/app/entities/menu.model';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  public menus: Menu[] = [];

  constructor(
    private readonly restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    this.loadRestaurant(restaurantId);
  }

  public loadRestaurant(restaurantId: string) {
    const restaurant = this.restaurantService.getRestaurantById(restaurantId);

    this.menus = restaurant.menu;
  }
}
