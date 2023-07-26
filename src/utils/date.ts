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

  let date = dayjs();
  date.set('hour', hours);
  date.set('minute', minutes);

  return date.toISOString();
}

const regulateTime = (t: number) => (t === 12 ? t : t % 12);

export function generateTimeSlots(
  startTime: string,
  endTime: string,
): string[] {
  const slots: string[] = [];

  let suffix = startTime.split(' ')[1];

  let startHour = Number(startTime.substring(0, 2));
  let endHour = Number(endTime.substring(0, 2));

  for (let i = startHour; i < endHour; i++) {
    slots.push(`${regulateTime(i)}:00 ${suffix}`);
    slots.push(`${regulateTime(i)}:30 ${suffix}`);
  }

  slots.push(`${regulateTime(endHour)}:00 ${suffix}`);

  return slots;
}

export const checkPassedTime = (t: string) => {
  const [time, suffix] = t.split(' ');
  if (suffix === 'A.M.') {
    return dayjs().get('hour') > Number(time.split(':')[0]);
  }
  if (suffix === 'P.M.') {
    return dayjs().get('hour') > Number(12 + time.split(':')[0]);
  }
};
