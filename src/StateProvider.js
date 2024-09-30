import React, { createContext, useContext, useReducer } from "react";

 //prepare data layer
export const StateContext= createContext()


  //this will wrap our app and provide data layer in every component
export const StateProvider= ({reducer, initialState, children}) =>(

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


   //pull info from data layer   custom hook
export const useStateValue =()=>useContext(StateContext) 




// const useStateValue = () => {
//   return useContext(StateContext);
// };
