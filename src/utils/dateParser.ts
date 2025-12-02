import type { DateTime } from "@/components/events/eventCard/EventCard";


export const DateParser = (date: string, time: string): DateTime => {
  const parseDate = date.split("-");
  const parseTime = time.split(":");

  const monthAbbreviations = new Map<number, string>([
    [1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"],
    [5, "May"], [6, "Jun"], [7, "Jul"], [8, "Aug"],
    [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]
  ]);

  const year = parseInt(parseDate[0], 10);
  const monthNumber = parseInt(parseDate[1], 10);
  const day = parseInt(parseDate[2], 10);
  const hour = parseInt(parseTime[0], 10);
  const minute = parseInt(parseTime[1], 10);

  const monthAbbreviation = monthAbbreviations.get(monthNumber) || "Invalid";

  return {
    year,
    month: monthAbbreviation,
    day,
    hour,
    minute
  };
};