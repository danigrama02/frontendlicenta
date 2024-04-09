import { Component, ElementRef, Input, NgZone, Output, ViewChild, viewChild } from '@angular/core';
import { OnInit,EventEmitter } from '@angular/core';
import { AutocompletePlace } from '../../models/AutocompletePlace';
import {MapDirectionsService, GoogleMap, GoogleMapsModule} from '@angular/google-maps';
import {BehaviorSubject, map} from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit {
 @ViewChild('map')
  map!: GoogleMap;

  @Input()
  from: AutocompletePlace | undefined;

  @Input()
  to: AutocompletePlace | undefined;

  markerPositions: google.maps.LatLng[] = [];

  zoom = 5;

  directionsResult$ = new BehaviorSubject<
    google.maps.DirectionsResult | undefined
  >(undefined);

  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';

  constructor(private directionsService : MapDirectionsService) { }

  ngOnInit(): void {
      
  }

  ngOnChanges() : void {
    const fromLocation = this.from?.location;
    const toLocation = this.to?.location;
    if (fromLocation) {
      this.gotoLocation(fromLocation);
    }
    if (toLocation) {
      this.gotoLocation(toLocation);
    }
  }

  getDirectionsForCurrentLocations() {
    console.log('from', this.from);
    console.log('to', this.to);
    const fromLocation = this.from?.location;
    const toLocation = this.to?.location;

    if (fromLocation && toLocation) {
      this.getDirections(fromLocation, toLocation);
    }
  }

  gotoLocation(location: google.maps.LatLng) {
    this.markerPositions = [location];
    this.map.panTo(location);
    this.zoom = 17;
    this.directionsResult$.next(undefined);
  }

  getDirections(
    fromLocation : google.maps.LatLng,
    toLocation : google.maps.LatLng,
  ) : void {
    console.log('fromLocation', fromLocation);
    const request: google.maps.DirectionsRequest = {
      destination: toLocation,
      origin: fromLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.directionsService
      .route(request)
      .pipe(map((response) => response.result))
      .subscribe((res) => {
        this.directionsResult$.next(res);
        this.markerPositions = [];
      });

    }
  }