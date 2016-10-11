import { LifeData } from './LifeData';

// A naive implementation of the data store for the cellular automaton,
// also allowing direct manipulation of the data.
export class SimpleLifeData implements LifeData {
    
    protected width:number;
    protected height:number;
    protected data:boolean[][];

    public getWidth():number {
        return this.width;
    }

    public getHeight():number {
        return this.height;
    }

    public isAlive(x:number, y:number):boolean {
        return this.data[x][y];
    }

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.data = [];
        for (let x = 0; x < width; x++) {
            this.data.push(new Array<boolean>(height));
        }
    }
    
    public set(x:number, y:number, alive:boolean) {
        this.data[x][y] = alive;
    }
    
}
