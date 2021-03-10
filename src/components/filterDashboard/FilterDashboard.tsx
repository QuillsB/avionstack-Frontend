import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import 'styles/Filter.css';

interface Props {
  airlines: string[];
  onParamsChange: Function;
  onSubmitParams: Function;
}

interface State {
}

class FilterDashboard extends PureComponent<Props, State> {
  state: State = {
  };

  submitParams = (e: React.MouseEvent) => {
    const { onSubmitParams } = this.props;

    e.preventDefault();

    onSubmitParams();
  };

  renderAirlineFilter() {
    const { airlines, onParamsChange } = this.props;

    return (
      <div className="filterCardContainer">
        <p className="filterCardTitle">airline</p>
        <Autocomplete
          id="combo-box-demo"
          options={airlines}
          style={{ width: '100%' }}
          onInputChange={(event, value) => {onParamsChange(value ? value : "", 'airline_name') }}
          renderInput={(params) => <TextField {...params} label="Airline" variant="outlined" />}
        />
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="filtersContainer">
          <h2>Filters</h2>
          {this.renderAirlineFilter()}
          <div onClick={this.submitParams} className="filterCardContainer filter-resize">
            <p className="filterCardTitle">Submit</p>
          </div>
        </div>
      </>
    );
  }
}

export default FilterDashboard;
