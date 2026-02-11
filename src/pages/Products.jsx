import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import useGetAllProduct from "../hooks/useGetAllProduct";

function Products() {
  const { data, loading } = useGetAllProduct();

  if (loading) {
    return <div className="my-20 text-center font-jetbrains">Loading...</div>;
  }

  return (
    <div className="my-10 font-jetbrains max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
