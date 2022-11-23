import { createContext,useReducer } from "react";
const AppReducer=(state,action)=>{
     switch(action.type)
     {  case "Add":
           return {
            ...state,
            expenses:[...state.expenses,action.payload],
           }
        case "on_Delete":
            return{
                ...state,
                expenses:state.expenses.filter((expense)=>expense.id!==action.payload)
            }
        case "budget":
            return{
                ...state,
                budget:action.payload
            }
        case "search":
            return{
                ...state,
                copy_expenses:state.expenses.filter((expense)=>expense.name===action.payload)
            }
        default:
            return state;
     }
}

const initialState={
    budget:0,
    expenses:[
  
    ],
    copy_expenses:[
  
    ],
};
export const AppContext=createContext();

export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    return(
        <AppContext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        copy_expenses:state.copy_expenses,
        dispatch,
        }}>
        {props.children}
        </AppContext.Provider>
    )
};