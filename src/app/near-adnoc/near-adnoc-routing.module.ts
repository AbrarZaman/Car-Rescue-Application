import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearAdnocPage } from './near-adnoc.page';

const routes: Routes = [
  {
    path: '',
    component: NearAdnocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearAdnocPageRoutingModule {}
