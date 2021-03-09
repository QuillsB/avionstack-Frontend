import { connect } from 'react-redux';

import Dashboard, { StateProps, DispatchProps } from 'components/dashboard/Dashboard';
import { StateType } from 'types/ReducersType';

import { loadFlightData } from 'actions/DashboardActions';

const mapStateToProps = (state: StateType): StateProps => ({
  flightData: state.dashboardState.flightData,
  flightDataStatus: state.dashboardState.flightDataStatus,
});

const mapDispatchToProps: DispatchProps = {
  loadFlightData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);