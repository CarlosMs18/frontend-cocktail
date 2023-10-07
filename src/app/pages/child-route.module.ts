import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCocktailComponent } from './listado-cocktail/listado-cocktail.component';


const routes: Routes = [
  {path : '', component: ListadoCocktailComponent},
  {path : 'cocktail', component : ListadoCocktailComponent},
  {path : '**',redirectTo:'/api/cocktail'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule  { }
