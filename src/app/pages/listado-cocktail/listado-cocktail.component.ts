import { NotificacionesService } from './../../services/notificaciones.service';
import { Drink } from 'src/app/interfaces/listado-cocktail.interface';
import { CocktailService } from './../../services/cocktail.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-listado-cocktail',
  templateUrl: './listado-cocktail.component.html',
  styleUrls: ['./listado-cocktail.component.css']
})
export class ListadoCocktailComponent implements OnInit {

  public listadoCocteles : Drink[] = [];
  public posibleNull : boolean = false;
  public cargando : boolean = false;
  public drinkSeleccionado!: Drink;
  constructor(
    private _cocktailService : CocktailService,
    private _notificacionesToastr : NotificacionesService,
    public _modalService : ModalService

  ) {}

  ngOnInit(): void {}


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
            this._notificacionesToastr.mensajeDeError(valor);
            return;

          }
          this.listadoCocteles = data.drinks;
          this.cargando = false;

        }
      })
  }

  abrirModal(coctel : Drink){
    this.drinkSeleccionado = coctel
    this._modalService.abrirModal();
  }

}
