import * as React from 'react'
import reducer from '../reducers/reducerCount'
import initialState from '../reducers/initialState/initialStateCount'

let ContextOne = React.createContext()

function ContextOneProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { state, dispatch }
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer

export { ContextOne, ContextOneProvider, ContextOneConsumer }