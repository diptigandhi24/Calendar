import Grid from "@material-ui/core/Grid";
import { DayInfo } from "../types";

interface DisplayWeekProps {
  week: Array<DayInfo>;
}
export default function DisplayWeek({ week }: DisplayWeekProps) {
  return (
    <Grid container spacing={1}>
      {week.map((item) => {
        return (
          <Grid item xs={6} sm={1}>
            <p>{item.dayOfWeek}</p>
            <p>{item.dayOfMonth}</p>
          </Grid>
        );
      })}
    </Grid>
  );
}
