const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function timeConverter(unix_timestamp: Date | null) {
  const o = new Date(unix_timestamp ?? 0);
  return `${o.getDay()} ${
    months[o.getMonth()]
  } ${o.getFullYear()} ${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`;
}
