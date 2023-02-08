import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './Home.css'
import batsman from '../Assets/cricket.png'
import bat_ball from '../Assets/bat_ball.png'
import ipl_logo from '../Assets/ipl_logo.png'
import Chart from '../Components/Chart'

const url = "http://localhost:8000"
const Home = () => {
  const [firstChartData,setFirstChartData] = useState([])
  const [secondChartData,setSecondChartData] = useState([])
  const [team,setTeam] = useState("Sunrisers Hyderabad")
  const [teamList,setTeamList] = useState([])

  useEffect(()=>{
    console.log('call fetch')
      const fetch1 = axios(`${url}/allMatches`).then(res=>{
      const temp = []
      res.data.forEach(element => {
        const list = Object.entries(element)
        temp.push({"year":list[0][0],"matches":list[0][1]})
      });
      setFirstChartData(temp)
      sessionStorage.setItem("allMatches",JSON.stringify(temp))
    })

    // fetching all teams name played in IPL 
    const fetch2 = axios(`${url}/allTeams`).then(res=>{
      setTeamList(res.data)
      sessionStorage.setItem("allTeams",JSON.stringify(res.data))
    })
    // check is data is already fetched
    if(sessionStorage.getItem("allMatches") && sessionStorage.getItem("allTeams")){
      const temp1 = sessionStorage.getItem("allMatches")
      const temp2 = sessionStorage.getItem("allTeams")
      setFirstChartData(JSON.parse(temp1))
      setTeamList(JSON.parse(temp2))
    }else{
      console.log('server call')
      const alldata = Promise.all([fetch1,fetch2])
      alldata.then(res=>console.log(res)).catch(err=>console.log(err))
    }
  },[])

  useEffect(()=>{
      axios(`${url}/matchesWonByTeam/${team}`).then(res=>{
        const temp = []
        res.data.forEach(element => {
          const list = Object.entries(element)
          temp.push({"year":list[0][0],"matches_won":list[0][1]})
        });
        setSecondChartData(temp)
      }).catch(err=>{
        console.log(err)
      })
  },[team])
  
  return (
    <div className='home-page'>
      <div className='home-header'>
        <img src={ipl_logo} alt="ipl_logo" className='ipl_logo'/>
        <h1>Stat Data Visualiser <span>2008-2016</span></h1>
      </div>
      <div className='first-chart'>
        <div>
          <h2> Matches Played Per year in IPL</h2>
          <img src={batsman} alt="cricket"/>
        </div>
        {
          <Chart 
            data={firstChartData} 
            xDataKey="year" 
            bar="matches" 
            color="#82ca9d"
            wide={730}
            long={300}
          />
        }
      </div>
    <div className='second-chart'>
    <div className='second-chart-title'>
        <h2>Matches won by Team over all seasons of IPL</h2>
        <img src={bat_ball} alt="bat_ball" className='bat_ball'/>
      </div>
      <div className='inner-second-chart'>
        <div className='teams'>
          <h3>Choose Team</h3>
          <select value={team} onChange={(e)=>setTeam(e.target.value)} >
          {teamList.map((item,index)=>{
            return <option key={index} value={item}>{item}</option>
          })}
          </select>
          <h3>{team}</h3>
        </div>
        {
          <Chart 
            data={secondChartData}  
            xDataKey={"year"} 
            bar={"matches_won"} 
            color="teal"
            wide={730}
            long={300}
          />
        }
      </div>  
    </div>
    </div>
  )
}

export default Home
