import { Action as DashboardActionType } from 'actions/DashboardActions';
import { Action as FilterActionType } from 'actions/FilterActions';

export type ActionType =
  | DashboardActionType
  | FilterActionType;
