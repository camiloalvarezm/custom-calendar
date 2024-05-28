import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CalendarEvent } from '../../core/models/calendar-data';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';

interface EventColor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calendar-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [DatePipe],
  templateUrl: './calendar-dialog.component.html',
  styleUrl: './calendar-dialog.component.css',
})
export class CalendarDialogComponent implements OnInit {
  eventName: string = '';
  eventColor: string = '';
  enableAddBtn = true;
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() eventData = new EventEmitter<CalendarEvent>();
  @Input() day: string = '1';
  dateString = '';
  currentDate!: Date;
  datePipe = Inject(DatePipe)

  colors: EventColor[] = [
    { value: '#039be5', viewValue: 'Blue' },
    { value: '#d50000', viewValue: 'Red' },
    { value: '#33b679', viewValue: 'Green' },
  ];

  ngOnInit(): void {
    this.dateString = `05/${this.day}/2024`;
    this.currentDate = new Date(this.dateString);
  }

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
