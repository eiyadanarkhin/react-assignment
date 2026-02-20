import React, { useEffect, useState } from "react";
import PhotoGallery from "../components/PhotoGallery";

export default function DataFetch() {
  const API_URL = "https://6996c1207d17864365752ee4.mockapi.io/api/v1/pets";

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isIgnore = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        if (!isIgnore) {
          setDatas(result);
        }
      } catch (e) {
        if (!isIgnore) {
          setError(e.message);
        }
      } finally {
        if (!isIgnore) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isIgnore = true;
    };
  }, []);

  return <PhotoGallery datas={datas} loading={loading} error={error} />;
}
