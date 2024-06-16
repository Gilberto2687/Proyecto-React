import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './ItemDetailContainer.css'; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="item-detail-card">
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          Price: ${item.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemDetailContainer;