import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Bar,Legend} from 'recharts'

const TwoBarChart = ({data}) => {
  return (
    <>
        <BarChart width={1400} height={315} data={data}>
           <CartesianGrid strokeDasharray="3 3"  />
           <XAxis dataKey="Team"/>
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey="Play" fill="#82ca9d" barSize={35} />
           <Bar dataKey="Win" fill="teal" barSize={35} />
        </BarChart>
 
    </>
  )
}

export default TwoBarChart
