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
}

type Props = {} & DispatchProps & StateProps;

class Pagination extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actualPage: 1,
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { paginationData: { offset, limit } } = nextProps;
    const { actualPage } = prevState;

    if (offset && limit) {
      if ((actualPage - 1) * limit !== offset) {
        return {
          actualPage: (offset / limit) + 1,
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

    return (
      <div className="PaginationSelector">
        {actualPage > 1 &&
          <div className="PageSelection" onClick={() => this.onSelectPage(actualPage - 1)}>
            <p className="Selector">{actualPage - 1}</p>
          </div>
        }
        <div className="PageSelection PageSelected">
          <p className="Selector">{actualPage}</p>
        </div>
        {(total / limit) > actualPage &&
          <div className="PageSelection" onClick={() => this.onSelectPage(actualPage + 1)}>
            <p className="Selector">{actualPage + 1}</p>
          </div>
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
