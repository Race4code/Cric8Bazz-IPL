import React from 'react'
import {Chart} from 'react-google-charts'
import './Home.css'

const Home = () => {
 const data1 = [
    ["Year", "Matches_Played"],
    ["2008", 57],
    ["2009", 45],
    ["2010", 68],
    ["2011", 70],
    ["2012", 57],
    ["2013", 76],
    ["2014", 69],
    ["2015", 50],
    ["2016", 50],
  ];
  const teams=["CSK","RCB","KKR","RR","SRH"]
  const data=[
    ["Year","Matches_Won"],
    ["2008",11],
    ["2009",8],
    ["2010",7],
    ["2011",6],
    ["2012",11],
    ["2013",10],
    ["2014",5],
    ["2015",4],
    ["2016",9],
  ]
  
  const options = {
    chart: {
      title: "Matches Played Per year ",
      subtitle: "Matches played per year in IPL between 2008-2015"
    }
  };
  return (
    <div>
      <div className='home-header'>
        <h1>IPL cricket data from <span>2008-2016</span></h1>
      </div>
      <h2>Matches played per year in IPL</h2>
      <div className='first-chart'>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data1}
          options={options}
         />
      </div>
    <h2>Matches Won by a team over all seasons of IPL</h2>
    <div className='second-chart'>
      <div className='teams'>
        <h3>Choose Team</h3>
        {teams.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </div>
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
    </div>
  )
}

export default Home
