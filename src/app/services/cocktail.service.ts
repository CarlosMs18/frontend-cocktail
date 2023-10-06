
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drink } from '../interfaces/listado-cocktail.interface';
import { CacheStore } from '../interfaces/cache-storage.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public _base_url : string = environment.base_url;
  constructor(public _http : HttpClient) { }




  getCocktails(termino : string){
    return this._http.get<{drinks:Drink[]}>(`${this._base_url}/search.php?s=${termino}`)

  }
}
