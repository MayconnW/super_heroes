import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const pluginName = "colgate";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: pluginName,
      storage,
      whitelist: [],
    },
    reducers
  );
  return persistedReducer;
};
