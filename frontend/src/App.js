import React, { useState } from 'react';
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';

function App() {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div className="App">
      <h1>Calendar App</h1>
      <EventForm />
      <button onClick={() => setShowEvents(!showEvents)}>
        {showEvents ? 'Hide Events' : 'Show Events'}
      </button>
      {showEvents && <Calendar />}
    </div>
  );
}

export default App;