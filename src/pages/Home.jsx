import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div className="my-20 text-center">Loading...</div>;
  }

  return (
    <div className="font-jetbrains">
      <div
  style={{ backgroundImage: "url('/logo-1.JPG')" }}
  className="flex items-center bg-center bg-cover bg-no-repeat h-screen px-4 lg:px-40">
        <div className="max-w-xl text-left lg:text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-2">
            New collection
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Summer Collection 2026
          </h1>

          <p className="mb-6 text-base lg:text-lg">
            Discover our latest summer collection with exclusive styles and
            comfort.
          </p>

          <Link
            to="/products"
            className="bg-black text-white px-8 py-2 rounded hover:opacity-80 transition mt-5 inline-block"
          >
            View Collection
          </Link>
        </div>
      </div>

      <div className="my-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Best Sellers</h2>

        <p className="text-center mb-10">Explore our most popular products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/products"
          className="bg-black text-white px-8 py-2 rounded hover:opacity-80 transition mt-5 inline-block"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}

export default Home;
