import React, { useEffect, useState } from 'react'
import {Chart} from 'react-google-charts'
import './StatByYear.css'

const StatByYear = () => {
  const data1 = [
    ["Year", "Extras"],
    ["2008", 57],
    ["2009", 45],
    ["2010", 68],
    ["2011", 70],
    ["2012", 57],
    ["2013", 76],
    ["2014", 69],
    ["2015", 50]
  ];
  const [val,setVal] = useState("");

  useEffect(()=>{
    console.log("under useeffect")
    console.log(val)
  },
  [val])
  const options = {
    chart: {
      title: "Extra Runs By CSK",
      subtitle: "Extra Runs concceded by CSK between year 2008-2015"
    },
    vAxis: {
      minValue: 5
    }
  }
  const handleChange=(e)=>{
    console.log(e.target.value)
    setVal(e.target.value)
  }
  return (
    <div>
      <div className='stat-header'>
        <h1>Check Following data by choosing year</h1>
        <div className='extra-runs-chart'>
          <h3>Chart for extra runs conceded per team year wise</h3>
          <select value={"Choose year"} onChange={handleChange}>
          <option value={2008} >2008</option>
          <option value={2009}>2009</option>
          <option value={2010}>2010</option>
          <option value={2011}>2011</option>
          <option value={2012}>2012</option>
          <option value={2013}>2013</option>
          <option value={2014}>2014</option>
          <option value={2015}>2015</option>
          <option value={2016}>2016</option>
          </select>
          <Chart
            chartType="Bar"
            width="80%"
            height="400px"
            data={data1}
            options={options}
          />
        </div>
        <div className='economical-bowler-chart'>
          <h3>Chart for Top Economical bowlers</h3>
          <select>
          <option selected>Choose Year</option>
          <option >2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          </select>
          <Chart
            chartType="Bar"
            width="80%"
            height="400px"
            data={data1}
            options={options}
          />
        </div>
        <div className='play-vs-win-chart'>
          <h3>Chart for Matches Played Vs matches won per team</h3>
          <select>
          <option selected>Choose Year</option>
          <option >2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          </select>
          <Chart
            chartType="Bar"
            width="80%"
            height="400px"
            data={data1}
            options={options}
          />
        </div>
      </div>
    </div>
  )
}

export default StatByYear
