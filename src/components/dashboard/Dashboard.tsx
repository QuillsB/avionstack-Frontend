import React, { Component } from 'react';

import 'styles/Dashboard.css';

export interface DispatchProps {}

export interface StateProps {}

interface State {}

type Props = {} & DispatchProps & StateProps;

class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  renderTabsPart() {
    return (
      <div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="dashboardContainer">
          <div className="dashboardTabsContainer">
            {this.renderTabsPart()}
          </div>
          <p>Oui</p>
        </div>
      </>
    );
  }
}

export default Dashboard;
