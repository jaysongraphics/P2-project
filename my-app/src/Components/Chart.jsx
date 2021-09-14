import React from 'react'
import { Bar } from 'react-chartjs-2'

function Chart({coins}){
    const coinName = coins.map(coin => coin.name)
    const coinChange= coins.map(coin => coin.price_change_percentage_24h)

    return (
        <div className='Chart'>
            <Bar 
            data={{
                labels: coinName,
                datasets: [{
                    label: '% change in the last 24h',
                    data: coinChange,
                    backgroundColor: 'blue',
                    ticks:{ beginAtZero: true}
                }]
            }}
            >    
            </Bar>
        </div>
    )
}
export default Chart;