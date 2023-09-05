import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
// import {moviesData} from '../Data'

const Description = ({movies}) => {
    const {id} = useParams()
    const [movie,setMovie]=useState({})
    const navigate=useNavigate()
  
    useEffect(() => {
      const foundMovie=movies.find((el)=>el.id===Number(id))
        foundMovie && setMovie(foundMovie)
      }, [id,movies])

  return (
    <div>
        {
          <Card style={{ width: '18rem' }}>
            <Card.Text>{movie.description}</Card.Text>
            <Button variant="primary" onClick={()=>navigate(-1)}>Back</Button>
          </Card>
        }
    </div>
  )
}

export default Description