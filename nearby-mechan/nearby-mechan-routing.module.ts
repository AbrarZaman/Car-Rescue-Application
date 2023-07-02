import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyMechanPage } from './nearby-mechan.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyMechanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyMechanPageRoutingModule {}
