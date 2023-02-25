import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/booking/action";
import { vector1, vector3, fram } from "../assets/img/images";
const BookingForm = () => {
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [person, setPerson] = useState("");
  const [ticket, setTicket] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(1);

  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);

  const handelSubmit = (e) => {
    e.preventDefault();

    const booking = {
      destinationFrom: destinationFrom,
      destinationTo: destinationTo,
      date: date,
      person: person,
      ticket: ticket,
      id: id,
    };
    dispatch(addBooking(booking));
    setDestinationFrom("");
    setDestinationTo("");
    setDate("");
    setPerson("");
    setTicket("");
  };
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handelSubmit}>
          {/* From  */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={fram} alt="" />

              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                value={destinationFrom}
                onChange={(e) => setDestinationFrom(e.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* To  */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={fram} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                value={destinationTo}
                onChange={(e) => setDestinationTo(e.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              class="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div class="flex flex-row">
              <img src={vector1} alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            className="addCity"
            type="submit"
            id="lws-addCity"
            onClick={() => setId((prev) => prev + 1)}
            disabled={booking.length >= 3}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
