import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './components/header/header.component';
import { ListinhaButtonDeleteAllComponent } from './components/listinha-button-delete-all/listinha-button-delete-all.component';
import { ListinhaInputAddItemsComponent } from './components/listinha-input-add-items/listinha-input-add-items.component';
import { ListinhaListComponent } from './components/listinha-list/listinha-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ListinhaLuzComponent } from './components/listinha-luz/listinha-luz.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListinhaButtonDeleteAllComponent,
    ListinhaInputAddItemsComponent,
    ListinhaListComponent,
    HomeComponent,
    ListinhaLuzComponent,
  ],

  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
