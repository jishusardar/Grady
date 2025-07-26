import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDash({teamList}) {
  return (
    <div className='border rounded-lg p-5'>
      <h2 cllassName='font-bold text-lg'>Score Board</h2>
      <ResponsiveContainer width={'80%'} height={300}>
      <BarChart data={teamList}
      margin={{
        top:3
      }}
      >
       <XAxis dataKey={'name'}/>
       <YAxis/>
       <Tooltip/>
       <Legend/>
       <Bar dataKey='totalsum' stackId="a" fill='#180501'/>
       <Bar dataKey='points' stackId="a" fill='#FFFFFF'/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartDash