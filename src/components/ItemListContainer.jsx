import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        if (id) {
          url = `https://dummyjson.com/products/category/${id}`;
        }
        const response = await axios.get(url);
        setItems(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, [id]);

  const addToCart = (itemId) => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${itemId}`);
  };

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <Row>
        {items.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="product-card">
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Price: ${item.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(item.id)}>Add to Cart</Button>
                <Link to={`/item/${item.id}`} className="btn btn-secondary">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ItemListContainer;