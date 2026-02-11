import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

function ProductDetail() {
  const { id } = useParams();
  const { product, qty, setQty, loading } = useGetOneProduct(id);

  if (loading) {
    return (
      <div className="my-20 text-center font-jetbrains">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="my-20 text-center font-jetbrains">
        Product not found
      </div>
    );
  }
  return (
    <>
      <div className="bg-gray-100 py-2 w-full font-jetbrains">
        <div className="max-w-[90%] lg:max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <Link to="/products" className="text-black hover:text-gray-700">
            Products
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <p className="text-black">{product.category}</p>
        </div>
      </div>

      <div className="my-10 max-w-[90%] lg:max-w-7xl mx-auto font-jetbrains">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="border border-gray-300 p-2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-105 object-contain bg-white"
            />
          </div>

          <div className="w-full">
            <h3 className="text-sm uppercase text-gray-600">
              {product.category}
            </h3>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-500">
              ${product.price} × {qty}
            </p>
            <h1 className="text-xl font-semibold mt-2">
              ${(product.price * qty).toFixed(2)}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <div className="flex items-center border border-gray-300 rounded w-32 justify-between px-2 py-2">
                <button
                  onClick={() => setQty((p) => (p > 1 ? p - 1 : 1))}
                  className="p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>

                <span className="text-sm font-semibold">{qty}</span>

                <button onClick={() => setQty((p) => p + 1)} className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>

              <button className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition">
                Add to Cart
              </button>

              <button
                onClick={() =>
                  window.open("https://pay.ababank.com/oRF8/p465tpgc", "_blank")
                }
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:opacity-90 transition"
              >
                Buy now
              </button>
            </div>

            <hr className="my-6" />

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
