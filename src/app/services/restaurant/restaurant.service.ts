import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/Entities/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public restaurants: Restaurant[] = [];
  public actualRestaurant: Restaurant;

  constructor() {}
}
