import { useState, useEffect } from "react";

export default function Lab2() {
  const [data, setData] = useState("");

  const images = [
    "https://image-service-kappa.vercel.app/images/clothes/deel.jpg",
    "https://image-service-kappa.vercel.app/images/clothes/tsaatan-coat.png",
    "https://image-service-kappa.vercel.app/images/clothes/khadag.jpg",
    "https://image-service-kappa.vercel.app/images/clothes/zodog.jpg",
    "https://image-service-kappa.vercel.app/images/clothes/gutal.jpg",
    "https://image-service-kappa.vercel.app/images/clothes/khantaaz.jpg",
    "https://image-service-kappa.vercel.app/images/clothes/malgai.jpeg",
    "https://image-service-kappa.vercel.app/images/clothes/torgoo.jpeg",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data.clothes);

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap gap-6 justify-center w-full max-w-7xl">
        {data?.clothes?.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg p-4 w-60 hover:scale-105 transition-transform"
          >
            <img
              src={images[index]} 
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg text-black">{item.name}</h3>
            <h1 className="text-sm text-black my-5">{item.description}</h1>
            <h1 className="text-sm text-black my-5">{item.materials}</h1>
            <h1 className="text-sm text-black my-5">{item.timePeriod}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
