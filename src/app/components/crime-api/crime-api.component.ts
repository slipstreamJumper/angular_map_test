import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crime-api',
  templateUrl: './crime-api.component.html',
  styleUrls: ['./crime-api.component.scss']
})

export class CrimeApiComponent {

  constructor(private httpclient: HttpClient) {  }

  URL: string = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/32/query?where=1%3D1&f=json';

  getCrimeData = function (){
    console.log(this.httpclient.get(URL));
    return this.http.get(URL);
  };

  getCrimeDataAsync = async function(){
    let a = await this.httpclient.get(URL);
    console.log(a);
  };

}
