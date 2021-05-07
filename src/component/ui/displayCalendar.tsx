//custom hook
import useWeekDates from "../customHook/useWeekDates";
//type
import { Week } from "../types";
//components
import DisplayWeek from "./displayWeek";
import DisplayMonth from "./displayMonth";
import DisplayCalenderEvents from "./displayCalendarEvents";
//materialUI
import Container from "@material-ui/core/Container";

import "./calender.css";

export default function DisplayCalender() {
  //this hook provides current, next++, previous++ week update
  const { month, week, navigateWeeks } = useWeekDates();

  let handleNavigator = (week: Week) => {
    navigateWeeks(week);
  };
  return (
    <Container>
      <DisplayMonth month={month} handleNavigator={handleNavigator} />
      <DisplayWeek week={week} />
      <DisplayCalenderEvents week={week} />
    </Container>
  );
}
