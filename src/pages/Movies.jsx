import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          search.trim()
            ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
                search
              )}`
            : "https://api.tvmaze.com/shows"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch shows");
        }

        const data = await response.json();

        if (search.trim()) {
          setShows(data.map((item) => item.show));
        } else {
          setShows(data);
        }
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchShows, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <p className="text-blue-500 font-semibold mb-3">
          EXPLORE & DISCOVER
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Movies & TV Shows
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Search through thousands of movies and TV shows to find something
          worth watching.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search for a movie or TV show..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
        />
      </div>

      {loading && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            Loading shows...
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="text-center py-20">
          <p className="text-red-400 text-lg">
            {error}
          </p>
        </div>
      )}

      {!loading && !error && shows.length > 0 && (
        <>
          <p className="text-gray-400 mb-5">
            {search.trim()
              ? `${shows.length} result${
                  shows.length !== 1 ? "s" : ""
                } found`
              : `${shows.length} shows available`}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {shows.map((show) => (
              <MovieCard key={show.id} show={show} />
            ))}
          </div>
        </>
      )}

      {!loading && !error && shows.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No movies or shows found.
          </p>
        </div>
      )}
    </main>
  );
};

export default Movies;