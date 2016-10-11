import * as React from 'react';

interface LifeCellProps {
    populated: boolean;
}

// This react component displays one cell in the grid.
export class LifeCell extends React.Component<LifeCellProps,{}> {
    public render() {
        if (this.props.populated) {
            return <td>Alive</td>;
        } else {
            return <td>Dead</td>;
        }
    }
}
