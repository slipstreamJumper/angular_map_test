import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})

export class MyMapComponent implements OnInit, AfterViewInit {
  private map: L.Map;
  @ViewChild('map')

  private mapContainer: ElementRef<HTMLElement>;

  //constructor ( private http: HttpClient ) { }
  private http: HttpClient;
  constructor ( ) { }
  ngOnInit() { }

  ngAfterViewInit() {
    const myAPIKey = "449cbe9951e44776b4d615a923149aca";
    const mapStyle = "https://maps.geoapify.com/v1/styles/dark-matter-dark-purple/style.json";
    const URL = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/32/query?where=1%3D1&f=json";



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

    L.marker([38.889248, -77.050636], {icon: greenIcon}).addTo(map);

    const resolveItems = function (){
      console.log(this.http.get(this.URL));
      return this.http.get(this.URL);
    };

    resolveItems();
  }
}
