import React, { useState } from 'react';
import axios from 'axios';

function EventForm({ onEventCreated }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting event to:', `${API_URL}/api/events`);
    try {
      const response = await axios.post(`${API_URL}/api/events`, { title, date });
      console.log('Event created:', response.data);
      setTitle('');
      setDate('');
      alert('Event created successfully!');
      if (onEventCreated) {
        onEventCreated();
      }
    } catch (error) {
      console.error('Error creating event:', error);
      if (error.response) {
        alert(`Failed to create event: ${error.response.data}`);
      } else if (error.request) {
        alert('No response received from the server. Please check your network connection.');
      } else {
        alert('Error setting up the request. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;