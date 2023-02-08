import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './PieChart.css'



const COLORS = [ '#0088FE','#FF8042'];//'#00C49F,#00C49F',

const RADIAN = Math.PI / 180;


const PChart = ({data})=> {
    const [team,setTeam] = useState("Kolkata Knight Riders")
    const [teamData,setTeamData] = useState([])
    const [teamList,setTeamList] = useState([])
    useEffect(()=>{
      const temp=[]
      data.forEach(element => {
        temp.push(element.Team)
      })
      setTeamList(temp)
    },[data])

    useEffect(()=>{
        const temp=[]
        data.forEach(element => {
          if(element.Team===team){
            temp.push({team:element.Team,play:(element.Play-element.Win)},{team:element.Team,play:(element.Win)})
          }
        })
        setTeamData(temp)
    },[team])
    const handleChange=(e)=>{
      setTeam(e.target.value)
    }
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {
            ((teamData[0].play/(teamData[0].play+teamData[1].play))*100).toFixed(5)===(percent*100).toFixed(5)
            ?
            `${teamData[0].play} Loose`:`${teamData[1].play} win`
          }
        </text>
      );
    };
    return (
        <div className='pieChart'>
            <div>
              <h3>Choose Team</h3>
              <select value={team} onChange={handleChange} >
                {teamList.map((item,index)=>{
                  return <option key={index} value={item}>{item}</option>
                })}
              </select>
            </div>
            <div className='pieChart-inner'>
              <PieChart width={400} height={400}>
                <Pie
                  data={teamData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="play"
                >
                  {teamData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <h3>{team}</h3>
            </div>
        </div>
        
    );
}

export default PChart
