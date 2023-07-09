import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepg',
  templateUrl: './homepg.page.html',
  styleUrls: ['./homepg.page.scss'],
})
export class HomepgPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToChooseEmg() {
    this.navCtrl.navigateForward('/choose-emer');
  }

  ngOnInit() {
  }

}
