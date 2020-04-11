import produce from "immer";

const INITIAL_STATE = {
  isMobile: null,
  dimensions: null,
};

export default function reducer(prevState, action) {
  const state = prevState || INITIAL_STATE;
  switch (action.type) {
    case "@resolution/SET_IS_MOBILE":
      return produce(state, draft => {
        draft.isMobile = action.payload.isMobile;
      });
    default:
      return state;
  }
}
