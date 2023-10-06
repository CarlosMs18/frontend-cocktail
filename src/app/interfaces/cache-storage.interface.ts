import { Drink } from "./listado-cocktail.interface";

export interface CacheStore{
   nombreCoctel : {termino : string,cocteles : Drink[]}
}
