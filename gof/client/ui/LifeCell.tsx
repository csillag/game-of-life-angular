import * as React from 'react';
import * as classNames from 'classnames';

interface LifeCellActions {
    switch():void;
}

interface LifeCellProps {
    populated: boolean;
    actions: LifeCellActions;
}

// This presentational react component displays one cell in the grid.
export class LifeCell extends React.Component<LifeCellProps,{}> {

    static propTypes: React.ValidationMap<LifeCellProps> = {
        actions: React.PropTypes.object.isRequired,
        populated: React.PropTypes.bool.isRequired,
    };

    private onClick() {
        this.props.actions.switch();
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
