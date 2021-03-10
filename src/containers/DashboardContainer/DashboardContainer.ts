import { connect } from 'react-redux';

import Dashboard, { StateProps, DispatchProps } from 'components/dashboard/Dashboard';
import { StateType } from 'types/ReducersType';

import { loadFlightData } from 'actions/DashboardActions';
import { loadAirlinesData } from 'actions/FilterActions';

const mapStateToProps = (state: StateType): StateProps => ({
  flightData: state.dashboardState.flightData,
  flightDataStatus: state.dashboardState.flightDataStatus,
  airlinesData: state.filterState.airlinesData,
  airlinesDataStatus: state.filterState.airlinesDataStatus,
});

const mapDispatchToProps: DispatchProps = {
  loadFlightData,
  loadAirlinesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);