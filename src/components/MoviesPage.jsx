import data from "./assets/local-data/data.json";
import Card from "./Card";

function MoviesPage() {
  const moviesData = data.filter((movie) => movie.category === "Movie");
  return (
    <>
      <h3 className="text-2xl mt-10 mb-5 font-bold mt-4 p-0">Movies</h3>
      <div className="flex flex-row flex-wrap gap-3">
        {moviesData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            img={item.thumbnail.regular.large}
            year={item.year}
            category={item.category}
            rating={item.rating}
            isBookmarked={item.isBookmarked}
            isTrending={item.isTrending}
          />
        ))}
      </div>
    </>
  );
}

export default MoviesPage;
