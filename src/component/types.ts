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
  start_time: string;
  end_time: string;
  date: string;
}
