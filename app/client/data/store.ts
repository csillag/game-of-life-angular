// This file declared the Redux state store.

import { Store, createStore } from 'redux';

import { LifeState } from './LifeState';
import { game, getInitialState } from './reducers';

export const store:Store<LifeState> = createStore(game, getInitialState());
