
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public _base_url : string = environment.base_url;
  constructor(public _http : HttpClient) { }


  getCocktails(){
    console.log('aca!')
    console.log(`${this._base_url}/random.php`)
    return this._http.get(`${this._base_url}/random.php`)
      .pipe(
        tap(datos => console.log(datos))
      )
  }
}
