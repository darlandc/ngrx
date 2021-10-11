import { createAction, createReducer, on, props } from '@ngrx/store';

export interface IAppState {
  counter: number;
  episodes: Array<any>;
}

export const appInitialState: IAppState = {
  counter: 0,
  episodes: []
};

export const increment = createAction('[App] increment');
export const decrement = createAction('[App] decrement');
export const defineCount = createAction(
  '[App] define count',
  props<{ payload: number }>()
);
export const setEpisodes = createAction(
  '[App] set episodes',
  props<{ payload: Array<any> }>()
);
export const loadingEpisodes = createAction('[App] load episodes');

export const appReducer = createReducer(
  appInitialState,
  on(increment, (state) => {
    state = {
      ...state,
      counter: state.counter + 1,
    };
    return state;
  }),
  on(decrement, (state) => {
    state = {
      ...state,
      counter: state.counter === 0 ? 0 : state.counter - 1,
    };
    return state;
  }),
  on(defineCount, (state, { payload }) => {
    state = {
      ...state,
      counter: payload,
    };
    return state;
  }),
  on(setEpisodes, (state, { payload }) => {
    state = {
      ...state,
      episodes: payload,
    };
    console.log(state, 'setEpisodes')
    return state;
  })
);
