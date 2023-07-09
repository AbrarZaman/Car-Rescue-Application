import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-choose-emer',
  templateUrl: './choose-emer.page.html',
  styleUrls: ['./choose-emer.page.scss'],
})
export class ChooseEmerPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToListServ() {
    this.navCtrl.navigateForward('/list-serv');
  }

  navigateToCallNear() {
    this.navCtrl.navigateForward('/call-near');
  }

  navigateToNearbymechan() {
    this.navCtrl.navigateForward('/nearby-mechan');
  }

  navigateToHome() {
    this.navCtrl.navigateForward('/homepg');
  }
  ngOnInit() {
  }

}
