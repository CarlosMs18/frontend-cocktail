import { CocktailService } from './../../services/cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-cocktail',
  templateUrl: './listado-cocktail.component.html',
  styleUrls: ['./listado-cocktail.component.css']
})
export class ListadoCocktailComponent implements OnInit {

  constructor(
    private _cocktailService : CocktailService
  ) {
    this._cocktailService.getCocktails();
  }

  ngOnInit(): void {
    this._cocktailService.getCocktails().subscribe(
      datos => console.log(datos)
    )
  }

}
