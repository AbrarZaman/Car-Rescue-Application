import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {getDatabase, ref, set, push, remove, onValue, DataSnapshot} from 'firebase/database'
import { Geolocation } from '@capacitor/geolocation';

class Item{
  key: string; 
  value1: string;
  value2: string;
  lat: number; 
  lng: number;
  

  
  constructor(mKey: string, mVal1: string,mVal2: string,mlat: number, mlng: number ,){
    this.key = mKey;
    this.value1 = mVal1;
    this.value2 = mVal2;
    this.lat = mlat;
    this.lng = mlng ; 
    
  }
};


@Component({
  selector: 'app-home',
  templateUrl: 'reg.page.html',
  styleUrls: ['reg.page.scss'],
})
export class RegPage {

  anItemRemote: Item; 
  anItem: Item;
  lat: number;
  lng: number;

  watch: any;


  constructor(private navCtrl: NavController) {

    this.anItemRemote = new Item("","","",0,0);
    this.anItem = new Item("","","",0,0,);
    this.lat = 0;
    this.lng = 0;
  }

  ionViewDidEnter() {
    const contentElement = document.querySelector('ion-content');
    if (contentElement) {
      contentElement.style.setProperty('--background', '#f0f0f0'); 
    }
  }
  navigateTohome() {
    this.navCtrl.navigateForward('/homepg');
  }
  
  storeItemRemote(){
    if(this.anItem != null){
      let object = new Item(this.anItem.value1, this.anItem.value1, this.anItem.value2, this.lat, this.lng);
      const db = getDatabase();
      set(ref(db, this.anItem.value1), object);
    }
  }

  async observeLocation(){
    let options = {enableHighAccuracy: true};
    this.watch = await Geolocation.watchPosition(options,
      (data)=>{
          this.lat = data?.coords.latitude!;
          this.lng = data?.coords.longitude!;
          this.storeItemRemote();
  }
)
}
ngOnInit(){
  this.observeLocation();
}
}