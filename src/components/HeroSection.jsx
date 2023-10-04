import data from "../assets/local-data/data.json";
import Card from "./Card";

function HeroSection() {
  console.log(data);
  return (
    <>
      <h3 className="text-2xl font-bold mt-4 p-0">Recommended For You</h3>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 mt-4">
        {data.map((item) => (
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

export default HeroSection;
