import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseEmerPageRoutingModule } from './choose-emer-routing.module';

import { ChooseEmerPage } from './choose-emer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseEmerPageRoutingModule
  ],
  declarations: [ChooseEmerPage]
})
export class ChooseEmerPageModule {}
