import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Bar,Legend } from 'recharts'
import './Chart.css'
const Chart = ({data,xDataKey,bar,color,wide,long}) => {

  const CustomTooltip = ({active,payload})=>{
    if(active && payload && payload.length){
      const temp = Object.entries(payload[0].payload);
      return(
        <div className="custom-tooltip">
          {
            temp.map((item,index)=>{
              return <p className='label' key={index}>{item[0]} : {item[1]}</p>
            })
          }
        </div>
      )
    }
  }

  return (
    <div>
      <BarChart width={wide} height={long} data={data}>
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip content={<CustomTooltip/>} />
        <Legend />
        <Bar dataKey={bar} fill={color} barSize={35} />
      </BarChart>
    </div>
    
  )
}

export default Chart
