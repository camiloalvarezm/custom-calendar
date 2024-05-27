export interface CalendarData {
  day: string;
  events: Events[];
}

interface Events {
  name: string;
  color: string;
}
