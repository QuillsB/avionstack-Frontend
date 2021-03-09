import React, { Component } from 'react';

import FlightCard from 'components/flightCard/FlightCard';

import { FlightData, PaginationContent } from 'types/FlightType';
import Status from 'types/StatusType';

import 'styles/Dashboard.css';

export interface DispatchProps {
  loadFlightData: Function;
}

export interface StateProps {
  flightData: {
    pagination: PaginationContent,
    data: FlightData[],
  };
  flightDataStatus: Status;
}

interface State {}

type Props = {} & DispatchProps & StateProps;

class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { loadFlightData } = this.props;

    loadFlightData();
  }

  renderContentPart() {
    const { flightData: { data } } = this.props;

    return data.map((item: FlightData, index) => (
      <div className="flightCardContainer" key={index}>
        <FlightCard flight={item} />
      </div>
    ));
  }

  render() {
    return (
      <>
        <div className="dashboardContainer">
          <div className="filterMenuContainer"></div>
          <div className="dashboardContentContainer">
            <div className="contentPart">
              {this.renderContentPart()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
