import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMapComponent } from './components/my-map/my-map.component';
import { CrimeApiComponent } from './components/crime-api/crime-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMapComponent,
    CrimeApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
