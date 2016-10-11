import { LifeData } from './LifeData';

class Coord {
    x: number;
    y: number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
}

// Naive implementation of the calculations for the cell automaton
export function evolve(data: LifeData) {
    // Let's cache these data
    const width = data.getWidth();;
    const height = data.getHeight();

    // We will collects the pending changes here
    const born:Coord[] = [];
    const died:Coord[] = [];

    // Go over all the cells
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const here = new Coord(x,y);

            // Is this cell current populated?
            let populated = data.isPopulated(x, y);

            // Determine the area where to count the neighbours
            const min_x = (x > 0) ? x-1 : 0;
            const max_x = (x < width) ? x+1 : x;
            const min_y = (y > 0) ? y-1 : 0;
            const max_y = (y < height) ? y+1 : y;

            // Count the neighbors within this area
            let friends = 0;
            for (let nx = min_x; nx <= max_x; nx++) {
                for (let ny = min_y; ny <= max_y; ny++) {
                    if ((nx != x) || (ny != y)) { // Isn't this the same cell
                        if (data.isPopulated(nx, ny)) {
                            friends += 1;
                        }
                    }
                }
            }

            // OK, now we have all the data, let's make
            // some decisions!
            if (populated) {
                if ((friends <= 1) || (friends >= 4)) {
                    // Each cell with one or no neighbors
                    //   dies, as if by solitude.
                    // Each cell with four or more neighbors dies,
                    //   as if by overpopulation.
                    died.push(here);
                }
                // Each cell with two or three neighbors survives.
            } else {
                if (friends == 3) {
                    // Each cell with three neighbors becomes populated.
                    born.push(here);
                }
            }
        }
    }

    // OK, now bring new new ones to life
    born.forEach((c) => {
        data.setPopulated(c.x, c.y, true);
    });

    // And terminate the ones on the death list
    died.forEach((c) => {
        data.setPopulated(c.x, c.y, false);
    });

}
