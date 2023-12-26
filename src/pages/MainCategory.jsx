import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import {useParams} from 'react-router-dom';

const MainCategory = ({ products }) => {
  const path = useParams();
  console.log("path", path);
  
  const filteredProducts = [...products.apples,...products.pears,...products.avacados,...products.nectarines,...products.peaches,...products.coconuts,...products.melons,...products.bananas,...products.cherries,...products.dragonfruits,...products.grapes,...products.citrus,...products.wetdates,...products.giftpacks,...products.pomegranates,...products.pineapples,...products.papayas,...products.guavas,...products.custardapples];

  //unique productid check
  // const check = filteredProducts.find((product)=>product.productId == 599990499);
  // console.log("check",check);

  console.log("Filtered products : ", filteredProducts);

  

  function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying the original array
    const shuffledArray = [...array];
  
    // Fisher-Yates Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  // Example usage:
  const shuffledArray = shuffleArray(filteredProducts);
  
  console.log(shuffledArray);
  
  return (
    <Container className="product-list-container">
      <h3>Premiumfruits</h3>
      <Row>
        {shuffledArray.map((product) => (
          <Col key={product.productId} xs={12} md={6} lg={4}>
            <ProductCard key={product.productId} product={product} category={"allfruits"} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainCategory;