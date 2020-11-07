import { useState } from 'react';

export const useSetState = (initialState) => {
  const [state, setState] = useState(initialState)

  const newSetState = (newState) => {
    setState((state) => ({ ...state, ...newState }))
  }
  return [state, newSetState]
}