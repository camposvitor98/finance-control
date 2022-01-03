import { ActionType } from "typesafe-actions";

import { Types, InitialValues } from "./types";
import * as actions from "./actions";

export const ActionsLoggedData = actions;

export type ActionsLoggedDataType = ActionType<typeof actions>;

const INITIAL: InitialValues = {
  loading: false,
  loggedUser: {},
};

export const loggedDataReducer = (
  state = INITIAL,
  action: ActionsLoggedDataType
) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET: {
      return { ...state, ...payload };
    }

    case Types.LOADING: {
      return { ...state, loading: payload };
    }
    case Types.LOGGED_USER: {
      return { ...state, loggedUser: payload };
    }

    default:
      return state;
  }
};
