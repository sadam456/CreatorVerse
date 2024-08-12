import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center space-x-2 text-white bg-red-700 hover:bg-orange-600 transition-colors duration-300 font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl"
    >
      <ArrowLeft size={20} />
      <span>Back to Home</span>
    </button>
  );
};

export default BackButton;
