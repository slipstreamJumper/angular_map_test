import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit, AfterViewInit {
  private map: L.Map;
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }
  ngOnInit() {
  }


  ngAfterViewInit() {
    const myAPIKey = "449cbe9951e44776b4d615a923149aca";
    const mapStyle = "https://maps.geoapify.com/v1/styles/dark-matter-dark-purple/style.json";

    const initialState = {
      lng: -77,
      lat: 38,
      zoom: 8
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    var greenIcon = L.icon({
      iconUrl: 'assets/images/lego.png',
      iconSize: [20,30],
      iconAnchor: [10, 30],
      shadowAnchor: [10, 30],
      popupAnchor: [10, 30]
    });

    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: "no-token"
    }).addTo(map);

    L.marker([38.889248, -77.050636],, {icon: greenIcon}).addTo(map);
  }
}
