//CONTEXT API COMPONENT
import React, { createContext,useContext, useReducer } from 'react';

//DATA LAYER
export const StateContext= createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState,)}>
        {children} {/**in questo caso è riferito ad <App /> dato che è stato fatto un wrap in index.js */}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

