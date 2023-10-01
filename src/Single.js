import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Operatinghours from './Operatinghours';
import Reviews from './Reviews';


function Single() {
    const [dish, setdish] = useState([]);

    const params = useParams()
    console.log(params.id);


    const getdish = async (id) => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => {
            setdish(data.restaurants); 

        })
    }
    console.log(dish);





    useEffect(() => {
        getdish()




    }, [])
    const dishes = dish.find(i => i.id == params.id);
     console.log(dishes);
  return (
    <div>
        {dishes?
                <Row className='w-100' style={{ display: "flex" }}>
                    <h2 className='mt-3 text-warning'>{dishes.name}</h2>

                    <Col lg={6}><img className='w-50 mt-5' src={dishes.photograph} alt="" />
                        <h2></h2>
                    </Col>



                    <Col lg={6} className='mt-5 '>
                        <div className='shadow-lg  mt-3 fs-3 me-3 ' style={{ backgroundColor: "dark", borderRadius: "20px", textAlign: "left" }}>Neighborhood : <span className='text-warning fs-3'>{dishes.neighborhood}</span></div>
                        <div className='shadow-lg  mt-3 fs-3 me-3' style={{ backgroundColor: "dark", borderRadius: "20px", textAlign: "left" }}>Address : <span className='text-warning fs-3'  > {dishes.address}</span></div>
                        <div className='shadow-lg  mt-3 fs-3 me-3' style={{ backgroundColor: "dark", borderRadius: "20px", textAlign: "left" }}>Cusine Type : <span className='text-warning fs-3'> {dishes.cuisine_type}</span></div>
                         <Operatinghours ope={dishes}></Operatinghours>
                         <Reviews rev={dishes.reviews}></Reviews>


                    </Col>

                </Row>:''}

    </div>
  )
}

export default Single