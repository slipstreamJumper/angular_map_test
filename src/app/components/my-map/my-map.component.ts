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
    const myAPIKey = '23f38da328ed40c08d05ae637d27e626';
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lat: 38.88,
      long: -77.05,
      zoom: 4
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.long],
      initialState.zoom
    );

    map.attributionControl
      .setPrefix("")
      .addAttribution("Geoapify"
      );

    L.mapboxGL({
      style: '${mapStyle}?apiKey=${myAPIKey}',
      accessToken: "no-token"
    }).addTo(map);
  }
}
