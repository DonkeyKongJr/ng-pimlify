import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-overview',
  templateUrl: './restaurant-overview.component.html',
  styleUrls: ['./restaurant-overview.component.scss']
})
export class RestaurantOverviewComponent implements OnInit {
  public restaurants: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.restaurants = firestore.collection('restaurant').valueChanges();
  }

  ngOnInit() {}
}
