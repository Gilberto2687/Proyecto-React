import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Col, Row, Button } from 'react-bootstrap';
import CategoryButtons from './CategoryButtons';

function ItemListContainer({ greeting, addToCart }) {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setItems(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'todos'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <CategoryButtons onCategoryChange={handleCategoryChange} />
      <Row>
        {filteredItems.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="product-card">
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Price: ${item.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
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