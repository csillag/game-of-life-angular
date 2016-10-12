// Utility functions, dealing with the data for the cell grid

import { LifeState } from './LifeState';

// Change a cell in the grid, if the coordinates are withing the limits
export function change(state:LifeState, x:number, y:number) {
    if ((x >= 0) && (x <= state.size) && (y >= 0) && (y < state.size)) {
        state.space[x][y] = !state.space[x][y];
    }
}

// Draw the "glider" pattern at the grid
export function addGlider(state:LifeState, x:number, y:number) {
    change(state, x+0 ,y+2);
    change(state, x+1, y+2);
    change(state, x+2, y+2);
    change(state, x+2, y+1);
    change(state, x+1, y+0);
}

// Creates a 2-dimenstional array of booleans
export function getEmptyGrid(size:number):boolean[][] {
    const result = [];
    for (let x = 0; x < size; x++) {
        result.push(new Array<boolean>(size));
    }
    return result;
}

// Copy a grid
export function copy(state):LifeState {
    return {
        size: state.size,
        space: state.space.map((col) => col.slice())
    }
}

// Create a cropped copy of the original grid
export function crop(state, size:number):LifeState {
    return {
        size,
        space: state.space.filter((_, index) => index < size).map((col) => col.slice(0,size))
    }
}

// Create an expanded copy of the original grid
export function expand(state, size:number):LifeState {
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
