import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyCard from '../components/MyCard'

function Gallery() {
  let { productId } = useParams();
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [productId]);
  return (
    <>
      <Container> 
        <Row>  
        {products.map((product) => (
          <Col key={product.id}>
            <MyCard 
              key={product.id}
              title={product.title} 
              image={product.image}
              description={product.description}
              price={product.price}
            >
            </MyCard>
          </Col>
        ))}
        </Row>   
      </Container>
    </>
  )
}

export default Gallery