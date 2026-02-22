import React from "react";
import { useNavigate } from "react-router-dom";

export default function PhotoGallery({ datas, loading, error, limit }) {
  const navigate = useNavigate();

  if (loading) return <div className="spinner">Loading user...</div>;
  if (error) return <div className="error">Errror : {error}</div>;
  console.log(datas);

  const displayPhotoCards = datas.slice(0, limit);

  const switchRoute = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section className="font-svn-gilory bg-gray-50 pb-10 ">
      <div className="max-w-7xl mx-auto px-3 xl:px-0">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayPhotoCards.map((data) => (
            <div
              onClick={() => switchRoute(data.id)}
              key={data.id}
              className="bg-[#FDFDFD] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-2"
            >
              {/* data Image */}
              <div className="h-72 overflow-hidden rounded-xl">
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* data Info */}
              <div className="p-3">
                <h3 className="font-bold text-[#00171F] text-[16px] leading-6 mb-1">
                  {data.name}
                </h3>

                <div className="flex items-center font-medium text-[12px] text-[#667479] leading-4.5  gap-2 mb-1">
                  <p className="flex items-center">
                    Gene:<span className="font-bold ml-1">{data.gender}</span>
                  </p>
                  <svg
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.304 2.304C2.568 2.04 2.7 1.716 2.7 1.344C2.7 0.971999 2.568 0.648 2.304 0.396C2.052 0.131999 1.728 -5.96046e-07 1.356 -5.96046e-07C0.983996 -5.96046e-07 0.659996 0.131999 0.395996 0.396C0.131996 0.648 -4.02331e-06 0.971999 -4.02331e-06 1.344C-4.02331e-06 1.716 0.131996 2.04 0.395996 2.304C0.659996 2.568 0.983996 2.7 1.356 2.7C1.728 2.7 2.052 2.568 2.304 2.304Z"
                      fill="#667479"
                    />
                  </svg>

                  <p className="flex items-center">
                    Age:
                    <span className="font-bold  ml-1">{data.age} months</span>
                  </p>
                </div>

                <p className="font-bold text-[14px] text-[#00171F] leading-5">
                  {data.price} VND
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
