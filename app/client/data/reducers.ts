// The file containes Redux reducer function

import { LifeState } from './LifeState';
import { Action, SET_SIZE, RESET, EVOLVE, SWITCH_POPULATED } from './actions';
import { copy, crop, expand, change, getEmptyGrid, addGlider } from './util';
import { getChanges } from './engine';

// Get the initial state of the app
export function getInitialState():LifeState {
    const size = 10;
    const result:LifeState = {
        size,
        space:getEmptyGrid(size)
    }
    addGlider(result, 1, 1);
    return result;
}

// Get the next state of the app, after a given action
export function game(state:LifeState, action:Action) {
    //    console.log("Executing action", action);
    let next:LifeState;
    
    switch (action.type) {
    case SET_SIZE:
        if (action.value < state.size) {
            return crop(state, action.value);
        } else if (action.value > state.size) {
            return expand(state, action.value);
        } else {
            return state;
        }
    case RESET:
        next = {
            size: state.size,
            space: getEmptyGrid(state.size)
        }
        addGlider(next, 1, 1);
        return next;
    case SWITCH_POPULATED:
        next = copy(state);
        change(next, action.position.x, action.position.y);
        return next;
    case EVOLVE:
        next = copy(state); // First create a clean copy
        // Then collect the changes, and for each change, flip the relevant cell
        getChanges(state).forEach((c) => change(next, c.x, c.y));
        return next;
    default:
        return state;
    }
}
