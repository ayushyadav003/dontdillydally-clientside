import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/searchSlice";
import { createWrapper } from "next-redux-wrapper";
import { movieDetailSlice } from "../features/movieDetailSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [searchSlice.name]: searchSlice.reducer,
      [movieDetailSlice.name]: movieDetailSlice.reducer,
    },
    // devTools: true,
  });

// export const store = () => {
//   configureStore(() => [], {
//     reducer: {
//       search: searchSlice,
//     },
//   });
// };

export const wrapper = createWrapper(makeStore);
