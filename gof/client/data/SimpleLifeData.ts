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

    public setWidth(value:number) {
        this.width = value;
        this.allocate();
    }

    public getHeight():number {
        return this.height;
    }

    public setHeight(value:number) {
        this.height = value;
        this.allocate();
    }

    public isPopulated(x:number, y:number):boolean {
        return !!this.space[x][y];
    }

    protected allocate() {
        this.space = [];
        for (let x = 0; x < this.width; x++) {
            this.space.push(new Array<boolean>(this.height));
        }
    }

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.allocate();

    }
    
    public setPopulated(x:number, y:number, populated:boolean) {
        this.space[x][y] = populated;
    }

    public switchPopulated(x:number, y:number) {
        this.space[x][y] = !this.space[x][y];
    }

    public clear() {
        this.allocate();
    }
    
}
