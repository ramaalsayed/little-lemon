import React, { useState } from "react";

function BookingForm({ availableTimes, onDateChange }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00"); // Set default time
  const [guestCount, setGuestCount] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log({ reservationDate, reservationTime, guestCount, occasion });
  };

  return (
    <form
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={(e) => {
          setReservationDate(e.target.value);
          onDateChange(e.target.value); // Dispatch date change to update times
        }}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={reservationTime}
        onChange={(e) => setReservationTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      {/* ... rest of the form */}
    </form>
  );
}

export default BookingForm;
