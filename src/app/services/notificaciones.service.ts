import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(
    private toastr :ToastrService
  ) { }

  mensajeDeError(valor : string){
    this.toastr.warning(`No existe un coctél con el termino ${valor}`,"Bebida no encontrada",{timeOut :1100})
  }
}
