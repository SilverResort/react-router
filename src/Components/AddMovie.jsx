import { Button, Form, Modal } from 'react-bootstrap'
import React,{useState} from 'react'

const AddMovie = ({movie, setMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // initialisation
    const [id,setId]=useState(0)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [rate,setRate]=useState(0)
    const [trailer,setTrailer]=useState('')
    const [posterUrl,setPosterUrl]=useState('')
    

    const handleAdd = () =>{
        const newMovie={id,title,rate,description,posterUrl,trailer}
        setMovie([...movie,newMovie])
        handleClose()
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Ajouter un Film
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Ajouter un Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control placeholder="iD" onChange={(e)=>setId(e.target.value)}/>
                    <Form.Control placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
                    <Form.Control placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
                    <Form.Control placeholder="posterUrl" onChange={(e)=>setPosterUrl(e.target.value)}/>
                    <Form.Control placeholder="trailer" onChange={(e)=>setTrailer(e.target.value)}/>
                    <Form.Control placeholder="rate" onChange={(e)=>setRate(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button variant="primary" onClick={()=>handleAdd()}>
                    Sauvegarder
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie