import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinhaLuzComponent } from './listinha-luz.component';

describe('ListinhaLuzComponent', () => {
  let component: ListinhaLuzComponent;
  let fixture: ComponentFixture<ListinhaLuzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListinhaLuzComponent]
    });
    fixture = TestBed.createComponent(ListinhaLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
