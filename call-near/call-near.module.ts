import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallNearPageRoutingModule } from './call-near-routing.module';

import { CallNearPage } from './call-near.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallNearPageRoutingModule
  ],
  declarations: [CallNearPage]
})
export class CallNearPageModule {}
