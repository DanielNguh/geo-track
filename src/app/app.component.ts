import { Component, Input, OnInit} from '@angular/core';
// import { AngularOpenlayersModule } from 'ngx-openlayers';
import { createRegularPolygon } from 'ol/interaction/Draw';
import { toLonLat } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import GeometryType from 'ol/geom/GeometryType';

import 'ol/ol.css'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../../node_modules/ol/ol.css'
]
})
export class AppComponent implements OnInit{
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;
  satelliteView: boolean = false;
  buttonEl: string = 'Satellite';
  index: number = 0;
  titleZoomIn = 'Zoom in';
  titleZoomOut = 'Zoom out';
  overlay: boolean = true;

  closeOverlay() {
    this.overlay = false;
  }


  increaseZoom() {
    this.zoom  = Math.min(this.zoom + 1, 20);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom  = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  satelliteDisplay() {
      this.index += 1;
      if ((this.index % 2) === 0){
        this.satelliteView = false;
        this.buttonEl = 'Satellite';

      }
      else {
        this.satelliteView = true;
        this.buttonEl = 'Streets';

      }
  }

  constructor() {}
  ngOnInit(): void {

  }

}
