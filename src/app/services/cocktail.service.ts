

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drink } from '../interfaces/listado-cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public _base_url : string = environment.base_url;
  constructor(public _http : HttpClient) { }


  getCocktails(valor : string){
    console.log('aca!')
    console.log(`${this._base_url}/search.php?f=${valor}`)
    console.log("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    return this._http.get<{drinks:Drink[]}>(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valor}`)
      .pipe(
        tap(datos => console.log(datos))
      )
  }
}
