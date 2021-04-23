export interface DayInfo {
  dayOfMonth: number;
  dayOfWeek: string;
  eventOfDay: Array<CalendarEvent>;
}
export enum Week {
  NEXT_WEEK,
  PREV_WEEK,
}
export interface CalendarEvent {
  title: string;
  startTime: string;
  endTime: string;
  date: string;
}
