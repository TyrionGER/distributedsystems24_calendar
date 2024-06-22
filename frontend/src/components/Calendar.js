import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Calendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    console.log('Fetching events from:', `${API_URL}/api/events`);
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/events`);
      console.log('Received events:', response.data);
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to fetch events. Please try again.');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.title} - {event.date}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Calendar;