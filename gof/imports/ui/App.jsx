import React, { Component } from 'react';

import { LifeData } from '../data/LifeData';
import { SimpleLifeData } from '../data/SimpleLifeData';
import { CellGrid } from './CellGrid';

export default class App extends Component {

    componentWillMount() {
        const life = new SimpleLifeData(3, 3);
        life.set(0, 0, true);
        life.set(1, 0, true);
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

            <CellGrid grid={this.state.life} />
      </div>
    );
  }
}
