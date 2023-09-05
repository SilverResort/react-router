import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {
    const navigate=useNavigate()
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>{movie.id}</Card.Text>
                <ReactStars count={5} edit={false} value={movie.rate} size={24} color2={'#ffd700'} />
                <Button variant="primary" onClick={()=>navigate(`/description/${movie.id}`)}>Full Description</Button>
                <Button variant="primary" onClick={()=>navigate(`/trailer/${movie.id}`)}>Trailer</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default MovieCard