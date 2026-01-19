import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNumber2PageRoutingModule } from './new-number2-routing.module';

import { NewNumber2Page } from './new-number2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewNumber2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewNumber2Page]
})
export class NewNumber2PageModule {}
