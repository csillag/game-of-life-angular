import * as React from 'react';
import * as classNames from 'classnames';

interface LifeCellProps {
    populated: boolean;
    x: number;
    y: number;
}

// This react component displays one cell in the grid.
export class LifeCell extends React.Component<LifeCellProps,{}> {

    static propTypes: React.ValidationMap<LifeCellProps> = {
        populated: React.PropTypes.bool.isRequired,
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
