## avionstack-Frontend
Front-End solution using React.Js/Typescript with avionstack api

## Node/NPM Versions

I'm running node v10.19.0 and npm v6.13.4

## Getting Started

Get an API key from https://aviationstack.com/documentation

Add your API key in .env file at the root of the project.
Example: REACT_APP_API_KEY=YOUR_API_KEY

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

Also:

To launch project Test

```
npm test
```

## Features

- [Project][project]
  - [React][react]
  - [Typescript][typescript]
  - [React Router][react-router-dom]
- [Base Project][base project]
  - [React Redux][react-redux]
  - [Redux Saga][redux-saga]
  - [Redux Persist][redux-persist]
- [Api][api]
  - [Axios][axios]
- [External Component][external component]
  - [Material UI][material-ui]
- [Tests][tests]
  - [Jest][jest]
  - [ts Jest][ts-jest]

## EXTERNAL API

- [AviationStack][https://aviationstack.com/documentation]
- [Daisycon][https://daisycon.io/images/airline/]

## PROJECT IMPLEMENTATION

- Render Flight information in chronological order.
  - Date & hours of departure
  - Flight number
  - Departure & arrival airport
  - Departure Gate & Terminal
  - Status of the flight
  - Delay
  - Flight Airline logo
- Pagination
  - Each page is provide with a maximum of 100 flights.
- Filter
  - Filter all flights information by airline.

## ERROR NOTE

- [Mozilla Browser Http Error]
  - When launch on mozilla firefox browser. Mozilla can provide http/2 api call. Avionstack API doesn't accept http/2 call.
- [Avionstack API apikey]
  - Each Avionstack API apikey provide 500 api call. If needed you can add your apikey in 'src/constants/api.ts' and replace baseUrl.
