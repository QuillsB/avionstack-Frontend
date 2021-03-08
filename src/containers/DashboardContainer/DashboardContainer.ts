import { connect } from 'react-redux';

import Dashboard, { StateProps, DispatchProps } from 'components/dashboard/Dashboard';
import { StateType } from 'types/ReducersType';

const mapStateToProps = (state: StateType): StateProps => ({

});

const mapDispatchToProps: DispatchProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);