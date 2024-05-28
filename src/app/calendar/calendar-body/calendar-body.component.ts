import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CalendarData } from '../../core/models/calendar-data';
import { CommonModule } from '@angular/common';
import { CalendarDialogComponent } from '../calendar-dialog/calendar-dialog.component';
import { CalendarEvent } from '../../core/models/calendar-data';
@Component({
  selector: 'app-calendar-body',
  standalone: true,
  imports: [MatGridListModule, CommonModule, CalendarDialogComponent],
  templateUrl: './calendar-body.component.html',
  styleUrl: './calendar-body.component.css',
})
export class CalendarBodyComponent implements OnInit {
  weekDays: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  calendarData: CalendarData[] = [];
  showDialogAddEvent = false;
  dayId = 0;

  constructor() {}

  ngOnInit(): void {
    this.calendarData.push(
      { day: '29', events: [{ name: 'An event', color: 'lightskyblue' }] },
      { day: '30', events: [] }
    );
    for (let i = 1; i <= 31; i++) {
      this.calendarData.push({ day: i.toString(), events: [] });
    }
    this.calendarData.push({ day: '1', events: [] }, { day: '2', events: [] });
  }

  addEvent(index: number) {
    this.showDialogAddEvent = true;
    this.dayId = index;
  }

  arrastrar(event: MouseEvent) {
    event.stopPropagation();
  }

  closeDialogEvent(event: boolean) {
    this.showDialogAddEvent = event;
  }

  getEventData(event: CalendarEvent) {
    this.closeDialogEvent(false);
    this.calendarData[this.dayId].events.push(event);
  }
}
