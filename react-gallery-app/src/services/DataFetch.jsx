import React, { useEffect, useState } from 'react'
import App from '../App';
import PhotoGallery from '../components/PhotoGallery';

export default function DataFetch() {
  const API_URL = "https://6996c1207d17864365752ee4.mockapi.io/api/v1/pets";

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw new Error('Failed to fetch data');
      
      const result = await response.json();
      setDatas(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }; 

  useEffect(() => { 
    fetchData();
  }, []);
  


  return (
    <PhotoGallery datas={datas} loading={loading} error={error}/>
  )
}
