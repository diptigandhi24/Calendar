import Grid from "@material-ui/core/Grid";
import { DayInfo } from "../types";
import React from "react";

interface DisplayWeekProps {
  week: Array<DayInfo>;
}
export default function DisplayWeek({ week }: DisplayWeekProps) {
  return (
    <Grid container spacing={1}>
      {week.map((item, index) => {
        return (
          <Grid
            key={item.dayOfWeek + item.dayOfMonth + index}
            item
            xs={6}
            sm={1}
          >
            <p>{item.dayOfWeek}</p>
            <p>{item.dayOfMonth}</p>
          </Grid>
        );
      })}
      <Grid container spacing={1}></Grid>
    </Grid>
  );
}
