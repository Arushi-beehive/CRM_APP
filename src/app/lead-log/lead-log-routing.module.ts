import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadLogPage } from './lead-log.page';

const routes: Routes = [
  {
    path: '',
    component: LeadLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadLogPageRoutingModule {}
