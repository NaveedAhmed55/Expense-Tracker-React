import React from "react";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import Budget from "./components/Budget";
import 'bootstrap/dist/css/bootstrap.min.css'
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <AppProvider>
      <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
      <div className="col-sm">
        <Budget/> </div>
      <div className="col-sm">
        <Remaining/> </div>
      <div className="col-sm">
        <Spent/>  </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList/>
        </div>
      </div>
      <h3>Search Item</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <SearchBar/>
        </div>
      </div>
      <h3>Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
    
  )
}
export default App;
