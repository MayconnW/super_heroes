import { combineReducers } from "redux";
import home from "components/Home/store/reducer";
import resolution from "store/modules/resolution/reducer";

const rootReducers = combineReducers({ resolution, home });

export default rootReducers;
