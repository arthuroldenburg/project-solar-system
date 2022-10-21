import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    return (
      <div data-testid="planet-card">
        <p>{ planetName }</p>
        <img src={ planetImage } alt="Planeta {planetName}" />
      </div>
    );
  }
}

export default PlanetCard;
