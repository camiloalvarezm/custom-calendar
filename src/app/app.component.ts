import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { CalendarBodyComponent } from './calendar/calendar-body/calendar-body.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarHeaderComponent, CalendarBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'custom-calendar';
}
