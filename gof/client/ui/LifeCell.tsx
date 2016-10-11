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

// This react component displays one cell in the grid.
class _LifeCell extends React.Component<_LifeCellProps,{}> {

    static propTypes: React.ValidationMap<_LifeCellProps> = {
        data: React.PropTypes.object.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
        populated: React.PropTypes.bool.isRequired,
    };

    private onClick() {
        this.props.data.setPopulated(this.props.x, this.props.y,
                                     !this.props.populated);
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

export const LifeCell = createContainer<LifeCellProps>((props:LifeCellProps) => {
    return {
        data: props.data,
        x: props.x,
        y: props.y,
        populated: props.data.isPopulated(props.x, props.y),
    };
}, _LifeCell);
