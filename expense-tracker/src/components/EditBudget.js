import {React,useContext} from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
const EditBudget=()=>{
    const {budget,dispatch}=useContext(AppContext)
    const [btnName,setBtnName]=useState("Edit")
    const [content,setContent]=useState()
    const [bg,setBg]=useState(budget)
    const on_Budget=()=>{
           setContent(
            <input type='text' id='name' className="form-control"
            onChange={(event)=>setBg(event.target.value)}></input>)
           setBtnName("Save")
           dispatch({
            type:"budget",
            payload:bg
           })
          
    }
    return (
      <div className="alert alert-secondary">
            <span>
                Budget: $ {budget}
                {content}
                <button onClick={on_Budget}>{btnName}</button>
            </span>
      </div>
    )
}
export default EditBudget;
  