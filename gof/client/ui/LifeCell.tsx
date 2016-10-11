import * as React from 'react';
import * as classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import { LifeData } from '../data/LifeData';

interface LifeCellProps {
    data: LifeData;
    x: number;
    y: number;
}

interface _LifeCellProps extends LifeCellProps {
    populated: boolean;
}

// This presentational react component displays one cell in the grid.
class LifeCell extends React.Component<_LifeCellProps,{}> {

    static propTypes: React.ValidationMap<_LifeCellProps> = {
        data: React.PropTypes.object.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
        populated: React.PropTypes.bool.isRequired,
    };

    private onClick() {
        this.props.data.switchPopulated(this.props.x, this.props.y);
    }

    public render() {

        const classes = classNames({
            "cell": true,
            "alive": this.props.populated
        });
        return <td
            className={classes}
            onClick={this.onClick.bind(this)}
        />;
    }
}

// This container react component acquires the "populated" prop for LifeCell
export const LifeCellContainer = createContainer<LifeCellProps>((props:LifeCellProps) => {
    return {
        data: props.data,
        x: props.x,
        y: props.y,
        populated: props.data.isPopulated(props.x, props.y),
    };
}, LifeCell);
