export enum Types {
  SET = "loggedData/SET",
  LOADING = "loggedData/LOADING",
  LOGGED_USER = "loggedData/LOADING",
}

export interface LoggedUser {
  id?: string;
  name?: string;
}

export interface InitialValues {
  loading: boolean;
  loggedUser: LoggedUser;
}
