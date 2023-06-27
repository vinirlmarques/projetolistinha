import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinhaInputAddItemsComponent } from './listinha-input-add-items.component';

describe('ListinhaInputAddItemsComponent', () => {
  let component: ListinhaInputAddItemsComponent;
  let fixture: ComponentFixture<ListinhaInputAddItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListinhaInputAddItemsComponent]
    });
    fixture = TestBed.createComponent(ListinhaInputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
