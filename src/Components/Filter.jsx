import React from 'react'
import {Form} from 'react-bootstrap'
import ReactStars from 'react-stars'

const Filter = ({setInputMovie,setInputStars,inputStars}) => {
  return (
    <div>
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e)=>setInputMovie(e.target.value)}/>
        <ReactStars count={5} size={24} color2={'#ffd700'} half={false} value={inputStars} onChange={(e)=>setInputStars(e)}/>
    </div>
  )
}

export default Filter