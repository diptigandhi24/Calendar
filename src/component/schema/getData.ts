import { CalendarEvent } from "../types";

export default function getEventsOnDate(date: string): Array<CalendarEvent> {
  let data = new Map();
  data.set("25-4-2021", {
    title: "event1",
    startTime: "11:00",
    endTime: "12:00",
    date: "25-4-2021",
  });
  data.set("20-4-2021", {
    title: "event1",
    startTime: "11:00",
    endTime: "14:00",
    date: "20-4-2021",
  });
  data.set("24-4-2021", {
    title: "event1",
    startTime: "11:00",
    endTime: "14:00",
    date: "24-4-2021",
  });

  let temp = data.get(date);
  if (temp === undefined) {
    return [];
  } else {
    return [temp];
  }
}
