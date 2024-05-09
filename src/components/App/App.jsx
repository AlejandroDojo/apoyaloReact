import React from 'react';
import './App.css';
import PersonCard from '../PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name="Alex" lastName="Miller" age="21" hairColor="Brown"/>
      <PersonCard name="Maria" lastName="Perez" age="23" hairColor="Yellow"/>
      <PersonCard name="Juan" lastName="Martinez" age="20" hairColor="Black"/>
      <PersonCard name="Jane" lastName="Doe" age="80" hairColor="Brown"/>
    </div>
  );
}

export default App;
