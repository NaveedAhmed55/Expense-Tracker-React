import {React,useContext} from "react";
import { AppContext } from "../context/AppContext";
function Spent(){
    const {expenses}=useContext(AppContext);
    const totalSpent=expenses.reduce((total,item)=>{
        return total+=item.cost
    },0)
    return(
        <div className="alert alert-primary">
             <span>
                Spent so far: $ {totalSpent}
             </span>
      </div>
    )
}
export default Spent;