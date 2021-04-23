import "./calender.css";
import { DayInfo } from "../types";

interface DisplayEventsProps {
  week: Array<DayInfo>;
}

function TimeRowGrid() {
  let timegrid = [];

  for (let i = 1; i < 24; i++) {
    if (i < 10) {
      let row = (
        <div key={`gridTimeRow${i}`} className="time" style={{ gridRow: i }}>
          0{i}:00
        </div>
      );
      timegrid.push(row);
    } else {
      let row = (
        <div key={`gridTimeRow${i}`} className="time" style={{ gridRow: i }}>
          {i}:00
        </div>
      );
      timegrid.push(row);
    }
  }
  return timegrid;
}

function RowGrid() {
  let rowGrid = [];

  for (let i = 1; i < 24; i++) {
    let row = (
      <div className="row" key={`gridRow${i}`} style={{ gridRow: i }}></div>
    );
    rowGrid.push(row);
  }
  return rowGrid;
}

export default function DisplayCalenderEvents({ week }: DisplayEventsProps) {
  return (
    <div className="content">
      {TimeRowGrid()}
      <div className="filler-col"></div>
      <div key="gridColumn3" className="col" style={{ gridColumn: 3 }}></div>
      <div key="gridColumn4" className="col" style={{ gridColumn: 4 }}></div>
      <div key="gridColumn5" className="col" style={{ gridColumn: 5 }}></div>
      <div key="gridColumn6" className="col" style={{ gridColumn: 6 }}></div>
      <div key="gridColumn7" className="col" style={{ gridColumn: 7 }}></div>
      <div
        key="gridColumn8"
        className="col weekend"
        style={{ gridColumn: 8 }}
      ></div>
      <div
        key="gridColumn9"
        className="col weekend"
        style={{ gridColumn: 9 }}
      ></div>
      {RowGrid()}
      {week.map((day, colIndex) => {
        return day.eventOfDay.map((eventInfo) => {
          let spanStart = parseInt(eventInfo.startTime);
          console.log(spanStart, eventInfo.startTime);
          let spanEnd =
            parseInt(eventInfo.endTime) - parseInt(eventInfo.startTime);

          return (
            <div
              key={`${eventInfo.title}`}
              style={{
                gridColumn: `${colIndex + 3}`,
                gridRow: `${spanStart + 1}/span ${spanEnd}`,
                backgroundColor: "#d7dbef",
              }}
            >
              {eventInfo.title}
            </div>
          );
        });
      })}
    </div>
  );
}
