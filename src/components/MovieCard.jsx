import { useState } from "react";
import noPoster from "../assets/no-poster.jpg";

const MovieCard = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);

  const poster = show.image?.medium || noPoster;

  const originalPoster =
    show.image?.original ||
    show.image?.medium ||
    noPoster;

  return (
    <>
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition group">
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={poster}
            alt={show.name}
            onError={(event) => {
              event.currentTarget.src = noPoster;
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-4">
          <h2 className="font-semibold text-lg truncate mb-2">
            {show.name}
          </h2>

          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>
              ⭐ {show.rating?.average || "N/A"}
            </span>

            <span>
              {show.premiered
                ? show.premiered.substring(0, 4)
                : "Unknown"}
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            See Details
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-black flex justify-center">
              <img
                src={originalPoster}
                alt={show.name}
                onError={(event) => {
                  event.currentTarget.src = noPoster;
                }}
                className="w-full max-h-[70vh] object-contain"
              />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full text-xl"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                {show.name}
              </h2>

              <div className="flex flex-wrap gap-4 text-gray-300 mb-5">
                <span>
                  ⭐ {show.rating?.average || "N/A"}
                </span>

                <span>
                  📅 {show.premiered || "Unknown"}
                </span>

                <span>
                  🎭{" "}
                  {show.genres?.length
                    ? show.genres.join(", ")
                    : "Unknown"}
                </span>
              </div>

              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html:
                    show.summary ||
                    "<p>No description available.</p>",
                }}
              />

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;