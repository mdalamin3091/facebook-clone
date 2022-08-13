import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./reducers/modalSlice";
import { postsServices } from "./services/postsServices";

const store = configureStore({
  reducer: {
    [postsServices.reducerPath]: postsServices.reducer,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsServices.middleware),
});

export default store;
