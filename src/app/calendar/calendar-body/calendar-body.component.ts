import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-calendar-body',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './calendar-body.component.html',
  styleUrl: './calendar-body.component.css',
})
export class CalendarBodyComponent {}
