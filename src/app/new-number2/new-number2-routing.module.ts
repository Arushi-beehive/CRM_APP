import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewNumber2Page } from './new-number2.page';

const routes: Routes = [
  {
    path: '',
    component: NewNumber2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewNumber2PageRoutingModule {}
