import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'src/app/services/user-basket/user-basket.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-basket-overview',
  templateUrl: './user-basket-overview.component.html',
  styleUrls: ['./user-basket-overview.component.scss']
})
export class UserBasketOverviewComponent implements OnInit {
  public faTimes = faTimes;
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

  public clearItem(id: string) {
    this.userBasketService.removeItemFromUserBasket(id);
  }
}
