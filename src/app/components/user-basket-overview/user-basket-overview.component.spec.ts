import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasketOverviewComponent } from './user-basket-overview.component';

describe('UserBasketOverviewComponent', () => {
  let component: UserBasketOverviewComponent;
  let fixture: ComponentFixture<UserBasketOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBasketOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBasketOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
