export interface LifeData {
    getWidth(): number;
    getHeight(): number;
    isAlive(x:number, y:number):boolean;
}
