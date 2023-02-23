import { ADDBOOKING, CANCELBOOKING } from "./actionType";
export const addBooking = (value) => {
  return {
    type: ADDBOOKING,
    payload: value,
  };
};
export const cancelBooking = (value) => {
  return {
    type: CANCELBOOKING,
    payload: value,
  };
};
