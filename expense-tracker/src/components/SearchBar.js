import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";
const SearchBar=()=>
{
    const {dispatch,copy_expenses}=useContext(AppContext)
    return(
    <div className="col-sm mt-3">
    <label for="cost"></label>
    <input required='required' type='text' id='cost' className="form-control" 
    onChange={(event)=>{
         dispatch({
            type:"search",
            payload:event.target.value
         })
    }}
    ></input>

     <ul>
                {copy_expenses.map((expense)=>
                (
                    <ExpenseItem 
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost}/>
                ))}
            </ul>
    </div>
    )
}
export default SearchBar;