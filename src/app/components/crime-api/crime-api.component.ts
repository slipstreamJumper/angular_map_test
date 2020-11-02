import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crime-api',
  templateUrl: './crime-api.component.html',
  styleUrls: ['./crime-api.component.scss']
})

export class CrimeApiComponent {
  URL: string = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/32/query?where=1%3D1&f=json';

  resolveItems = function (){
    console.log(this.http.get(this.URL));
    return this.http.get(this.URL);
  };


  constructor() {
  }
}
