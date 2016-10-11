import { Session } from 'meteor/session';

import { LifeData } from './LifeData';

// A reactive implementation of the data store for the cellular automaton,
// based on Meteor's Session.
export class SessionLifeData implements LifeData {

    protected widthKey = "life-grid-width";
    protected heightKey = "life-grid-heifht";

    public getWidth():number {
        return Session.get(this.widthKey);
    }

    public setWidth(value:number) {
        Session.set(this.widthKey, value);
    }

    public getHeight():number {
        return Session.get(this.heightKey);
    }

    public setHeight(value:number) {
        Session.set(this.heightKey, value);
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

    public clear() {
        const width = this.getWidth();
        const height = this.getHeight();
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.setPopulated(x, y, false);
            }
        }
    }

    constructor(width: number, height: number, reset?: boolean) {
        this.setWidth(width);
        this.setHeight(height);
        if (reset) {
            this.clear();
        }
    }
}
