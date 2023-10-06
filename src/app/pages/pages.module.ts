import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCocktailComponent } from './listado-cocktail/listado-cocktail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListadoCocktailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
