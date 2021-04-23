import moment, { Moment } from "moment";
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
  now.startOf("isoWeek");
  for (let i = 0; i < 7; i++) {
    datesArr.push({
      dayOfMonth: now.date(),
      dayOfWeek: now.format("dddd"),
      eventOfDay: await selectDataFromDb(now.format("D-M-YYYY")),
    });

    // Don't move to the next week
    if (i !== 6) {
      now.add(1, "day");
    }
  }
  console.log("Data Arr", datesArr);
  return datesArr;
}

export default function useWeekDates(initialMoment = moment()): getWeek {
  const [currentMoment, updateCurrentMoment] = useState(initialMoment);

  const [week, updateWeek] = useState<Array<DayInfo>>([]);

  useEffect(() => {
    insertData();
  }, []);

  useEffect(() => {
    getCurrentWeek(currentMoment).then((result) => updateWeek(result));
  }, [currentMoment]);

  const [month, updateMonth] = useState(currentMoment.format("MMMM"));

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
