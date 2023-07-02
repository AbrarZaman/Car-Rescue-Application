import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListServPageRoutingModule } from './list-serv-routing.module';

import { ListServPage } from './list-serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListServPageRoutingModule
  ],
  declarations: [ListServPage]
})
export class ListServPageModule {}
