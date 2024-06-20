import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get('http://calendar-backend:8080/events');
    setEvents(response.data);
  };

  const addEvent = async () => {
    await axios.post('http://calendar-backend:8080/events', { description: event });
    setEvent('');
    fetchEvents();
  };

  return (
      <div>
        <h1>Calendar</h1>
        <input
            type="text"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
        />
        <button onClick={addEvent}>Add Event</button>
        <ul>
          {events.map((event, index) => (
              <li key={index}>{event.description}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
