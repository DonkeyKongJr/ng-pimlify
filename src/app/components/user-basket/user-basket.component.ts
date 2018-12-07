import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'src/app/services/user-basket/user-basket.service';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.scss']
})
export class UserBasketComponent implements OnInit {
  public faShoppingBag = faShoppingBag;
  public faCircle = faCircle;

  constructor(public userBasketService: UserBasketService) {}

  ngOnInit() {}

  public clearBasket() {
    this.userBasketService.clearBasket();
  }
}
