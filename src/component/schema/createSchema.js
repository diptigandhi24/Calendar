import * as lf from "lovefield";

let dbInit = new Promise((resolve) => {
  var calenderEventsSchema = lf.schema.create("calenderEvent", 1);
  calenderEventsSchema
    .createTable("Events")
    .addColumn("id", lf.Type.INTEGER)
    .addColumn("startTime", lf.Type.STRING)
    .addColumn("title", lf.Type.STRING)
    .addColumn("endTime", lf.Type.STRING)
    .addColumn("date", lf.Type.STRING)
    .addPrimaryKey(["id"])
    .addIndex("idxDate", ["date"], false, lf.Order.DESC);
  resolve(calenderEventsSchema);
}).then((schema) => schema.connect());

export async function insertData() {
  let eventsDb;

  let newRows = [];

  let db = await dbInit;
  let results = await db.select().from(db.getSchema().table("Events")).exec();
  console.log(
    "results",
    "All results ",
    results,
    "Whose length is: ",
    results.length
  );
  let sampleData = [
    {
      id: 1,
      title: "event1",
      startTime: "11:00",
      endTime: "12:00",
      date: "19-4-2021",
    },
    {
      id: 2,
      title: "event2",
      startTime: "14:00",
      endTime: "16:00",
      date: "19-4-2021",
    },
    {
      id: 3,
      title: "event3",
      startTime: "11:00",
      endTime: "12:00",
      date: "22-4-2021",
    },
    {
      id: 4,
      title: "event4",
      startTime: "11:00",
      endTime: "12:00",
      date: "26-4-2021",
    },
    {
      id: 5,
      title: "event5",
      startTime: "13:00",
      endTime: "15:00",
      date: "28-4-2021",
    },
  ];
  if (results.length <= sampleData) {
    eventsDb = db;
    let events = db.getSchema().table("Events");

    sampleData.forEach((item) => newRows.push(events.createRow(item)));

    await eventsDb.insertOrReplace().into(events).values(newRows).exec();
  }
}

export async function selectDataFromDb(date) {
  let db = await dbInit;
  let events = db.getSchema().table("Events");
  return db.select().from(events).where(events.date.eq(date)).exec();
}
