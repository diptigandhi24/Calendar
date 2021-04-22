import { renderHook, act } from "@testing-library/react-hooks";
import useWeekDates from "./useWeekDates";
import moment from "moment";
enum Week {
  NEXT_WEEK,
  PREV_WEEK,
}
describe("testing the hooks", () => {
  test("when the hook loads it returns the array of week", () => {
    const { result } = renderHook(() => useWeekDates(moment("2021-04-22")));
    expect(result.current.week).toEqual([
      {
        dayOfMonth: 19,
        dayOfWeek: "Monday",
      },
      {
        dayOfMonth: 20,
        dayOfWeek: "Tuesday",
      },
      {
        dayOfMonth: 21,
        dayOfWeek: "Wednesday",
      },
      {
        dayOfMonth: 22,
        dayOfWeek: "Thursday",
      },
      {
        dayOfMonth: 23,
        dayOfWeek: "Friday",
      },
      {
        dayOfMonth: 24,
        dayOfWeek: "Saturday",
      },
      {
        dayOfMonth: 25,
        dayOfWeek: "Sunday",
      },
    ]);
  });

  test("Increment the week", () => {
    const { result } = renderHook(() => useWeekDates(moment("2021-04-22")));
    act(() => {
      /* fire events that update state */
      result.current.navigateWeeks(Week.NEXT_WEEK);
    });
    expect(result.current.week).toEqual([
      { dayOfMonth: 26, dayOfWeek: "Monday" },
      { dayOfMonth: 27, dayOfWeek: "Tuesday" },
      {
        dayOfMonth: 28,
        dayOfWeek: "Wednesday",
      },
      {
        dayOfMonth: 29,
        dayOfWeek: "Thursday",
      },
      {
        dayOfMonth: 30,
        dayOfWeek: "Friday",
      },
      {
        dayOfMonth: 1,
        dayOfWeek: "Saturday",
      },
      {
        dayOfMonth: 2,
        dayOfWeek: "Sunday",
      },
    ]);
  });

  test("Decrement the week", () => {
    const { result } = renderHook(() => useWeekDates(moment("2021-04-22")));
    act(() => {
      /* fire events that update state */
      result.current.navigateWeeks(Week.PREV_WEEK);
    });
    expect(result.current.week).toEqual([
      {
        dayOfMonth: 12,
        dayOfWeek: "Monday",
      },
      {
        dayOfMonth: 13,
        dayOfWeek: "Tuesday",
      },
      {
        dayOfMonth: 14,
        dayOfWeek: "Wednesday",
      },
      {
        dayOfMonth: 15,
        dayOfWeek: "Thursday",
      },
      {
        dayOfMonth: 16,
        dayOfWeek: "Friday",
      },
      {
        dayOfMonth: 17,
        dayOfWeek: "Saturday",
      },
      {
        dayOfMonth: 18,
        dayOfWeek: "Sunday",
      },
    ]);
  });

  test("Display the single Month of the week", () => {
    const { result } = renderHook(() => useWeekDates(moment("2021-04-22")));
    expect(result.current.month).toBe("April");
  });

  test.skip("display two months of the week", () => {
    const { result } = renderHook(() => useWeekDates(moment("2021-04-22")));
    act(() => {
      /* fire events that update state */
      result.current.navigateWeeks(Week.NEXT_WEEK);
    });
    expect(result.current.week).toEqual([26, 27, 28, 29, 30, 1, 2]);
    expect(result.current.month).toBe("April - May");
  });

  test("move forward and backward calender week", () => {
    const { result } = renderHook(() => useWeekDates(moment("2021-04-22")));
    act(() => {
      /* fire events that update state */
      result.current.navigateWeeks(Week.NEXT_WEEK);
    });
    act(() => {
      /* fire events that update state */
      result.current.navigateWeeks(Week.PREV_WEEK);
    });
    expect(result.current.week[0].dayOfMonth).toEqual(19);
  });
});
