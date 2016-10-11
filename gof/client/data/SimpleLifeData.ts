import { LifeData } from './LifeData';

// A naive implementation of the data store for the cellular automaton,
// also allowing direct manipulation of the data.
export class SimpleLifeData implements LifeData {
    
    protected width:number;
    protected height:number;
    protected space:boolean[][];

    public getWidth():number {
        return this.width;
    }

    public getHeight():number {
        return this.height;
    }

    public isPopulated(x:number, y:number):boolean {
        return this.space[x][y];
    }

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.space = [];
        for (let x = 0; x < width; x++) {
            this.space.push(new Array<boolean>(height));
        }
    }
    
    public setPopulated(x:number, y:number, populated:boolean) {
        this.space[x][y] = populated;
    }
    
}
