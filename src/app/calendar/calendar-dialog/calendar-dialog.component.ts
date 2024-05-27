import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

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
  @Output() close = new EventEmitter<boolean>();
  @Output() eventData = new EventEmitter<object>();

  colors: EventColor[] = [
    { value: 'lightskyblue', viewValue: 'Blue' },
    { value: 'lightsalmon', viewValue: 'Red' },
    { value: 'lightgreen', viewValue: 'Green' },
  ];

  addEvent() {
    console.log(this.eventName, this.eventColor);
    this.eventData.emit({ name: this.eventName, color: this.eventColor });
  }

  onClose() {
    this.close.emit(false);
  }

  validateForm() {
    this.enableAddBtn = this.eventName === '' || this.eventColor === ''
  }
}
