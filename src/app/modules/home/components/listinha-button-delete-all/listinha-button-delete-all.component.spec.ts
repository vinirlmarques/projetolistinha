import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinhaButtonDeleteAllComponent } from './listinha-button-delete-all.component';

describe('ListinhaButtonDeleteAllComponent', () => {
  let component: ListinhaButtonDeleteAllComponent;
  let fixture: ComponentFixture<ListinhaButtonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListinhaButtonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(ListinhaButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
