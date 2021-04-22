import Box from "@material-ui/core/Box";
import { DayInfo } from "../types";
import React, { ReactElement } from "react";

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

function createRow({ time }: { time: string }) {
  return (
    <>
      <p
        style={{
          backgroundColor: "white",
          margin: "1px",
          position: "absolute",
          left: "-50px",
          top: "74px",
        }}
      >
        {time}
      </p>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </>
  );
}
export default function DisplayWeek({ week }: DisplayWeekProps) {
  return (
    <>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "sticky",
          zIndex: 10,
          top: "3em",
        }}
      >
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
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "01:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "02:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "03:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "04:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "05:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "06:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "07:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "08:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "09:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "10:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "11:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "12:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "13:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "14:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "15:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "16:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "17:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "18:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "19:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "20:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "21:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "22:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "23:00" })}
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "black",
          position: "relative",
          width: "100%",
        }}
      >
        {createRow({ time: "" })}
      </Box>
    </>
  );
}
