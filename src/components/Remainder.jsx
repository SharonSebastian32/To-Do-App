import React, { useState } from "react";
import "./Remainder.css";

const Remainder = () => {
  const [reminder, setRemainder] = useState([]);
  const [newRemainder, setnewRemainder] = useState("");

  const handleInputChange = (e) => {
    setnewRemainder(e.target.value);
  };
  const handleSubmit = () => {
    if (newRemainder.trim()) {
      setRemainder([...reminder, newRemainder]);
      setnewRemainder("");
    }
  };

  const handleDelete = (index) => {
    setRemainder(reminder.filter((item, itemIndex) => itemIndex !== index));
  };
  return (
    <div className="container">
      <h1>Reminder App</h1>

      <div className="input-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Set a reminder...."
          onChange={handleInputChange}
          value={newRemainder}
          required
        />
        <button onClick={handleSubmit}>Add Reminder</button>
      </div>
      {reminder.length > 0 ? (
        <ul className="reminder-list">
          {reminder.map((reminder, index) => (
            <li key={index}>
              {reminder}
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reminders found 🚮</p>
      )}
    </div>
  );
};

export default Remainder;
