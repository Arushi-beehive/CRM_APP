import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationLinkPageRoutingModule } from './application-link-routing.module';

import { ApplicationLinkPage } from './application-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationLinkPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ApplicationLinkPage]
})
export class ApplicationLinkPageModule {}
