import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {History} from '../../models/History';
@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  @Input() history?: History;
}
