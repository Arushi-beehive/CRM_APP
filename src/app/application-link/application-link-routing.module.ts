import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationLinkPage } from './application-link.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationLinkPageRoutingModule {}
