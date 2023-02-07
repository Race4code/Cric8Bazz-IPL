import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Bar,Legend } from 'recharts'

const Chart = ({data,xDataKey,bar,color,wide,long}) => {
  return (
    <div>
        <BarChart width={wide} height={long} data={data}>
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />s
          <Bar dataKey={bar} fill={color} barSize={35} />
        </BarChart>
    </div>
    
  )
}

export default Chart
