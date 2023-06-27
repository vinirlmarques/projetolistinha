import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listinha-input-add-items',
  templateUrl: './listinha-input-add-items.component.html',
  styleUrls: ['./listinha-input-add-items.component.css'],
})
export class ListinhaInputAddItemsComponent {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }
}
