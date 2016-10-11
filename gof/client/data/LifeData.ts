
// Public interface for querying the state of the cellular automaton
export interface LifeData {
    getWidth(): number;
    getHeight(): number;
    isPopulated(x:number, y:number):boolean;
}
