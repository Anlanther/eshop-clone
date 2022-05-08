import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameShopComponent } from './game-shop/game-shop.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    GameShopComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
