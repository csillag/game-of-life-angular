/*
  This file is the main hub of the application.
  Contents:
    - The reducer function (executing the actions)
    - All the helper functions used by the reducer function
    - The declaration of the store
*/

import { Store, createStore } from 'redux';

import { LifeState } from './LifeState';
import { Action, SET_SIZE, RESET, EVOLVE, SWITCH_POPULATED } from './actions';
import { getChanges } from './engine';

// Change a cell in the grid, if the coordinates are withing the limits
function change(state:LifeState, x:number, y:number) {
    if ((x >= 0) && (x <= state.size) && (y >= 0) && (y < state.size)) {
        state.space[x][y] = !state.space[x][y];
    }
}

// Draw the "glider" pattern at the grid
function addGlider(state:LifeState, x:number, y:number) {
    change(state, x+0 ,y+2);
    change(state, x+1, y+2);
    change(state, x+2, y+2);
    change(state, x+2, y+1);
    change(state, x+1, y+0);
}

// Creates a 2-dimenstional array of booleans
function getEmptyGrid(size:number):boolean[][] {
    const result = [];
    for (let x = 0; x < size; x++) {
        result.push(new Array<boolean>(size));
    }
    return result;
}

// Get the initial state of the app
function getInitialState():LifeState {
    const size = 10;
    const result:LifeState = {
        size,
        space:getEmptyGrid(size)
    }
    addGlider(result, 1, 1);
    return result;
}

// Copy a grid
function copy(state):LifeState {
    return {
        size: state.size,
        space: state.space.map((col) => col.slice())
    }
}

// Create a cropped copy of the original grid
function crop(state, size:number):LifeState {
    return {
        size,
        space: state.space.filter((_, index) => index < size).map((col) => col.slice(0,size))
    }
}

// Create an expanded copy of the original grid
function expand(state, size:number):LifeState {
    const sizeInc = size - state.size;
    const colPadding = new Array<boolean>(sizeInc);
    const result:LifeState = {
        size,
        space: state.space.map((c) => c.concat(colPadding))
    }
    for (let i = 0; i < sizeInc; i++) {
        result.space.push(new Array<boolean>(size));
    }
    return result;
}

// The Redux reducer function
function game(state:LifeState, action:Action) {
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

// The Redux store, storing the state of our application
export const store:Store<LifeState> = createStore(game, getInitialState());
