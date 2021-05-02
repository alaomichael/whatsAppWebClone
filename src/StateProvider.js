import React,{createContext, useContext,useReducer} from 'react'

// create context where data layer lives
export const StateContext = createContext()

//StateProvider is the data layer which is a higher Order component that takes in 3 values
//reducer,initialState and children
export const StateProvider =  ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer (reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//allows us to pull information from the data layer
export const useStateValue = () => useContext (StateContext)