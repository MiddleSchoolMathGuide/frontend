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

export function timeConverter(unix_timestamp: number | null) {
  const o = new Date((unix_timestamp ?? 0) * 1000);
  return `${o.getUTCDate()} ${
    months[o.getMonth()]
  } ${o.getFullYear()} ${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`;
}

export function normalizeTitle(title: string): string {
  /*
  Normalize the title to be case-insensitive and allow hyphen/space interchangeability.
  */

  return title.replace(/[-]/g, "[- ]").replace(/[ ]/g, "[- ]").toLowerCase();
}
