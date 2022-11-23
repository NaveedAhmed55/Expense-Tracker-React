import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";
function Remaining(){
    const {expenses,budget}=useContext(AppContext)
    let totalCost=expenses.reduce((total,item)=>{
        return total+=item.cost;
    },0)
    let re=budget-totalCost
    return(
        <div className="alert alert-success">
             <span>
                Remaining: $ {re}
             </span>
      </div>
    )
}
export default Remaining;