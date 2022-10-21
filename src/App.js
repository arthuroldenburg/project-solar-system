import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <PlanetCard />
        <Missions />
      </>
    );
  }
}

export default App;
