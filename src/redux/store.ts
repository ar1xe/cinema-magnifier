import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import peoplesReducer from "./slices/peoplesSlice";
import searchPeopleReducer from "./slices/searchPeopleSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const middleware = [...middlewares];

export const store = configureStore({
  reducer: {
    moviesState: moviesReducer,
    peoplesState: peoplesReducer,
    searchPeoplesState: searchPeopleReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
