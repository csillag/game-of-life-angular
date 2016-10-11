import * as React from 'react';
import SyntheticEvent = __React.SyntheticEvent;
const NumericInput = require('react-numeric-input');

interface ControlActions {
    evolve():void;
    reset():void;
    setWidth(value:number):void;
    setHeight(value:number):void;
}

interface ControlProps {
    width: number;
    height: number;
    actions: ControlActions;
}

export class Controls extends React.Component<ControlProps,{}> {

    static propTypes: React.ValidationMap<ControlProps> = {
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
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

    protected onWidthChange(value:number) {
        this.props.actions.setWidth(value);
    }

    protected onHeightChange(value:number) {
        this.props.actions.setHeight(value);
    }

    protected renderWidth() {
        return (<NumericInput
            className="grid-size"
            min={10}
            max={20}
            value={this.props.width}
            onChange={this.onWidthChange.bind(this)}
        />)
    }

    protected renderHeight() {
        return (<NumericInput
            className="grid-size"
            min={10}
            max={20}
            value={this.props.width}
            onChange={this.onHeightChange.bind(this)}
        />)
    }

    render() {
        return (<div id="controls">
            { this.renderEvolve() }
            { this.renderReset() }
            <span>Width:</span>
            { this.renderWidth() }
            <span>Height:</span>
            { this.renderHeight() }
        </div>);
    }

}
