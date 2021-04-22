import Box from "@material-ui/core/Box";
import useWeekDates from "../customHook/useWeekDates";
import DisplayWeek from "./displayWeek";
import DisplayMonth from "./displayMonth";
import { Week } from "../types";

export default function DisplayCalender() {
  const { month, week, navigateWeeks } = useWeekDates();

  let handleNavigator = (week: Week) => {
    navigateWeeks(week);
  };
  return (
    <Box>
      <DisplayMonth month={month} handleNavigator={handleNavigator} />
      <DisplayWeek week={week} />
    </Box>
  );
}
