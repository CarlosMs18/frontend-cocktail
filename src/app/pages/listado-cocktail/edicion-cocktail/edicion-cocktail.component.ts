import { Component, OnInit, Input,OnChanges } from '@angular/core'
import { Drink } from 'src/app/interfaces/listado-cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-edicion-cocktail',
  templateUrl: './edicion-cocktail.component.html',
  styleUrls: ['./edicion-cocktail.component.css']
})
export class EdicionCocktailComponent implements OnInit, OnChanges {

  constructor(
    public _modalService :ModalService,
    private _coctelService : CocktailService
  ) {
    console.log('1')
    console.log(this.coctel)
   }
   @Input() coctel!: Drink;

  ngOnChanges():void{
    console.log(this.coctel)
    console.log(this.coctel.strInstructionsIT)
    console.log('3')
  }

  ngOnInit(): void {
    console.log(this.coctel)

    console.log('2')
  }



  cerrarModal() {
    this._modalService.cerrarModal();


  }
}
