import { fromLonLat } from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile, Vector} from 'ol/layer';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';
import {Icon, Style} from 'ol/style';
import {Coordinate, toStringXY} from 'ol/coordinate';
import * as olProj from 'ol/proj';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map?: Map;
p : Point= new Point(fromLonLat ([2.346819035639148,48.86180262915808]));
// coord : Coordinate = new Coordinate();


  constructor() {}

  ngOnInit(): void {

    let iconFeature = new Feature({
      geometry: this.p,
    });
    console.log(this.p.getCoordinates())

    const iconStyle = new Style({
      image: new Icon({
        // anchor: fromLonLat([2.346819035639148,48.86180262915808]),
        // anchorXUnits: 'fraction',
        // anchorYUnits: 'pixels',
        color : '#8959A8',
        crossOrigin : "anonymous",
        src: '../../../../assets/icons/full-dot.svg',
        // imgSize : [20, 20],
      }),
    });

    iconFeature.setStyle(iconStyle);



    let vectorSource = new VectorSource({
      features: [iconFeature],
    });
    const vector = new Vector({
      source: vectorSource,
    });

    this.map = new Map({
      target: 'map',
      view: new View({
        center: fromLonLat([2.346819035639148,48.86180262915808]),
        zoom: 10,
      }),
      layers: [
        new Tile({
          source: new OSM(),
        }), vector,
      ],
    });
  }
}
