import { action } from "typesafe-actions";

import * as Interface from "./types";

export function set(payload: any) {
  return action(Interface.Types.SET, payload);
}

export function setLoading(payload?: boolean) {
  return action(Interface.Types.LOADING, payload);
}

export function setLoggedUser(payload?: Interface.LoggedUser) {
  return action(Interface.Types.LOGGED_USER, payload);
}
