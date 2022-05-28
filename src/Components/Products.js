import React, { useState } from "react";
import { data } from "./data";
function Products() {
  const [productData, setProductData] = useState(data);

  function filterCategory(categogry) {
    const result = data.filter((data) => data.categogry === categogry);
    setProductData(result);
  }
  function filterCollection(collection) {
    const result = data.filter((data) => data.collection === collection);
    setProductData(result);
  }

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-start p-5  w-auto">
        <div className="bg-white p-5 flex flex-col justify-start items-start">
          <h2 className="text-normal font-bold ">Filters</h2>
          <button onClick={() => setProductData(data)}>All</button>

          <h1 className="text-lg font-bold ">Categogry</h1>

          <button onClick={() => filterCategory("Men")}>Men</button>
          <button onClick={() => filterCategory("Women")}>Women</button>
          <button onClick={() => filterCategory("Kid")}>Kid</button>
          <h1 className="text-lg font-bold mt-5 ">Collection</h1>
          <button onClick={() => filterCollection("summer")}>Summer</button>
          <button onClick={() => filterCollection("winter")}>Winter</button>
        </div>
      </div>
      <div className="grid w-full  h-full grid-cols-5  gap-5 p-5">
        {productData?.map((item) => (
          <div
            className="flex flex-col p-2 bg-white object-contain  h-auto	"
            key={item.name}
          >
            <img
              src={item?.img}
              className="w-full h-44 mb-2 object-cover"
              alt="dress"
            />
            <p className="text-sm text-blue-400 ">{item?.categogry}</p>
            <p className="text-sm text-pink-400 ">{item?.collection}</p>
            <div className="text-base font-bold text-black">{item?.name}</div>
            <p className="text-normal text-green-600">RS {item?.price}/-</p>
            <button className="w-full py-1 bg-blue-600 text-white font-bold text-normal mt-2">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
