import moment, { invalid, Moment } from "moment";
import { useState, useEffect } from "react";
import { DayInfo, Week } from "../types";
import { insertData, selectDataFromDb } from "../schema/createSchema";

interface getWeek {
  week: Array<DayInfo>;
  navigateWeeks: (navigator: Week) => void;
  month: string;
}

async function getCurrentWeek(now: Moment): Promise<Array<DayInfo>> {
  let datesArr = [];
  console.log("start of the week", now.date(), now.startOf("isoWeek").date());
  for (let i = 0; i < 7; i++) {
    datesArr.push({
      dayOfMonth: now.date(),
      dayOfWeek: now.format("dddd"),
      eventOfDay: await selectDataFromDb(now.format("D-M-YYYY")),
      currentDay: moment().isSame(now, "day"),
    });

    // Don't move to the next week
    if (i !== 6) {
      now.add(1, "day");
    }
  }
  console.log("Data Arr", datesArr);
  return datesArr;
}

export function getCurrentMonth(now: Moment): string {
  let monthCount: string = now.startOf("isoWeek").format("MMMM");
  let monthOfTheWeek: string = monthCount;
  for (let i = 0; i <= 6; i++) {
    console.log("monthCount", monthCount, "currentMonth", now.format("MMMM"));
    if (monthCount !== now.format("MMMM")) {
      monthCount = now.format("MMMM");
      monthOfTheWeek = `${monthOfTheWeek}-${monthCount}`;
    }
    now.add(1, "day");
  }
  return monthOfTheWeek;
}

export default function useWeekDates(initialMoment = moment()): getWeek {
  const [currentMoment, updateCurrentMoment] = useState(initialMoment);
  const [week, updateWeek] = useState<Array<DayInfo>>([]);
  const [month, updateMonth] = useState(currentMoment.format("MMMM"));

  useEffect(() => {
    insertData();
  }, []);

  useEffect(() => {
    getCurrentWeek(currentMoment).then((result) => updateWeek(result));
    let month = getCurrentMonth(moment(currentMoment));
    console.log("UseEffect Month", month);
    updateMonth(month);
  }, [currentMoment]);

  function navigateWeeks(navigator: Week) {
    switch (navigator) {
      case Week.NEXT_WEEK:
        updateCurrentMoment((prevMoment) => prevMoment.clone().add(1, "week"));

        break;
      case Week.PREV_WEEK:
        updateCurrentMoment((prevMoment) =>
          prevMoment.clone().subtract(1, "week")
        );
        break;
    }

    updateMonth(() => {
      return currentMoment.format("MMMM");
    });
  }
  return { month, week, navigateWeeks };
}
