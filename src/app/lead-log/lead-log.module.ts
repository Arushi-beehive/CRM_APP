import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadLogPageRoutingModule } from './lead-log-routing.module';

import { LeadLogPage } from './lead-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadLogPageRoutingModule
  ],
  declarations: [LeadLogPage]
})
export class LeadLogPageModule {}
