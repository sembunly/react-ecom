import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-10">
        <h1 className="text-3xl font-bold">About Trendy</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide modern, stylish, and comfortable fashion that fits
              everyday life while remaining affordable and accessible to
              everyone.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted fashion brand known for quality, simplicity,
              and trend-forward designs that inspire confidence.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Core Values</h2>
            <ul className="text-gray-700 space-y-2">
              <li>Quality in every product</li>
              <li>Customer satisfaction first</li>
              <li>Honest and fair pricing</li>
              <li>Modern and simple design</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
