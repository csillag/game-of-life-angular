import * as React from 'react';
import * as classNames from 'classnames';

import { LifeData } from '../data/LifeData';

interface LifeCellProps {
    data: LifeData;
    x: number;
    y: number;
}

// This react component displays one cell in the grid.
export class LifeCell extends React.Component<LifeCellProps,{}> {

    static propTypes: React.ValidationMap<LifeCellProps> = {
        data: React.PropTypes.object.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
    };

    private onClick() {
        console.log("Clicked on cell (",
                    this.props.x, ";",
                    this.props.y, ")"
        );
    }

    public render() {

        const populated = this.props.data.isPopulated(
            this.props.x, this.props.y
        );
        const classes = classNames({
            "cell": true,
            "alive": populated
        });
        return <td
            className={classes}
            onClick={this.onClick.bind(this)}
        />;
    }
}
