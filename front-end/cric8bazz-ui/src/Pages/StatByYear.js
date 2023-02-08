import React, { useEffect, useState } from 'react'
import './StatByYear.css'
import extra from '../Assets/extraa.png'
import bowl from '../Assets/balll.png'
import win from '../Assets/trophy.png'
import axios from 'axios'
import Chart from '../Components/Chart'
import PieChart from '../Components/PieChart'
import offbutton from '../Assets/off-button.png'
import onbutton from '../Assets/on-button.png'
import Select from '../Components/Select'
import TwoBarChart from '../Components/TwoBarChart'

const url="http://localhost:8000"

const StatByYear = () => {

  const [firstgraphData,setFirstGraphData] = useState([])
  const [secondgraphData,setSecondGraphData] = useState([])
  const [thirdgraphData,setThirdGraphData] = useState([])
  const [g1,setG1] = useState(2008)
  const [g2,setG2] = useState(2008)
  const [g3,setG3] = useState(2008)
  const [toggle,setToggle] = useState(false)

  // first graph data fetching
  useEffect(()=>{
    // console.log(typeof(g1))
    axios(`${url}/extraRuns/${g1}/`).then(res=>{
      // console.log(res.data)
      const temp=[]
      res.data.forEach(element => {
        const list = Object.entries(element)
        temp.push({"Team":list[0][0],"Extra Runs":list[0][1]})
      });
      setFirstGraphData(temp)
    }).catch(err=>{
      console.log(err)
    })
  },[g1])

  // second graph data fetching
  useEffect(()=>{
    axios(`${url}/bowlersEconomy/${g2}/`).then(res=>{
      // console.log(res.data)
      res.data.sort((a,b)=>{
        if(parseFloat(a.economy)!==0 && parseFloat(b.economy)!==0){
          return parseFloat(a.economy) - parseFloat(b.economy)
        }
      })
      res.data.splice(5)
      const temp=[]
      res.data.forEach(element => {
        const list = Object.entries(element)
        temp.push({"Bowler Name":list[0][1],"Economy":(list[3][1]).toFixed(2)})
      });
      setSecondGraphData(temp)
    }).catch(err=>{
      console.log(err)
    })
  },[g2])

  // third graph data fetching function
  useEffect(()=>{
    axios(`${url}/playVsWin/${g3}/`).then(res=>{
      const temp=[]
      res.data.forEach(element => {
        const list = Object.entries(element)
        temp.push({"Team":list[0][1],"Play":list[1][1],"Win":list[2][1]})
      });
      setThirdGraphData(temp)
    }).catch(err=>{
      console.log(err)
    })
  },[g3])

  return (
    <div>
      <div className='stat-header'>
        <h1>Check Following data by choosing year</h1>
        <div className='extra-runs-chart'>
          <div className='extra_runs-chart-title'>
            <img src={extra} alt="extra_logo" className='extra_logo'/>
            <h2>Extra Runs Conceded By Teams</h2>
          </div>
          <div className='stat_by_year_first_chart'>
            <div className='select-year'>
              <h3>Choose year</h3><br/>
              <Select setFunction={setG1} val={g1}/><br/><br/>
            </div>
            <div className='first-chart-statPage'>
              <h2>For Year <span style={{color:"lightgreen"}}>{g1}</span></h2>
              {
                <Chart 
                  data={firstgraphData}  
                  xDataKey={"Team"} 
                  bar={"Extra Runs"} 
                  color="teal"
                  wide={1400}
                  long={300}
                />
              }
            </div>
          </div> 
        </div>
        <div className='economical-bowler-chart'>
          <div className='economial-bowler-chart-title'>
            <img src={bowl} alt="bowl_logo" className='ball_logo' />
            <h2>Top Economical bowlers</h2>
          </div>
          <div className='economical-bowler-chart-inner'>
            <div className='select-year'>
              <h3>Choose year</h3><br/>
              <Select setFunction={setG2} val={g2}/><br/><br/>
            </div>
            <div className='economy-for-year'>
              <h2>For Year <span style={{color:"lightgreen"}}>{g2}</span></h2>
              {
                <Chart 
                  data={secondgraphData} 
                  xDataKey={"Bowler Name"} 
                  bar={"Economy"} 
                  color="lightgreen"
                  wide={730}
                  long={300}
                />
              }
            </div>
          </div>
        </div>
        <div className='play-vs-win-chart'>
          <div className='play-vs-win-chart-title'>
            <div className='play-vs-win-image-title'>
               <img src={win} alt="win_logo" className='win_logo'/>
               <h2>Matches Played Vs Matches Won</h2>
            </div>
            <div>
              {
                toggle ? <><h3>Bar Chart</h3><img src={onbutton} alt="onButton" className='btn' onClick={()=>setToggle(!toggle)}/></>
                       :<><h3>Pie Chart</h3><img src={offbutton} alt="offButton" className='btn' onClick={()=>setToggle(!toggle)}/></>
              }
            </div>
          </div>
          <div className='play-vs-win-chart-inner'>
            <div className='select-year'>
              <h3>Choose year</h3><br/>
              <Select setFunction={setG3} val={g3}/>
              <br/><br/>
            </div>
            <div>
              {
                toggle? <PieChart data={thirdgraphData} />:
                <TwoBarChart data={thirdgraphData}/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatByYear
