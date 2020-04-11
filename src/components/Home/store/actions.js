import { CHANGE_FILTER, SET_DATA, REQUEST } from "./types";

export function setFilter(text) {
  return {
    type: CHANGE_FILTER,
    payload: { text },
  };
}

export function setData({ data, pagination }) {
  return {
    type: SET_DATA,
    payload: { data, pagination },
  };
}

export function requestData(page = 1) {
  return {
    type: REQUEST,
    payload: { page },
  };
}
