import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpLogPageRoutingModule } from './help-log-routing.module';

import { HelpLogPage } from './help-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpLogPageRoutingModule
  ],
  declarations: [HelpLogPage]
})
export class HelpLogPageModule {}
