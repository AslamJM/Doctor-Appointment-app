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

export function convertToISOString(timeString: string) {
  const [time, period] = timeString.split(' ');
  const [hours, minutes] = time.split(':').map(Number);

  let date = new Date();
  date.setHours(
    period === 'AM' || hours === 12 ? hours : hours + 12,
    minutes,
    0,
    0,
  );

  console.log(timeString, date);

  const isoString = date.toISOString();
  return isoString;
}
