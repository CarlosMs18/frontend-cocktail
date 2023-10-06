import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-edicion-cocktail',
  templateUrl: './edicion-cocktail.component.html',
  styleUrls: ['./edicion-cocktail.component.css']
})
export class EdicionCocktailComponent implements OnInit {

  constructor(public _modalService :ModalService) {

   }

  ngOnInit(): void {
  }


  cerrarModal() {
    this._modalService.cerrarModal();


  }
}
