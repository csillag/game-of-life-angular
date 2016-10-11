import * as React from 'react';
import * as classNames from 'classnames';

interface LifeCellProps {
    populated: boolean;
}

// This react component displays one cell in the grid.
export class LifeCell extends React.Component<LifeCellProps,{}> {
    public render() {
        const classes = classNames({
            "cell": true,
            "alive": this.props.populated
        });
        return <td className={classes} />;
    }
}
