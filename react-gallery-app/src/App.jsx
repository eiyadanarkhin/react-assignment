import { useState } from "react";
import NavBar from "./components/NavBar";
import PhotoGallery from "./components/PhotoGallery";
import DataFetch from "./services/Api";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PhotoDetails from "./components/PhotoDetails";

function App() {
  const [datas, setDatas] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <BrowserRouter>
        <DataFetch
          setDatas={setDatas}
          setLoading={setLoading}
          setError={setError}
        />
        {/* <Link to="/detail/1">Detail</Link> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar viewMore={viewMore} setViewMore={setViewMore} />
                <PhotoGallery
                  datas={datas}
                  loading={loading}
                  error={error}
                  limit={viewMore ? datas.length : 8}
                />
              </>
            }
          />
          <Route path="/detail/:id" 
          element={<PhotoDetails 
          datas={datas}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
