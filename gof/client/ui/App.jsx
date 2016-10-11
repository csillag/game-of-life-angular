import React, { Component } from 'react';

import { LifeData } from '../data/LifeData';
import { evolve } from '../data/engine';
import { SessionLifeData } from '../data/SessionLifeData';
import { CellGrid } from './CellGrid';

export default class App extends Component {

    componentWillMount() {
        this.reset();
    }

    reset() {
        // Create a new space, and manually initiate it
        const life = new SessionLifeData(10, 10, true);
        life.setPopulated(1, 2, true);
        life.setPopulated(2, 2, true);
        life.setPopulated(3, 2, true);
        life.setPopulated(3, 1, true);
        life.setPopulated(2, 0, true);

        // Put the created data into the component's state
        this.setState({
            life,
        });
    }

    onReset() {
        this.reset();
    }

    onEvolve() {
        evolve(this.state.life);
    }
    
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Game of Life</h1>
                </header>

                <CellGrid data={this.state.life} />

                <div id="controls">
                    <button onClick={this.onEvolve.bind(this)}>
                        Evolve!
                    </button>
                    <button onClick={this.onReset.bind(this)}>
                        Reset
                    </button>
                </div>

            </div>
        );
    }
}
