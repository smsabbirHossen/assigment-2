import React from "react";
import "./assets/css/styles.css";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <BookingForm />
      <BookingsList />
    </Provider>
  );
};

export default App;
