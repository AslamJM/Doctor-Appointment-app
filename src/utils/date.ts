import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  if (!date) {
    return dayjs().format('DD-MM-YYYY');
  }
  return dayjs(date).format('DD-MM-YYYY');
};

export const getTimeSlots = (startTime: string, endTime: string) => {
  const today = dayjs().startOf('day');
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  if (!start.isSame(today, 'day')) {
    return [];
  }

  const timeSlots = [];
  let current = start;

  while (current.isBefore(end)) {
    timeSlots.push(current.format('h:mm A'));
    current = current.add(30, 'minute');
  }

  return timeSlots;
};

export function convertTimeToISOString(timeString: string) {
  const currentDate = dayjs();
  const [hours, minutes] = timeString
    .split('.')
    .map(part => parseInt(part, 10));

  let hours24 = hours;
  if (hours === 12) {
    hours24 = 0;
  }
  if (timeString.endsWith('P.M.')) {
    hours24 += 12;
  }

  const dateTime = currentDate.set('hours', hours24).set('minutes', minutes);
  const isoString = dateTime.toISOString();

  return isoString;
}
