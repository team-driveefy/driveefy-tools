import { configureStore } from "@reduxjs/toolkit";
import { TicketDashboard } from "./reducers/TicketDashboardReducers";

const store = configureStore({
  reducer: {
    TicketDashboard: TicketDashboard,
 
  },
  //middleware checks if the action is serializable
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
