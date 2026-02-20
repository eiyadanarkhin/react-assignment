import React, { useEffect, useState } from "react";
import PhotoGallery from "../components/PhotoGallery";

export default function DataFetch() {
  const API_URL = "https://6996c1207d17864365752ee4.mockapi.io/api/v1/pets";

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ၁။ Flag တစ်ခု သတ်မှတ်ပါ
    let isIgnore = false;

    const fetchData = async () => {
      try {
        setLoading(true); // Fetch မလုပ်ခင် loading ပြမယ်
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();

        // ၂။ Component က unmount ဖြစ်သွားပြီဆိုရင် state update မလုပ်တော့ဘူး
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

    // ၃။ Cleanup Function: Component ပိတ်သွားရင် isIgnore ကို true ပေးလိုက်မယ်
    return () => {
      isIgnore = true;
    };
  }, []); // Empty dependency array ကြောင့် mount တစ်ခါဖြစ်ရင် တစ်ခါပဲ run မယ်

  return (
    
    <PhotoGallery datas={datas} loading={loading} error={error} />
  );
}
