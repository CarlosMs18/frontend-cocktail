import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCocktailComponent } from './listado-cocktail/listado-cocktail.component';
import { EdicionCocktailComponent } from './listado-cocktail/edicion-cocktail/edicion-cocktail.component';




@NgModule({
  declarations: [
    ListadoCocktailComponent,
    EdicionCocktailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
