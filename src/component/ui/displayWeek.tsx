import Box from "@material-ui/core/Box";
import { DayInfo } from "../types";
import React, { ReactElement } from "react";
import "./calender.css";
interface DisplayWeekProps {
  week: Array<DayInfo>;
}
interface PropsGird {
  children?: ReactElement;
  backgroundColorT?: string;
}
const GridItem = ({ children, backgroundColorT }: PropsGird) => {
  return (
    <Box
      style={{
        backgroundColor: backgroundColorT || "white",
        color: "black",
        padding: 1,
        margin: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        height: "80px",
      }}
    >
      {children}
    </Box>
  );
};

export default function DisplayWeek({ week }: DisplayWeekProps) {
  return (
    <>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "3em 10px repeat(7, 1fr)",
          backgroundColor: "black",
          position: "sticky",
          zIndex: 10,
          top: "3em",
        }}
      >
        <div className="filler"></div>
        <div className="filler"></div>
        {week.map((item, index) => {
          return (
            <GridItem backgroundColorT={"#217346"}>
              <p>
                {item.dayOfWeek}
                <br></br>
                {item.dayOfMonth}
              </p>
            </GridItem>
          );
        })}
      </Box>
    </>
  );
}
