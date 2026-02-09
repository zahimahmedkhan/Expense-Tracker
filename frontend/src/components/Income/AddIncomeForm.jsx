import React, { useState } from 'react'
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddIncomeForm = ({onAddIncome}) => {

    const [income , setIncome] = useState({
        source : "",
        amount : "",
        date : "",
        icon: ""
    });

    const handelChange = (key, value) => setIncome({...income, [key]: value});

  return (
    <div>

        <EmojiPickerPopup 
            icon={income.icon}
            onSelect={(selectedIcon) => handelChange("icon", selectedIcon)}
        />

        <Input
            value={income.source}
            onChange={(e) => handelChange("source", e.target.value)}
            label="Income Source"
            placeholder="Salary, Freelance etc"
            type="text"    
        />

        <Input
            value={income.amount}
            onChange={(e) => handelChange("amount", e.target.value)}
            label="Amount"
            placeholder=""
            type="number"
        />
        <Input
            value={income.date}
            onChange={(e) => handelChange("date", e.target.value)}
            label="Date"
            placeholder=""
            type="date"
        />

        <div className='flex justify-end mt-6'>
            <button 
                type='button'
                className='add-btn add-btn-fll'
                onClick={() => onAddIncome(income)}
            >
                Add Income
            </button>
        </div>
    </div>
  )
}

export default AddIncomeForm