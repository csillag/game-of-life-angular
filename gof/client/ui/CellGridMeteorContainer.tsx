import { createContainer } from 'meteor/react-meteor-data';

import { LifeData } from '../data/LifeData';
import { CellGrid } from './CellGrid';

// This container react component handles data access for the CellGrid
interface CellGridContainerProps {
    data: LifeData;
}

export const CellGridMeteorContainer = createContainer<CellGridContainerProps>((props:CellGridContainerProps) => {
    return {
        width: props.data.getWidth(),
        height: props.data.getHeight()
    };
}, CellGrid);
;