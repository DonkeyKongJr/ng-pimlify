import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'src/app/services/user-basket/user-basket.service';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.scss']
})
export class UserBasketComponent implements OnInit {
  constructor(public userBasketService: UserBasketService) {}

  ngOnInit() {}

  public clearBasket() {
    this.userBasketService.clearBasket();
  }
}
