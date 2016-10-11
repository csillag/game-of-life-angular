import * as React from 'react';

interface ControlActions {
    evolve():void;
    reset():void;
}

interface ControlProps {
    actions: ControlActions;
}

export class Controls extends React.Component<ControlProps,{}> {

    static propTypes: React.ValidationMap<ControlProps> = {
        actions: React.PropTypes.object.isRequired,
    };

    render() {
        return (
                <div id="controls">
                    <button onClick={this.props.actions.evolve}>
                        Evolve!
                    </button>
                    <button onClick={this.props.actions.reset}>
                        Reset
                    </button>
                </div>
        );
    }

}
