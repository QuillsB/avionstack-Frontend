import { StateType as DashboardType } from 'reducers/dashboardReducer';
import { StateType as FilterType } from 'reducers/filterReducer';
export interface StateType {
  dashboardState: DashboardType;
  filterState: FilterType;
}
