
// === Our store supports the following actions ===

export const SWITCH_POPULATED = "SWITCH_POPULATED";
export const SET_SIZE = "SET_SIZE";
export const RESET = "RESET";
export const EVOLVE = "EVOLVE";

// Generic type to describe all actions
export interface Action {
    type: string,
    value?: number,
    position?: any,
}

// === Action generator functions ===

export function setSize(value:number):Action {
    return { type: SET_SIZE, value }
}

export function reset():Action {
    return { type: RESET }
}

export function evolve():Action {
    return { type: EVOLVE }
}

export function setPopulated(x:number, y:number):Action {
    return { type: SWITCH_POPULATED, position: {x, y} }
}
