export const generateCalendarMap = (currentDate: Date) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarMap = [];
  const currentDay = currentDate.getDay();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDay);

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    calendarMap.push({
      day: daysOfWeek[date.getDay()],
      date: date.getDate(),
      active: (date.getDate() === new Date().getDate() && date.getMonth === new Date().getMonth),
    });
  }

  return calendarMap;
}
export function getRandomLightColorHex() {
  const r = Math.floor(Math.random() * 156) + 100;
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;

  // Convert to hex format
  const toHex = (value: number) => {
    const hex = value.toString(16).padStart(2, '0');
    return hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}