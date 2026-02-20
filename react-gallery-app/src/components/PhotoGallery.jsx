import React from 'react'

export default function PhotoGallery({datas, loading, error}) {

  if (loading) return <div className='spinner'>Loading user...</div>
  if(error) return <div className='error'>Errror : {error}</div>
  return (

    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-gray-500 text-sm">Whats new?</p>
            <h2 className="text-2xl font-bold text-blue-900">Take A Look At Some Of Our Pets</h2>
          </div>
          <button className="border-2 border-blue-900 text-blue-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-900 hover:text-white transition">
            View more {'>'}
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datas.map((data) => (
            <div key={data.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition p-2">
              {/* data Image */}
              <div className="h-64 overflow-hidden rounded-xl">
                <img 
                  src={data.avatar} 
                  alt={data.name} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* data Info */}
              <div className="p-3">
                <h3 className="font-bold text-gray-800 text-lg">
                  {data.id.slice(0,5)} - {data.name}
                </h3>
                
                <div className="flex gap-4 text-sm text-gray-500 my-2">
                  <p><span className="font-semibold">Gene:</span> {data.gender}</p>
                  <p><span className="font-semibold">Age:</span> {data.age} months</p>
                </div>

                <p className="font-bold text-blue-900">
                  {data.price} VND
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
