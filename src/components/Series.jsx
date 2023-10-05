import Card from "./Card";
import data from "./assets/local-data/data.json";

function Series() {
  const series = data.filter((item) => item.category === "TV Series");

  return (
    <>
      <h3 className="text-2xl mt-10 mb-5 font-bold mt-4 p-0">Series</h3>
      <div className="flex flex-row flex-wrap gap-3">
        {series.map((item) => (
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

export default Series;
