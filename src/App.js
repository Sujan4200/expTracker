import React , { useState} from "react";
import Expenses from "./components/Expenses";
import './styles/App.css';
import NewExpense from "./newExpense/NewExpense";

 


const DUMMYEXPENSES = [
  {
    id: 'e1',
    title: 'Liquour',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'Fuel',
    amount: 799.49,
     date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Entertainment',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Hawaijahaz',
    amount: 666, 
    date: new Date(2019,1,1),

  },
  {
    id: 'e6',
    title: 'Hawaijahaz',
    amount: 666, 
    date: new Date(2019,1,1),

  },
  {
    id: 'e7',
    title: 'Jet',
    amount: 696, 
    date: new Date(2021,1,1),

  },
  {
    id: 'e8',
    title: 'Helicopter',
    amount: 777, 
    date: new Date(2020,1,1),

  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMYEXPENSES);
 

  const  addExpenseHandler = expense => {
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses]
    }))
  }
  return (
   <>
     
  <div>
  <NewExpense onAddExpense = {addExpenseHandler  }/>
  <Expenses items= {expenses} />

  </div>

   
   </>

  );
}

export default App;
