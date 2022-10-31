import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { Button } from 'reactstrap';
// import { json } from 'react-router-dom';


export default function BarChart(props) {
    const{
        transferingData
        // selectCurrency,
        // currencyFrom,
        // amount
    }=props
    // console.log("currencyFrom",currencyFrom)
    // console.log("amount",amount)
    const updateBar=()=>{
        console.log(transferingData.key())
        let l=[]
        for( let i in transferingData){
            l.push(i)
            
        }console.log(l[0])
    }
    
    const [basicData] = useState({
        labels: ['a','a','a','a','a','a','a'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                        
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
        return {
            basicOptions,
            

        }
    }
    const { basicOptions } = getLightTheme();

    return (
<>
        <div className="card col-10   m-auto">
            <Chart type="bar" data={basicData} options={basicOptions} />
        </div>
        
        
        <Button label="Update" onClick={e=>updateBar}/>
    
        </>
    )
}
