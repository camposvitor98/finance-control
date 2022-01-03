import { all } from "redux-saga/effects";

import example from "./modules/example/saga";
import loggedData from "./modules/loggedData/saga";

export function* sagas(): Generator {
  const saga = [example, loggedData];

  return yield all(saga);
}
