import React, { Component } from 'react';

import { apiKey } from 'constants/api';

import FlightCard from 'components/flightCard/FlightCard';
import FilterDashboard from 'components/filterDashboard/FilterDashboard';
import Spinner from 'components/fragment/Spinner';
import Pagination from 'containers/PaginationContainer/PaginationContainer';

import { FlightData, PaginationContent } from 'types/FlightType';
import Status from 'types/StatusType';

import logo from 'assets/logo.png';

import 'styles/Dashboard.css';

export interface DispatchProps {
  loadFlightData: Function;
  loadAirlinesData: Function;
}

export interface StateProps {
  flightData: {
    pagination: PaginationContent,
    data: FlightData[],
  };
  flightDataStatus: Status;
  airlinesData: string[];
  airlinesDataStatus: Status;
}

interface State {
  access_key: string;
  limit: number;
  offset: number;
  flight_status: string;
  airline_name: string;
  time: string;
  lastUpdate: string;
}

type Props = {} & DispatchProps & StateProps;

class Dashboard extends Component<Props, State> {
  intervalID: any;
  updateID: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      access_key: apiKey,
      limit: 100,
      offset: 0,
      flight_status: '',
      airline_name: '',
      time: new Date().toLocaleString('en-US'),
      lastUpdate: new Date().toLocaleString('en-US'),
    };
    this.intervalID = 0;
    this.updateID = 0;
  }

  componentDidMount() {
    const { loadFlightData, loadAirlinesData } = this.props;
    const { access_key, limit, offset, flight_status, airline_name } = this.state;

    loadFlightData({
      access_key,
      limit,
      offset,
      flight_status,
      airline_name,
    });
    loadAirlinesData();
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
    this.updateID = setInterval(
      () => this.updateData(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearInterval(this.updateID);
  }

  tick() {
    this.setState({ time: new Date().toLocaleString('en-US') });
  }

  updateData() {
    this.onSubmitParams();
    this.setState({ lastUpdate: new Date().toLocaleString('en-US') });
  }

  onParamsChange = (value: string|number, name: string) => {
    if (Object.prototype.hasOwnProperty.call(this.state, name)) {
      this.setState(({ [name]: value === null ? "" : value } as unknown) as Pick<State, keyof State>);
    }
  };

  onSubmitParams = () => {
    const { loadFlightData } = this.props;
    const { access_key, limit, offset, flight_status, airline_name } = this.state;
    
    loadFlightData({
      access_key,
      limit,
      offset,
      flight_status,
      airline_name,
    });
  };

  renderFilterPart() {
    const { airlinesData } = this.props;
    const { time, lastUpdate } = this.state;

    return (
      <div className="dashboardFilterContainer">
        <div className="dashboardTimersContainer">
          <p>{`Actual Time: ${time}`}</p>
          <p>{`Last Update: ${lastUpdate}`}</p>
        </div>
        <FilterDashboard
          airlines={airlinesData}
          onParamsChange={this.onParamsChange}
          onSubmitParams={this.onSubmitParams}
        />
      </div>
    );
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
    const { flightDataStatus } = this.props;

    return (
      <>
        <div className="dashboardContainer">
          <div className="filterMenuContainer">
            <div className="dashboardLogoContainer">
              <img src={logo} alt={"avionstack-logo"} className="dashboardLogo"/>
            </div>
            {this.renderFilterPart()}
          </div>
          <div className="dashboardContentContainer">
            <div className="contentPart">
              {flightDataStatus === Status.LOADING ? (
                <Spinner colorized/>
              ) : (
                this.renderContentPart()
              )}
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
