
// Public interface for interacting with the state of the cellular automaton
export interface LifeData {
    getWidth(): number;
    setWidth(value:number):void;
    getHeight(): number;
    setHeight(value:number):void;
    isPopulated(x:number, y:number):boolean;
    setPopulated(x:number, y:number, value: boolean):void;
    switchPopulated(x:number, y:number):void;
    clear():void;
}
