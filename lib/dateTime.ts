import moment from "moment";
export const dateFormat = (date: string) => {
  return moment(date).format("MMMM Do YYYY, h:mm a");
};
