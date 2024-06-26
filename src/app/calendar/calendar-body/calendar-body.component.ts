import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CalendarData, CalendarEvent } from '../../core/models/calendar-data';
import { CommonModule } from '@angular/common';
import { CalendarDialogComponent } from '../calendar-dialog/calendar-dialog.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-calendar-body',
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    CommonModule,
    CalendarDialogComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './calendar-body.component.html',
  styleUrl: './calendar-body.component.css',
})
export class CalendarBodyComponent implements OnInit {
  weekDays: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  calendarData: CalendarData[] = [];
  showDialogAddEvent = false;
  dayId = 0;
  day = '1';

  constructor() {}

  ngOnInit(): void {
    this.calendarData.push(
      { day: '29', events: [{ name: 'An event', color: '#039be5' }] },
      { day: '30', events: [] }
    );
    for (let i = 1; i <= 31; i++) {
      this.calendarData.push({ day: i.toString(), events: [] });
    }
    this.calendarData.push({ day: '1', events: [] }, { day: '2', events: [] });
  }

  addEvent(index: number, day: string) {
    this.showDialogAddEvent = true;
    this.dayId = index;
    this.day = day;
  }

  onKeydown(event: KeyboardEvent) {
    event.stopPropagation();
  }

  closeDialogEvent(event: boolean) {
    this.showDialogAddEvent = event;
  }

  getEventData(event: CalendarEvent) {
    this.closeDialogEvent(false);
    this.calendarData[this.dayId].events.push(event);
  }

  drop(event: CdkDragDrop<CalendarEvent[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteEvent(day: string, eventName: string, event: MouseEvent) {
    event.stopPropagation();
    const dayIndex = this.calendarData.findIndex(
      (data: CalendarData) => data.day === day
    );
    const eventIndex = this.calendarData[dayIndex].events.findIndex(
      (event: CalendarEvent) => event.name === eventName
    );
    this.calendarData[dayIndex].events.splice(eventIndex, 1);
  }
}
