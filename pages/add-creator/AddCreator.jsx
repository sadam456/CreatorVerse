import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client.js";
import BackButton from "../../components/BackButton/back-button.jsx";

export default function AddCreator({ setCreators }) {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: "",
  });
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .insert([formData])
      .select();

    if (error) {
      setError("Error inserting data");
    } else {
      setError(null);
      setCreators((prevCreators) => [...prevCreators, data[0]]);
      navigate("/show-creators");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="bg-white text-gray-900 rounded-lg shadow-xl p-8 mt-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Add a Creator</h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g.: Ed Sheeran"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
              <p className="mt-1 text-sm text-gray-500">
                Write or paste a few sentences about them.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Main Social Media URL
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g.: Youtube Channel, Instagram Page, etc."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Creator's Image URL
              </label>
              <input
                type="url"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g.: Google Images Image Address"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Add to Creatorverse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
