import { AutocompletePlace } from '../models/AutocompletePlace';
import { Component, ElementRef, Input, NgZone, Output, ViewChild,OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-autocomplete-card',
  templateUrl: './autocomplete-card.component.html',
  styleUrl: './autocomplete-card.component.css'
})
export class AutocompleteCardComponent implements OnInit{
  @ViewChild('inputField')
  inputField!: ElementRef;

  @Input() placeholder = 'Enter address...';

  @Output() placeChanged = new EventEmitter<AutocompletePlace>();

  autocomplete: google.maps.places.Autocomplete | undefined;

  listener: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.inputField.nativeElement
    );

    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = this.autocomplete?.getPlace();
        const result: AutocompletePlace = {
          address: this.inputField.nativeElement.value,
          name: place?.name,
          location: place?.geometry?.location
        };

        this.placeChanged.emit(result);
      });
    });
  }

  ngOnDestroy() {
    if (this.autocomplete) {
      google.maps.event.clearInstanceListeners(this.autocomplete);
    }
  }
}
