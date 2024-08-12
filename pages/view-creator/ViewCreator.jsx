import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Edit, ArrowLeft } from "lucide-react";

export default function ViewCreator({ creators }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let creator = creators.find((creator) => creator.id == id);

  if (!creator) {
    navigate("/");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 text-white"
    >
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center space-x-2 text-white bg-orange-700 hover:bg-orange-600 transition-colors duration-300 font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                {creator.name}
              </h1>
            </a>
            <p className="text-xl text-gray-300 leading-relaxed">
              {creator.description}
            </p>
            <Link
              to={`/edit-creator/${creator.id}#edit`}
              className="inline-flex items-center space-x-2 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Edit size={20} />
              <span>Edit Creator</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative group"
          >
            <img
              src={creator.imageURL}
              alt={creator.name}
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Visit Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
