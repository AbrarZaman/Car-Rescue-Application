import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServPage } from './list-serv.page';

const routes: Routes = [
  {
    path: '',
    component: ListServPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListServPageRoutingModule {}
