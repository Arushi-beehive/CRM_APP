import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpLogPage } from './help-log.page';

const routes: Routes = [
  {
    path: '',
    component: HelpLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpLogPageRoutingModule {}
