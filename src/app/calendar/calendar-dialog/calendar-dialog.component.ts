import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CalendarEvent } from '../../core/models/calendar-data';

interface EventColor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calendar-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
  ],
  templateUrl: './calendar-dialog.component.html',
  styleUrl: './calendar-dialog.component.css',
})
export class CalendarDialogComponent {
  eventName: string = '';
  eventColor: string = '';
  enableAddBtn = true;
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() eventData = new EventEmitter<CalendarEvent>();

  colors: EventColor[] = [
    { value: '#039be5', viewValue: 'Blue' },
    { value: '#d50000', viewValue: 'Red' },
    { value: '#33b679', viewValue: 'Green' },
  ];

  addEvent() {
    console.log(this.eventName, this.eventColor);
    this.eventData.emit({ name: this.eventName, color: this.eventColor });
  }

  onClose() {
    this.closeDialog.emit(false);
  }

  validateForm() {
    this.enableAddBtn = this.eventName === '' || this.eventColor === '';
  }
}
