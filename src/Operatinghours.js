import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, ModalFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Operatinghours({ope}) {

    const [time,settime]=useState({ope})
   
    console.log(time);
    useEffect(()=>{
        settime(ope.operating_hours);

    },[])
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="warning" className=' mt-3 me-3' style={{width:"97%"}} onClick={handleShow}>
        OperatingHours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>OperatingHours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                <ListGroupItem>Monday:{time.Monday}</ListGroupItem>
                <ListGroupItem>Monday:{time.Tuesday}</ListGroupItem>
                <ListGroupItem>Monday:{time.Wednesday}</ListGroupItem>
                <ListGroupItem>Monday:{time.Thursday}</ListGroupItem>
                <ListGroupItem>Monday:{time.Friday}</ListGroupItem>
                <ListGroupItem>Monday:{time.Saturday}</ListGroupItem>
                <ListGroupItem>Monday:{time.Sunday}</ListGroupItem>
            </ListGroup>
            <ModalFooter>
                <Button variant="warning" onClick={handleClose}>
                Close
              </Button>
            </ModalFooter>
          
        </Modal.Body>

      </Modal>


    </div>
  )
}

export default Operatinghours