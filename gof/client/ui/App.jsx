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
                <p>This is just a technology experiment, playing with <a target="_bland" href="https://www.meteor.com/">Meteor</a> and <a target="_blank" href="https://facebook.github.io/react/">React</a>.
                See the source <a target="_bland" href="https://github.com/csillag/game-of-life">on Github</a>.</p>
                <p>This is a cellular automaton. You can click at the cells in the grid to create/destroy life, or click the "Evolve!" button to apply the automatic rules.</p>

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
