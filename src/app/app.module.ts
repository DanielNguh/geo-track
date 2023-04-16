import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card'
import { MatIconModule} from "@angular/material/icon";


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkerComponent } from './marker/marker.component';
import { MarkerTestComponent } from './marker-test/marker-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent,
    MarkerTestComponent
  ],
  imports: [
    BrowserModule,
    AngularOpenlayersModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
