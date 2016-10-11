import { createContainer } from 'meteor/react-meteor-data';

import { LifeData } from '../data/LifeData';
import { LifeCell } from './LifeCell';

// This container react component handles data access for one LifeCell
interface LifeCellContainerProps {
    data: LifeData;
    x: number;
    y: number;
}

export const LifeCellMeteorContainer = createContainer<LifeCellContainerProps>((props:LifeCellContainerProps) => {
    return {
        populated: props.data.isPopulated(props.x, props.y),
        actions: {
            switch: () => { props.data.switchPopulated(props.x, props.y); }
        }
    };
}, LifeCell);
