/**
 * Get rotation angles for clock hands based on current time.
 */
export const getClockAngles = (date) => {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourAngle = hours * 30 + minutes * 0.5; // 30° per hour + 0.5° per minute
  const minuteAngle = minutes * 6 + seconds * 0.1; // 6° per minute + smooth second offset
  const secondAngle = seconds * 6; // 6° per second

  return { hourAngle, minuteAngle, secondAngle };
};

/**
 * Parse a 12-hour time string (e.g. "9:00 AM") into total minutes from midnight.
 */
const parseTime12h = (timeStr) => {
  const [time, period] = timeStr.trim().split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (period === 'AM' && hours === 12) hours = 0;
  if (period === 'PM' && hours !== 12) hours += 12;

  return hours * 60 + minutes;
};

/**
 * Get the current day cycle entry matching the given time.
 */
export const getCurrentDayCycle = (cycles, currentTime) => {
  const currentMinutes =
    currentTime.getHours() * 60 + currentTime.getMinutes();

  for (const cycle of cycles) {
    const [startStr, endStr] = cycle.timeRange.split(' - ');
    const start = parseTime12h(startStr);
    const end = parseTime12h(endStr);

    // Handle ranges that cross midnight (e.g. "12:00 AM - 6:00 AM" → 0 to 360)
    if (start < end) {
      if (currentMinutes >= start && currentMinutes < end) return cycle;
    } else {
      // Wraps midnight: e.g. "11:00 PM - 12:00 AM" means 1380..1440 || 0..0
      if (currentMinutes >= start || currentMinutes < end) return cycle;
    }
  }

  return cycles[cycles.length - 1]; // Fallback to last entry (sleep)
};
