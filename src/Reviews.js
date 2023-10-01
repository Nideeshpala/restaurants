import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Reviews({ rev }) {
   
    console.log(rev);
    return (
        <div>
            <Accordion className='mt-3' style={{ width: "97%" }}>
                 <Accordion.Item eventKey="0">
                     <Accordion.Header>Reviews</Accordion.Header>
                     <Accordion.Body>
                         <ListGroup style={{textAlign:"left"}}>{
                            rev.map(i=> 
                       <p>
                            <ListGroupItem>Name : {i.name}</ListGroupItem>
                            <ListGroupItem>Dtae : {i.date}</ListGroupItem>
                            <ListGroupItem>Rating : {i.rating}</ListGroupItem>
                            <ListGroupItem >Comments : <br /> {i.comments}</ListGroupItem>
                       </p>
                        )}
                         
                            
                           
                           
                            
                          </ListGroup>

                        

                     </Accordion.Body>
                 </Accordion.Item>
             </Accordion>
             

            
               

           
                 
        </div>
    )
}

export default Reviews