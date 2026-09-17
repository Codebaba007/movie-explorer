import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950/95 backdrop-blur border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          Movie<span className="text-blue-500">Explorer</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 sm:px-4 py-2 transition"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-5 py-2.5 rounded-lg transition"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;