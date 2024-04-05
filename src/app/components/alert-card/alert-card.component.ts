import { Component,Input } from '@angular/core';
import { Alert } from '../../models/Alert';
@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrl: './alert-card.component.css'
})
export class AlertCardComponent {
  @Input() alert?: Alert;
}
