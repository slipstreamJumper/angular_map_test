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

    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );
    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: "no-token"
    }).addTo(map);
  }
}
