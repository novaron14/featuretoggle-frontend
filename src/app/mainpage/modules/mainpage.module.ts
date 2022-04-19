import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainpageComponent } from '../components/mainpage.component';



@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [MainpageComponent]
})
export class MainpageModule { }
