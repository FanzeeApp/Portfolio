import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Biz bilan bog'lanib batavfsil ma'lumot oling.
        </p>
      </div>
    </div>
  );
};

export default React.memo(About);
