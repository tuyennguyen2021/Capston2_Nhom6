import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CarouselReducer";
import { ListMovieReducer } from "../reducers/ListMovieReducer";
import { QuanLyRapReducer } from "../reducers/QuanLyRapReducer";

const rootReducers = combineReducers({
  // state
  CarouselReducer,
  ListMovieReducer,
  QuanLyRapReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
