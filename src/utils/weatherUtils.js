// Converts a two-letter country code to its corresponding emoji flag
export function convertToFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    throw new Error("Invalid country code. It should be a 2-letter string.");
  }

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) + 127397);

  return String.fromCodePoint(...codePoints);
}

// Formats a date string to a short weekday name (e.g., "Mon", "Tue")
export function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

// Returns the weather icon corresponding to the provided weather code
export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}
