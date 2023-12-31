

import { Drink } from 'src/app/interfaces/listado-cocktail.interface';
import { CocktailService } from './../../services/cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-cocktail',
  templateUrl: './listado-cocktail.component.html',
  styleUrls: ['./listado-cocktail.component.css']
})
export class ListadoCocktailComponent implements OnInit {

  public listadoCocteles : Drink[] = [];
  public posibleNull : boolean = false;
  public cargando : boolean = false;
  constructor(
    private _cocktailService : CocktailService,

  ) {}

  ngOnInit(): void {
   /*  this._cocktailService.getCocktails()
      .subscribe((data) => {
       this.listadoCocteles = data.drinks;
        console.log(this.listadoCocteles)

      }) */
  }


  presionarTecla(valor : string){
    if(valor == ''){
      this.listadoCocteles = [];
      this.posibleNull = false;
      return;
    }
    this.cargando = true;
    this.posibleNull = false;
    this._cocktailService.getCocktails(valor)
      .subscribe({
        next : data => {
          console.log(data.drinks)
          if(data.drinks == null){
            this.cargando = false;
            this.posibleNull = true;
            this.listadoCocteles = [];
            return;

          }
          this.listadoCocteles = data.drinks;
          this.cargando = false;

        }
      })
  }

}
