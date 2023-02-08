import React from 'react'

const Select = ({setFunction,val}) => {
  return (
    <>
      <select value={val} onChange={(e)=>setFunction(e.target.value)}>
        <option value={2008}>2008</option>
        <option value={2009}>2009</option>
        <option value={2010}>2010</option>
        <option value={2011}>2011</option>
        <option value={2012}>2012</option>
        <option value={2013}>2013</option>
        <option value={2014}>2014</option>
        <option value={2015}>2015</option>
        <option value={2016}>2016</option>
        <option value={2017}>2017</option>
      </select>
    </>
  )
}

export default Select
