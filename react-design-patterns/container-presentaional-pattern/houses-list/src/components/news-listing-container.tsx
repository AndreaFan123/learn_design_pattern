import React from "react";
import { Article } from "../types/news";
import NewsHeadline from "./news-headline";

export default function NewsListingContainer() {
  const [newsHeadlinesData, setNewsHeadlinesData] = React.useState<
    Article[] | null
  >([] || null);

  // Better move this to .env file and use process.env.API_KEY and add .env to .gitignore
  const API_KEY = "YOUR_API_KEY";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const fetchNewsHeadlines = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setNewsHeadlinesData(data.articles);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  React.useEffect(() => {
    fetchNewsHeadlines();
  }, []);

  return (
    <section className="flex flex-col gap-5 py-5">
      <h1 className="text-3xl font-bold text-center">Top Headlines Today</h1>
      <div className="grid lg:grid-cols-4 gap-6">
        {newsHeadlinesData
          ? newsHeadlinesData
              .filter((item) => item.source.name !== "[Removed]")
              ?.map((headline) => (
                <NewsHeadline headline={headline} key={headline.source.id} />
              ))
          : null}
      </div>
    </section>
  );
}
