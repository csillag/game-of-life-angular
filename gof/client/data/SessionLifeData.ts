import { Session } from 'meteor/session';

import { LifeData } from './LifeData';

// A reactive implementation of the data store for the cellular automaton,
// based on Meteor's Session.
export class SessionLifeData implements LifeData {

    protected width:number;
    protected height:number;

    public getWidth():number {
        return this.width;
    }

    public getHeight():number {
        return this.height;
    }

    protected getKey(x:number, y:number):string {
        return "life-cell-" + x + "-" + y;
    }

    public isPopulated(x:number, y:number):boolean {
        return !!Session.get(this.getKey(x, y));
    }

    public setPopulated(x:number, y:number, populated:boolean) {
        Session.set(this.getKey(x, y), populated);
    }

    public switchPopulated(x:number, y:number) {
        const key = this.getKey(x, y);
        Session.set(key, !Session.get(key));
    }

    constructor(width: number, height: number, reset?: boolean) {
        this.width = width;
        this.height = height;
        if (reset) {
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    this.setPopulated(x, y, false);
                }
            }
        }
    }
}
