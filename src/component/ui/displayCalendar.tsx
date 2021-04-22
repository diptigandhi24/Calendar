import Box from "@material-ui/core/Box";
import useWeekDates from "../customHook/useWeekDates";
import DisplayWeek from "./displayWeek";

export default function DisplayCalender() {
  const { month, week, navigateWeeks } = useWeekDates();

  return (
    <Box>
      <DisplayWeek week={week} />
    </Box>
  );
}
