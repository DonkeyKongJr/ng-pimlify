import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'src/app/services/user-basket/user-basket.service';

@Component({
  selector: 'app-user-basket-overview',
  templateUrl: './user-basket-overview.component.html',
  styleUrls: ['./user-basket-overview.component.scss']
})
export class UserBasketOverviewComponent implements OnInit {
  constructor(public userBasketService: UserBasketService) {}

  ngOnInit() {}

  public clearUserBasket() {
    this.userBasketService.userBasket.items = [];
  }

  public get totalPrice() {
    let total = 0;
    this.userBasketService.userBasket.items.forEach(
      _ => (total += Number(_.price))
    );

    return total.toFixed(2);
  }
}
