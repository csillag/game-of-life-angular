import React, { Component } from 'react';

import { LifeData } from '../data/LifeData';
import { SessionLifeData } from '../data/SessionLifeData';
import { CellGrid } from './CellGrid';

export default class App extends Component {

    componentWillMount() {
        // Create a new space, and manually initiate it
        const life = new SessionLifeData(10, 10);
        life.setPopulated(0, 0, true);
        life.setPopulated(1, 0, true);

        // Put the created data into the component's state
        this.setState({
            life,
        });
    }
    
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Game of Life</h1>
                </header>

            <CellGrid data={this.state.life} />
      </div>
    );
  }
}
