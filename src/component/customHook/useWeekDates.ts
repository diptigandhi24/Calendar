import moment, { Moment } from "moment";
import { useState } from "react";
import { DayInfo, Week } from "../types";

interface getWeek {
  week: Array<DayInfo>;
  navigateWeeks: (navigator: Week) => void;
  month: string;
}

function getCurrentWeek(now: Moment): Array<DayInfo> {
  let datesArr = [];
  now.startOf("isoWeek");
  for (let i = 0; i < 7; i++) {
    datesArr.push({ dayOfMonth: now.date(), dayOfWeek: now.format("dddd") });

    // Don't move to the next week
    if (i !== 6) {
      now.add(1, "day");
    }
  }

  return datesArr;
}

export default function useWeekDates(currentMoment = moment()): getWeek {
  const [currentWeek] = useState(currentMoment);
  const [week, updateWeek] = useState<Array<DayInfo>>(
    getCurrentWeek(currentWeek)
  );
  const [month, updateMonth] = useState(currentWeek.format("MMMM"));
  function navigateWeeks(navigator: Week) {
    switch (navigator) {
      case Week.NEXT_WEEK:
        updateWeek(() => {
          return getCurrentWeek(currentWeek.add(1, "week"));
        });
        break;
      case Week.PREV_WEEK:
        updateWeek(() => {
          return getCurrentWeek(currentWeek.subtract(1, "week"));
        });
        break;
    }

    updateMonth(() => {
      return currentWeek.format("MMMM");
    });
  }
  return { month, week, navigateWeeks };
}
