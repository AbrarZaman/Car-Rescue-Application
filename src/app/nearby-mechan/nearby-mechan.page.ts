import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NavController } from '@ionic/angular';


declare var google: any;


@Component({
  selector: 'app-nearby-mechan',
  templateUrl: './nearby-mechan.page.html',
  styleUrls: ['./nearby-mechan.page.scss'],
})
export class NearbyMechanPage implements OnInit {

 
  latitude: number;
  longitude: number;
  map: any;
  mapElementRef: any;

  service: any;
  nearestmechan: any;

  display: any;
  nearestCount: number;






  constructor(private navCtrl: NavController) { 

    this.latitude = 0;
    this.longitude = 0;
    this.nearestmechan = [];
    this.nearestCount = 0;


  }



  back() {
    this.navCtrl.navigateForward('/choose-emer');
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
      
      
      
      this.addMarker(this.latitude, this.longitude, "My Location", image);
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
          keyword: 'car service'
          };
          
          this.service.nearbySearch(request, (results: any, status: any) => {
          console.log(results)
          console.log(status)
          if (status == "OK") {
          for (let i = 0; i < results.length; i++) {
          let place = results[i];
          if (!place.geometry || !place.geometry.location) return;
          { // Filter hospitals based on minimum rating
          this.nearestmechan.push(place);
          this.addMarker(place.geometry.location.lat(), place.geometry.location.lng(), place.name,
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAsVBMVEVHcEzmICDlBQXmDg5TWFjSaGjqKyvkAQHkAQHpHBzkAgLuMDBQUFBUWVnlAwPmDAxQUFDnFRXlCAhRUVFVVVXlAwPoERFdXl7mCQldXV3nEhLmBwflBATlBQVhYWHlBwfmCwvcRUVSUlLlBATmCwvlBgZRUVHmCAjmDw/nEBBlZmZbW1vlCAjoGBjnCwtZWVlVVVVUVFTnEBDnFxdWVlZVVVVbW1taWlpOAATkAABOTk7idE4+AAAAOHRSTlMAFMdWCwIN+f0d9AnTEuZu8jCT52nuRi+JPD+s19AltIMFft5+wd2aTV0dWKMkd0q7y2coqJSNix4ucu4AAAIuSURBVEjHxVZbm6IwDC0oBQRBUBAERAYBxRuOzu7n/P8ftk3RHVTK5WnOE72cJk1OQhH6PWD5cpG5qOt2gRtkfKxpcRA6G64LQz4G4u0BMTjKrSY2/O0ZwaDZP7y2ytNjPuHj0tpohRtM4EyCTZppy1jBsm1qMJRMNkcx6Q7P+D9jeHCG5DB908ET0ameiR2YGw0YjEsMRkylxnLCCPbqZ3FYQiCfHIRQrDfDBY81YfdRYjYkowG4thfqKIsRWeI5YOzuVk7AoWb82ox+gl8Ocr/+zvI8XwLy2Z8PFzkQgEUdZQ3h3CL3nBZqOqVIr8V5jrYk0FLtZeAw0UbDq3v6mpUoTssiRzZc5pMVMEIZFyf36s4Bu/Nupy4bKPqN2h+rE3U6uWP6PV2igUQ9rsEGDlsRyncVhLJiXv8AGkwwUFK1REo+cyUh83FtkJUQTrOH58n0NC7hphN1bEO+vHphwmVuIZ6788e6QL65kC0YdPAhAGuy8yldIH9PYYkfVkd61YdIB7esBateuIQWsflzVdmkxZwJzLLcjGi1+0cDC6SsjaNPx5rBLv5of28rFu/tPd66j1ZNHcbQbu/wm1vZ+p0h6S29Mnij8G1Ndiu+MFhZrHSh8IXCzGKlBVhPDHYWK13WfKJkXX4yB7/CaMriq9S6ZPFVal2y+Ca19izWSI3nulIeUmvP4pvUQqUHhUrNsnu9FUBqWdSLQqTWMYtVqTl9XzGRfuj98hHQ7+IfJdh3ZtNmCk4AAAAASUVORK5CYII=");
          }
          }
          }
          
          })
          }
          
          RouteToNextNearest() {
          let index = this.nearestCount % this.nearestmechan.length;
          let nearestHospitalLat = this.nearestmechan[index].geometry.location.lat();
          let nearestHospitalLng = this.nearestmechan[index].geometry.location.lng();
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
