import React, { PureComponent } from 'react';

import { dateToCleanDate, minutesBetweenDates } from 'utils/dateToCleanDate';

import { FlightData } from 'types/FlightType';

import FlightStatus from 'types/FlightStatusType';

import 'styles/FlightCard.css';

interface Props {
  flight: FlightData;
}

interface State {
  isOpen: boolean;
}

class FlightCard extends PureComponent<Props, State> {
  state: State = {
    isOpen: false
  };

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  renderFlightOpen() {
    const { flight } = this.props;

    return (
      <div className={`flightCardOpen ${flight.flight_status}`} onClick={this.handleClick}>
        <div className="flightCardInfos">
          <p className="cardTextInfos">Flight {flight.flight.iata}</p>
          <p className="cardTextInfos statusText"><strong>{flight.flight_status}</strong></p>
        </div>
        <p><strong>From</strong></p>
        <p className="textColor">{flight.departure.airport}</p>
        <p><strong>To</strong></p>
        <p className="textColor">{flight.arrival.airport}</p>
        <div className="flightCardInfos">
          <p className="cardTextInfos"><strong>Gate</strong> {flight.departure.gate ? flight.departure.gate : '-'}</p>
          <p className="cardTextInfos"><strong>Terminal</strong> {flight.departure.terminal ? flight.departure.terminal : '-'}</p>
        </div>
      </div>
    )
  }
  
  render() {
    const { flight } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        <div className={`flightCard ${flight.flight_status}`} onClick={this.handleClick}>
          <div className="cardLeftPart">
              <img src={`https://daisycon.io/images/airline/?width=300&height=150&color=f0f2f5&iata=${flight.airline.iata}`} alt={flight.airline.name} className="cardLogo"/>
          </div>
          <div className="cardRightPart">
            <p className="cardTitle textColor"><strong>{flight.departure.iata} to {flight.arrival.iata}</strong></p>
            <div>
              <p className="cardTitle resize">{dateToCleanDate(flight.departure.scheduled)}</p>
              <p className="cardTitle resize" style={{"color": flight.departure.delay ? "red" : "#01CBB1"}}>
                <strong>{flight.flight_status === FlightStatus.LANDED && minutesBetweenDates(flight)}</strong>
              </p>
            </div>
          </div>
        </div>
        {isOpen && (
          this.renderFlightOpen()
        )}
      </>
    );
  }
}

export default FlightCard;
