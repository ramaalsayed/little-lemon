import React from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <div className="container">
      <h1>Book a Table</h1>
      <BookingForm />
      {/* Add any additional content below the form, if needed */}
      <p>Thank you for your reservation!</p>
    </div>
  );
}

export default BookingPage;
