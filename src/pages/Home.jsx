import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Home = () => {
  return (
    <main>
      <section className="min-h-[calc(100vh-73px)] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <p className="text-blue-500 font-semibold tracking-widest mb-4">
                YOUR NEXT WATCH IS HERE
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Discover Your Next{" "}
                <span className="text-blue-500">
                  Favorite
                </span>{" "}
                Movie
              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Explore movies and TV shows, discover new favorites,
                and find something great to watch tonight.
              </p>

              <Link
                to="/movies"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition"
              >
                Explore Movies
                <span>→</span>
              </Link>
            </div>

            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Movie Explorer"
                className="w-full max-w-lg object-contain"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;