import React, { useEffect, useState } from "react";
import ringImage from "../../../assets/home/wlr20-04025.png";

const Collections = () => {
  const [jewelries, setJewelries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://moon-jewelry-server.vercel.app/jewelries")
      .then((res) => res.json())
      .then((data) => {
        setJewelries(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto p-5">
      <h2 className='text-center text-5xl font-["olivera"] mb-5'>
        Top Collections
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-[500px]">
          <span className="loading loading-spinner loading-lg text-ca-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {jewelries.map((item) => (
            <div className="">
              <div className="bg-gray-100 p-5">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="mt-3 uppercase">
                <p className="font-semibold uppercase text-lg">{item.name}</p>
                <p className="font-thin text-sm text-md">{item.code}</p>
                <p className="flex items-center font-semibold">৳{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
