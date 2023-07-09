import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearAdnocPageRoutingModule } from './near-adnoc-routing.module';

import { NearAdnocPage } from './near-adnoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearAdnocPageRoutingModule
  ],
  declarations: [NearAdnocPage]
})
export class NearAdnocPageModule {}
