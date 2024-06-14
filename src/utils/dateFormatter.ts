import dayjs from "dayjs";

export const dateFormatter = (date: string) => {
  return dayjs(date).format('DD MMMM, YYYY');
}