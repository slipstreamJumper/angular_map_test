import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-crime-api',
  templateUrl: './crime-api.component.html',
  styleUrls: ['./crime-api.component.scss']
})

export class CrimeApiComponent {

  private httpclient: HttpClient;
  constructor() {  }

  URL = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/32/query?where=1%3D1&f=json';

  getCrimeData(crimeUrl) {
    let a = this.httpclient.get(crimeUrl);
    console.log("...getting crime data from direct method...")
    console.log(a);
    return a;
  }

  resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  getValueWithPromise() {
    this.resolveAfter5Seconds(20).then(value => {
      console.log('promise result: ${value}');
    });
    console.log('I will not wait until the promise is resolved.');
  }

  // async function tryAndGetCrimeData() {
  //  // wait 5 seconds
  //  await new Promise(getCrimeData => setTimeout(getCrimeData, 5000));

  // }

  // this.doAsyncObservableCrimeData = new Observable(observer => {
  //  observer.next('Started');
  //  setTimeout (() => {observer.next('Hello, observable world!');},1000);
  //  setTimeout (() => { observer.next('Done'); observer.complete();}, 2000);
  // });

}
