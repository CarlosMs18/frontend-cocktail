import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './shared-header/shared-header.component';



@NgModule({
  declarations: [
    SharedHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SharedHeaderComponent
  ]
})
export class SharedModule { }
