import { Component, ElementRef, Input, NgZone, Output, ViewChild } from '@angular/core';
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
 
  @ViewChild("inputStart")
  inputStart! : ElementRef;

  @ViewChild("inputEnd")
  inputEnd! : ElementRef;

  @Input() startPlaceholder = "Enter starting adress";
  @Input() endPlaceholder = "Enter arrival adress";

  @Output() startPlaceChanged = new EventEmitter<AutocompletePlace>();
  @Output() endPlaceChanged = new EventEmitter<AutocompletePlace>();

  @Input()
  from: AutocompletePlace | undefined;

  @Input()
  to: AutocompletePlace | undefined;

  fromValue: AutocompletePlace = { address: '' };
  toValue: AutocompletePlace = { address: '' };

  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';
  autocompleteStart : google.maps.places.Autocomplete | undefined;
  autocompleteEnd : google.maps.places.Autocomplete | undefined;
  listenerStart : any;
  listenerEnd : any;

  directionsResult$ = new BehaviorSubject<
    google.maps.DirectionsResult | undefined
  >(undefined);

  markerPositions: google.maps.LatLng[] = [];

  constructor(private ngZone : NgZone, private directionsService : MapDirectionsService) { }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void { 
    this.autocompleteStart = new google.maps.places.Autocomplete(
      this.inputStart.nativeElement
    );
    this.autocompleteEnd = new google.maps.places.Autocomplete(
      this.inputEnd.nativeElement
    );

    this.autocompleteStart.addListener("startPlaceChanged",
      () =>{
        this.ngZone.run(
          () => {
            const place = this.autocompleteStart?.getPlace();
            const result : AutocompletePlace = {
              address: this.inputStart.nativeElement.value,
              name : place?.name,
              location : place?.geometry?.location
            };
            this.startPlaceChanged.emit(result);
          }
        ); 
      });

      this.autocompleteEnd.addListener("endPlaceChanged",
      () =>{
        this.ngZone.run(
          () => {
            const place = this.autocompleteEnd?.getPlace();
            const result : AutocompletePlace = {
              address: this.inputEnd.nativeElement.value,
              name : place?.name,
              location : place?.geometry?.location
            };
            this.endPlaceChanged.emit(result);
          }
        ); 
      });

  }

  ngOnDestroy() {
    if (this.autocompleteStart) {
      google.maps.event.clearInstanceListeners(this.autocompleteStart);
    }
    if (this.autocompleteEnd) {
      google.maps.event.clearInstanceListeners(this.autocompleteEnd);
    }
  }

  getWeather() : void {
    console.log(this.fromValue.location);console.log(this.toValue.location);
    this.getDirections(this.from?.location!,this.to?.location!);
  }

  getDirections(
    fromLocation : google.maps.LatLng,
    toLocation : google.maps.LatLng,
  ) : void {
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