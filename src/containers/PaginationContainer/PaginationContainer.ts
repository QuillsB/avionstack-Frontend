import { connect } from 'react-redux';

import Pagination, { StateProps, DispatchProps } from 'components/pagination/Pagination';
import { StateType } from 'types/ReducersType';

import { loadFlightData } from 'actions/DashboardActions';

const mapStateToProps = (state: StateType): StateProps => ({
  filterParams: state.dashboardState.flightParams,
  paginationData: state.dashboardState.pagination, 
});

const mapDispatchToProps: DispatchProps = {
  loadFlightData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
