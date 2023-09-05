import React, { useState } from 'react'
import {Nav,Navbar,Form,Button,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = ({setInputMovie}) => {
    const [inputSearch,setInputSearch]=useState('')

    const handleSearch=()=>{
        setInputMovie(inputSearch)
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/description'}>Description</Nav.Link>
                        <Nav.Link as={Link} to={'/Trailer'}>Trailer</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e)=>setInputSearch(e.target.value)}/>
                        <Button variant="outline-success" onClick={(e)=>handleSearch()}>Rechercher</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation