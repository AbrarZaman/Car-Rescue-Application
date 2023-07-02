import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallNearPage } from './call-near.page';

const routes: Routes = [
  {
    path: '',
    component: CallNearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallNearPageRoutingModule {}
