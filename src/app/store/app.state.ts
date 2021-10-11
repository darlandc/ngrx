import { createAction, createReducer, on, props } from '@ngrx/store';

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0,
};

export const increment = createAction('[App] increment');
export const decrement = createAction('[App] decrement');
export const defineCount = createAction(
  '[App] define count',
  props<{ payload: number }>()
);

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
  })
);
