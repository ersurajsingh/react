import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./slices/userSlice";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares)
});
