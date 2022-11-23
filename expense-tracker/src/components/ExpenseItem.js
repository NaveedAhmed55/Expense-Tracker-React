import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";
const ExpenseItem=(props)=>{
    const {dispatch}=useContext(AppContext)
    const onDelete=()=>{
        alert("Clicked")
        dispatch({
            type:"on_Delete",
            payload:props.id
        }); 
    }
           return(
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.name}
                <div>
                    <span>
                        ${props.cost}
                        <button onClick={onDelete} className="btn btn-primary">delete</button>
                    </span>
                </div>
            </li>
           )
}
export default ExpenseItem;
