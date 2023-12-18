export function formatIndDay(timestamp: number): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(timestamp).toLocaleDateString("id-ID", options);
}

export function formatIndTime(timestamp: number): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Date(timestamp).toLocaleDateString("id-ID", options);
}

export function formatInd(timestamp: number): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(timestamp).toLocaleDateString("id-ID", options).split(" ")[1];
}
