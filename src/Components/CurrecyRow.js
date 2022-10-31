import React from 'react'

// import { InputText } from 'primereact/inputtext';

// import { InputNumber } from 'primereact/inputnumber';
 



export default function CurrecyRow(props) {
  const {
    currencyOption,
    selectCurrency,
    onChangeCurrency,
    onChangeInput,
    amount
  } = props
  return (
    <div>
      <input type="number" className=' input p-2 m-2 ml-2 h-1 w-7 shadow-6 border-round-sm' value={amount} onChange={onChangeInput} />
      {/* <InputText value={amount} onChange={onChangeInput} /> */}
    
{/* <InputNumber  className='p-1 m-1 h-2 'value={amount} onValueChange={onChangeInput} /> */}

 

      <select className='p-2 m-2 ml-2 h-1 shadow-6 border-round-sm' value={selectCurrency} onChange={onChangeCurrency}>
        {currencyOption.map(option => (
          <option key={option} value={option}>{option}</option>
          
        ))}
      </select>

    </div>
  )
}

