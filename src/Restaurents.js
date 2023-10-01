import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restaurents({Resto}) {
  return (
    <div>
            <Row>
        {
        Resto.map(i=>(
           
          
            <Col className='mt-3'   xs={12} sm={6} md={4} lg={3} xl={3} >

                  
                     <Link to={`single/${i.id}`}>
                          <Card className='ms-5 me-5 mb-3 shadow-lg' style={{justifyContent:"space-evenly", height:"400px"}}>
                              <Card.Img className=' mt-3  container w-75 center shadow-lg' variant="top" src={i.photograph} />
                              <Card.Body>
                                <Card.Title>{i.name}</Card.Title>
                                <Card.Text>
                                    {i.address}
                               
                                </Card.Text>
                               
                              </Card.Body>
                            </Card>
                     </Link>
                  
            
                
    
                
                </Col>

        ))
        
        }
       
           
       </Row>

    </div>
  )
}

export default Restaurents