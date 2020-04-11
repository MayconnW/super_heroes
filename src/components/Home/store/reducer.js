import produce from "immer";
import { CHANGE_FILTER, SET_DATA, REQUEST } from "./types";
import { PAGINATION } from "./consts";

const INITIAL_STATE = {
  loading: false,
  data: [],
  pagination: PAGINATION,
  filter: "",
};

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return produce(state, draft => {
        draft.filter = action.payload.text;
      });
    case REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.data = [];
      });
    case SET_DATA:
      return produce(state, draft => {
        draft.data = action.payload.data;
        draft.pagination = action.payload.pagination;
        draft.loading = false;
      });
    default:
      return state;
  }
}
