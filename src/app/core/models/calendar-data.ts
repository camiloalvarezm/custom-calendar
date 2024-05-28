export interface CalendarData {
  day: string;
  events: CalendarEvent[];
}

export interface CalendarEvent {
  name: string;
  color: string;
}
