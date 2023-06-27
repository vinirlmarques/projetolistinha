import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinhaListComponent } from './listinha-list.component';

describe('ListinhaListComponent', () => {
  let component: ListinhaListComponent;
  let fixture: ComponentFixture<ListinhaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListinhaListComponent]
    });
    fixture = TestBed.createComponent(ListinhaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
