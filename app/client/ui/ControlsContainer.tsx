import { connect } from 'react-redux'

import { LifeState } from '../data/LifeState';
import { setSize, reset, evolve } from '../data/actions';
import { Controls, ControlsProps, ControlsActions } from './Controls';

function mapStateToProps(state:LifeState):ControlsProps {
    return { size: state.size }
}

function mapDispatchToProps(dispatch):ControlsProps {
    const actions:ControlsActions = {
        reset: () => { dispatch(reset()) },
        evolve: () => { dispatch(evolve()) },
        setSize: (value:number) => { dispatch(setSize(value)) },
    };
    return { actions }
}

export const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
