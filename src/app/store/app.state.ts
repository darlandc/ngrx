import { createAction, createReducer, on } from '@ngrx/store';

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0
}

export const increment = createAction('[App] increment');
export const decrement = createAction('[App] decrement');

export const appReducer = createReducer(
  appInitialState,
  on(increment, (state)=> {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrement, (state)=>{
    state = {
      ...state,
      counter: state.counter === 0 ? 0 : state.counter -1
    }
    return state;
  })
)
