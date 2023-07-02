import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegPage } from './reg.page';

const routes: Routes = [
  {
    path: '',
    component: RegPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
