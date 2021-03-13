import React, { Component } from 'react';

import { FilterParams } from 'types/FilterParamsType';
import { PaginationContent } from 'types/FlightType';

import 'styles/Pagination.css';

export interface DispatchProps {
  loadFlightData: Function;
}

export interface StateProps {
  filterParams: FilterParams;
  paginationData: PaginationContent;
}

interface State {
  actualPage: number;
  actualAirline: string;
}

type Props = {} & DispatchProps & StateProps;

class Pagination extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actualPage: 1,
      actualAirline: '',
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { filterParams: { airline_name } } = nextProps;
    const { actualAirline } = prevState;

    if (airline_name) {
      if (airline_name !== actualAirline) {
        return {
          actualPage: 1,
          actualAirline: airline_name,
        };
      }
      return null;
    }
    return null;
  }

  onSelectPage = (page: number) => {
    const { loadFlightData, filterParams, paginationData: { limit } } = this.props;

    this.setState({ actualPage: page });
    loadFlightData({ ...filterParams, offset: ((page - 1) * limit) });
  };

  renderPageSelection() {
    const { actualPage } = this.state;
    const { paginationData: { limit, total } } = this.props;

    const lastPage = (total / limit) > 100 ? 100 : Math.round(total / limit);

    return (
      <div className="PaginationSelector">
        {actualPage > 1 &&
          <>
            <div className="PageSelection" onClick={() => this.onSelectPage(1)}>
              <p className="Selector">{"<<"}</p>
            </div>
            <div className="PageSelection" onClick={() => this.onSelectPage(actualPage - 1)}>
              <p className="Selector">{actualPage - 1}</p>
            </div>
          </>
        }
        <div className="PageSelection PageSelected">
          <p className="Selector">{actualPage}</p>
        </div>
        {lastPage > actualPage &&
          <>
            <div className="PageSelection" onClick={() => this.onSelectPage(actualPage + 1)}>
              <p className="Selector">{actualPage + 1}</p>
            </div>
            <div className="PageSelection" onClick={() => this.onSelectPage(lastPage)}>
              <p className="Selector">{">>"}</p>
            </div>
          </>
        }
      </div>
    );
  }

  render() {
    const { paginationData } = this.props;

    console.log(paginationData);
    return (
      <div className="PaginationContainer">
        {this.renderPageSelection()}
      </div>
    );
  }
}

export default Pagination;
