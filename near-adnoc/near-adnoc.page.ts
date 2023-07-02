import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NavController } from '@ionic/angular';


declare var google: any;

@Component({
  selector: 'app-near-adnoc',
  templateUrl: './near-adnoc.page.html',
  styleUrls: ['./near-adnoc.page.scss'],
})
export class NearAdnocPage implements OnInit {


  latitude: number;
  longitude: number;
  map: any;
  mapElementRef: any;

  service: any;
  nearestAdnoc: any;

  display: any;
  nearestCount: number;






  constructor(private navCtrl: NavController) { 

    this.latitude = 0;
    this.longitude = 0;
    this.nearestAdnoc = [];
    this.nearestCount = 0;


  }



  back() {
    this.navCtrl.navigateForward('/list-serv');
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    }


    async loadMap() {
      await this.getPosition();
      let mapOptions = {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.mapElementRef = document.getElementById("map");
      this.map = new google.maps.Map(this.mapElementRef, mapOptions);
      const image =
      "data:image/png;base64,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";
      
      
      
      this.addMarker(this.latitude, this.longitude, "Your Location", image);
      this.service = new google.maps.places.PlacesService(this.map);
      //let currentLocation = new google.maps.LatLng(this.latitude, this.longitude)
      this.GooglePlacesNearbySearch(this.latitude, this.longitude);
      
      this.display = new google.maps.DirectionsRenderer();
      
      }



      async ngOnInit() {
        await this.loadMap();
        }
        
        addMarker(latitude: number, longitude: number, placeName: string, image: any) {
        const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        icon: image
        });
        
        let myinfowindow = new google.maps.InfoWindow({
        content: "<div style='color: #fff; background: #007bff; padding: 10px; border-radius: 5px;'>"
        + placeName + "</div>"
        });
        
        
        google.maps.event.addListener(marker, 'click', () => {
        myinfowindow.open(this.map, marker);
        })
        
        return marker
        }


        GooglePlacesNearbySearch(latitude: number, longitude: number) {
          const request = {
          location: { lat: latitude, lng: longitude },
          rankBy: google.maps.places.RankBy.DISTANCE,
          keyword: 'ADNOC Station'
          };
          
          this.service.nearbySearch(request, (results: any, status: any) => {
          console.log(results)
          console.log(status)
          if (status == "OK") {
          for (let i = 0; i < results.length; i++) {
          let place = results[i];
          if (!place.geometry || !place.geometry.location) return;
          { // Filter hospitals based on minimum rating
          this.nearestAdnoc.push(place);
          this.addMarker(place.geometry.location.lat(), place.geometry.location.lng(), place.name,
          "data:image/png;base64,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");
          }
          }
          }
          
          })
          }
          
          RouteToNextNearest() {
          let index = this.nearestCount % this.nearestAdnoc.length;
          let nearestHospitalLat = this.nearestAdnoc[index].geometry.location.lat();
          let nearestHospitalLng = this.nearestAdnoc[index].geometry.location.lng();
          this.drawRoute(this.latitude, this.longitude, nearestHospitalLat, nearestHospitalLng);
          this.nearestCount++;
          }
          drawRoute(startLat: number, startLng: number, endLat: number, endLng: number) {
          this.service = new google.maps.DirectionsService();
          this.display.setMap(this.map);
          
          let request = {
          origin: { lat: startLat, lng: startLng },
          destination: { lat: endLat, lng: endLng },
          travelMode: google.maps.TravelMode.DRIVING
          };
          this.service.route(request, (result: any, status: any) => {
          if (status == "OK") {
          this.display.setDirections(result);
          }
          })
          }
          

}
