import * as React from 'react';

interface LifeCellProps {
    alive: boolean;
}

export class LifeCell extends React.Component<LifeCellProps,{}> {
    public render() {
        if (this.props.alive) {
            return <td>Alive</td>;
        } else {
            return <td>Dead</td>;
        }
    }
}
