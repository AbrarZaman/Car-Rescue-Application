import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepgPage } from './homepg.page';

const routes: Routes = [
  {
    path: '',
    component: HomepgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepgPageRoutingModule {}
