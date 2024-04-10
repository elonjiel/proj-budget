import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid';
import App from '../App'

function AddExpenseForm() {

  const { dispatch } = useContext(AppContext)

  const [name, setName] = useState("")
  const [cost, setCost] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    
    const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
    }

    dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
    })

        setName('');
		setCost('');
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm col-lg-4">
                <label htmlFor="name">Expense Name</label>
                <input 
                    type="text" 
                    className="form-control mt-1" 
                    id="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div className="col-sm col-lg-4">
                <label htmlFor="cost">Expense Cost</label>
                <input 
                    type="number" 
                    className="form-control mt-1" 
                    id="cost" 
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                    required />
            </div>
            <div className="row mt-3">
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseForm