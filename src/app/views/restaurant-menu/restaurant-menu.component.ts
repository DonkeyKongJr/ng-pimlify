import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/entities/restaurant.model';
import { Menu } from 'src/app/entities/menu.model';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  public menus: Menu[] = [];

  constructor() {}

  ngOnInit() {}

  public displayMenu(restaurant: Restaurant) {
    this.menus = restaurant.menu;
  }
}
