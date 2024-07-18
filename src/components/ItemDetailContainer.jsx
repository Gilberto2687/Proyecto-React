import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from './ItemDetail';

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
    <div>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;