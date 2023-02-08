import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Bar,Legend} from 'recharts'

const TwoBarChart = ({data}) => {

  // Custom tooltip function
  const customTooltip = ({active,payload})=>{
    if(active && payload && payload.length){
      const temp = Object.entries(payload[0].payload)
      return (
        <div className='custom-tooltip'>
          {
            temp.map((item,index)=>{
              return <p key={index}>{item[0]} : {item[1]}</p>
            })
          }
        </div>
      )
    }
  }

  return (
    <>
      <BarChart width={1400} height={315} data={data}>
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey="Team"/>
        <YAxis />
        <Tooltip content={customTooltip}/>
        <Legend />
        <Bar dataKey="Play" fill="#82ca9d" barSize={35} />
        <Bar dataKey="Win" fill="teal" barSize={35} />
      </BarChart>
    </>
  )
}

export default TwoBarChart
