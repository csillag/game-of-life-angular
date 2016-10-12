import { connect } from 'react-redux'

import { LifeState } from '../data/LifeState';
import { CellGrid, CellGridProps } from './CellGrid';

function mapStateToProps(state:LifeState):CellGridProps {
    return { size: state.size }
}

export const CellGridContainer = connect(mapStateToProps)(CellGrid);
