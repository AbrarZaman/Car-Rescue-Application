import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list-serv',
  templateUrl: './list-serv.page.html',
  styleUrls: ['./list-serv.page.scss'],
})
export class ListServPage implements OnInit {
showDropdown: number | null = null;
  constructor(private navCtrl: NavController) { }


  nearstAdnoc() {
    this.navCtrl.navigateForward('/near-adnoc');
  }
  
  back() {
    this.navCtrl.navigateForward('/choose-emer');
  }

  ngOnInit() {
  }

  toggleDropdown(index: number) {
    this.showDropdown = this.showDropdown === index ? null : index;
}








}
