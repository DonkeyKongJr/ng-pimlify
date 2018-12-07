import { Injectable } from '@angular/core';
import { UserBasket } from 'src/app/entities/user-basket.model';
import { Menu } from 'src/app/entities/menu.model';

@Injectable({
  providedIn: 'root'
})
export class UserBasketService {
  public userBasket: UserBasket = new UserBasket();

  constructor() {}

  public addItemToUserBasket(item: Menu) {
    this.userBasket.items.push(item);
  }

  public removeItemFromUserBasket(id: string) {
    const elementToRemove = this.userBasket.items.find(_ => _.id === id);
    const indexOfElementToRemove = this.userBasket.items.indexOf(
      elementToRemove
    );

    this.userBasket.items.splice(indexOfElementToRemove, 1);
  }

  public clearBasket() {
    this.userBasket.items = [];
  }
}
