
// Public interface for querying the state of the cellular automaton
export interface LifeData {
    getWidth(): number;
    getHeight(): number;
    isAlive(x:number, y:number):boolean;
}
