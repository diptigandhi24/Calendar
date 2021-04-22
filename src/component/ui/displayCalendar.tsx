import useWeekDates from "../customHook/useWeekDates";
import DisplayWeek from "./displayWeek";
import DisplayMonth from "./displayMonth";
import { Week } from "../types";
import Container from "@material-ui/core/Container";

export default function DisplayCalender() {
  const { month, week, navigateWeeks } = useWeekDates();

  let handleNavigator = (week: Week) => {
    navigateWeeks(week);
  };
  return (
    <Container
      style={{
        width: "100%",
        display: "grid",
        gridTemplateRows: "3em 5em auto",
        position: "absolute",
        padding: "0px 24px",
        margin: "0px 15%",
      }}
    >
      <DisplayMonth month={month} handleNavigator={handleNavigator} />
      <DisplayWeek week={week} />
    </Container>
  );
}
