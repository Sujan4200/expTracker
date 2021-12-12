import React , { useEffect, useState } from 'react'
import "../styles/Expenses.css"
import ExpenceItem from './ExpenceItem'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props)=>  {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  
  useEffect(() => {
    props.items.map((exp) =>  {
      console.log(exp.date.getFullYear().toString())
      console.log(filteredYear.toString())
    })
  },[])  

    return (
        <>
        <Card className="expenses">
        <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />


        {props.items.map(expenses => expenses.date.getFullYear().toString() === filteredYear ?  <ExpenceItem  title ={expenses.title}
                                  amount = {expenses.amount}
                                  date = {expenses.date}/> : '') }
     
      </Card >
      
      

      </>
        
    )
}

export default Expenses
