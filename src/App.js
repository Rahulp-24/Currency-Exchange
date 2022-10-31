import React, { useState, useEffect } from 'react';
import './App.css';
import Nabar from './Components/Nabar';
import { Card } from 'primereact/card';
import CurrecyRow from './Components/CurrecyRow';
import BarChart from './Components/BarChart';
import Registration from './Components/Registration';
export const transferData =React.createContext()


// var myHeaders = new Headers();
// myHeaders.append("apikey", "ewZ82h0HnqNId1zufrZle0KeDnxHCjBi");
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };
var myHeaders = new Headers();
myHeaders.append("apikey", "H4koikanEiyAs98T2yxRIUKJMPtz4tf7");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


function App() {
  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [transferBar,setTransferBar]=useState({})
  
  
  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate
  }
  else {
    fromAmount = amount / exchangeRate
    toAmount = amount
  }
  // let copiedUser={}

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
      .then(res => res.json())
      .then(data => {
        setTransferBar(JSON.parse(JSON.stringify(data)))
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOption([...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${toCurrency}&base=${fromCurrency}`, requestOptions)
        .then(res => res.json())
        // console.log(copiedUser)
        .then(data => setExchangeRate(data.rates[toCurrency]))

    }
  }, [fromCurrency, toCurrency])
 

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)

  }
  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  return (
    <>
      <Nabar />
      <Registration  />
 
      <div className='grid ml-5'>
        <div className='col-3'>
          <div className='grid'>
            <div className='col-12  sticky p-3 mr-3'>
              <Card title="Excange rate tool box" className='shadow-7' subTitle="Chose your currency">
                <CurrecyRow
                  currencyOption={currencyOption}
                  selectCurrency={fromCurrency}
                  onChangeCurrency={e => setFromCurrency(e.target.value)}
                  onChangeInput={handleFromAmountChange}
                  amount={fromAmount}
                />
                <center>
                  <h1>=</h1>
                </center>
                <CurrecyRow
                  currencyOption={currencyOption}
                  selectCurrency={toCurrency}
                  onChangeCurrency={e => setToCurrency(e.target.value)}
                  onChangeInput={handleToAmountChange}
                  amount={toAmount}
                />
              </Card>
            </div>
            <div className='col-12 p-3 mr-3' >
              <Card title="Excange rate tool box" className='shadow-7' subTitle="Chose your currency">

              </Card>

            </div>

          </div>

        </div>
        <div className='col-8 p-3 mr-4 h-auto'>
          <Card title="Excange rate tool box" className='shadow-7 m-1 h-1' >
             <BarChart
             transferingData={transferBar}
             selectCurrency={fromCurrency}
            //  currencyFrom={fromCurrency}
             />
          </Card>
        </div>

      </div>
    </>
  );
}

 export default App;
// const Item=()=>{
//   return(

    
//   );
// };