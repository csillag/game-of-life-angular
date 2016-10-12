import * as React from 'react';
const NumericInput = require('react-numeric-input');

export interface ControlsActions {
    evolve():void;
    reset():void;
    setSize(value:number):void;
}

export interface ControlsProps {
    size?: number;
    actions?: ControlsActions;
}

export class Controls extends React.Component<ControlsProps,{}> {

    static propTypes: React.ValidationMap<ControlsProps> = {
        size: React.PropTypes.number.isRequired,
        actions: React.PropTypes.object.isRequired,
    };

    protected renderEvolve() {
        return (<button onClick={this.props.actions.evolve}>
            Evolve!
        </button>)
    }

    protected renderReset() {
        return (<button onClick={this.props.actions.reset}>
            Reset
        </button>)
    }

    protected onSizeChange(value:number) {
        this.props.actions.setSize(value);
    }

    protected renderSize() {
        return (<NumericInput
            className="grid-size"
            min={3}
            max={20}
            value={this.props.size}
            onChange={this.onSizeChange.bind(this)}
        />)
    }

    render() {
        return (<div id="controls">
            { this.renderEvolve() }
            { this.renderReset() }
            <span>Size:</span>
            { this.renderSize() }
        </div>);
    }

}
