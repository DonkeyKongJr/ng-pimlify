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
}
