import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';
import { CellGridContainer } from './CellGridContainer';
import { ControlsContainer } from './ControlsContainer';

export class App extends React.Component<{}, {}> {

    public render() {
        return (<Provider store={store}>
            <div className="container">
                <header>
                    <h1>Game of Life</h1>
                </header>
                <p>This is just a technology experiment, playing with <a target="_bland" href="https://www.meteor.com/">Meteor</a>, <a target="_blank" href="https://facebook.github.io/react/">React</a> and <a target="_blank" href="http://redux.js.org/">Redux</a>.
                See the source <a target="_bland" href="https://github.com/csillag/game-of-life">on Github</a>.</p>
                <p>This is a cellular automaton. You can click at the cells in the grid to create/destroy life, or click the "Evolve!" button to apply the automatic rules.</p>


                <ControlsContainer />
                <CellGridContainer />
            </div>
        </Provider>);
    }
}
