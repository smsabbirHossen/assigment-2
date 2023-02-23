import { ADDBOOKING, CANCELBOOKING } from "./actionType";
const initialBooking = {
  booking: [],
};
const bookingReducer = (state = initialBooking, action) => {
  switch (action.type) {
    case ADDBOOKING:
      return {
        ...state,
        booking: [...state.booking, action.payload],
      };
    case CANCELBOOKING:
      return {
        ...state,

        booking: [
          ...state.booking.filter((book) => book.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
export default bookingReducer;
