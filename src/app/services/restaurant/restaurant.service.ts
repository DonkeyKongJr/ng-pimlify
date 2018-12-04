import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/Entities/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public restaurants: Restaurant[] = [];

  constructor() {}

  public getRestaurantById(restaurantId: string): Restaurant {
    return this.restaurants.find(_ => _.id === restaurantId);
  }
}
