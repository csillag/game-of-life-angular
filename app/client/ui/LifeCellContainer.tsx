/*
 This is a container component around LifeCell.

 This component is responsible for subscribing to the Redux state (occupied?),
 and for dispatching the required actions (when clicking).
 */
import { connect } from 'react-redux'

import { LifeState } from '../data/LifeState';
import { setPopulated } from '../data/actions';
import { LifeCell, LifeCellProps, LifeCellActions } from './LifeCell';

interface LifeCellContainerProps {
    x: number;
    y: number;
}

function mapStateToProps(
    state:LifeState,
    props:LifeCellContainerProps
):LifeCellProps {
    return {
        populated: !!state.space[props.x][props.y],
    }
}

function mapDispatchToProps(
    dispatch,
    props:LifeCellContainerProps
):LifeCellProps {
    const actions:LifeCellActions = {
        "switch": () => {
            dispatch(setPopulated(props.x, props.y));
        }
    };
    return { actions }
}

export const LifeCellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LifeCell);
