import { type } from "@testing-library/user-event/dist/type";
import React,{useContext,useState} from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from "uuid"

const AddExpenseForm=()=>{
    const {dispatch}=useContext(AppContext)
    const [name,setName]=useState("");
    const [cost,setCost]=useState(0);
    const submit=(event)=>
    {
        event.preventDefault();
        const expense={
            id:uuidv4,
            name:name,
            cost:parseInt(cost),
        }

         dispatch({
            type:"Add",
            payload:expense
         }
         )
    }
      return(
    <form onSubmit={submit}>
          <div className="row">
            <div className="col-sm mt-3">
                <label for="name">Name</label>
                <input required='required' type='text' id='name' className="form-control" name={name}
                onChange={(event)=>setName(event.target.value)}></input>
            </div>
            <div className="col-sm mt-3">
                <label for="cost">Cost </label>
                <input required='required' type='number' id='cost' className="form-control" cost={cost}
                onChange={(event)=>setCost(event.target.value)}
                ></input>
            </div>
            <div className="col-sm mt-3">
                  <button type="submit" className="btn btn-primary">Save</button>
            </div>
            
            </div>  
    </form>
        )
}
export default AddExpenseForm;