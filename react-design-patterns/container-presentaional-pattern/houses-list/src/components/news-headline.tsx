import React from "react";
import { Article } from "../types/news";

interface NewsHeadlineProp {
  headline: Article;
}

export default function NewsHeadline({ headline }: NewsHeadlineProp) {
  const { title, description, url, urlToImage } = headline;
  return (
    <a href={url} className="w-full">
      <article className="border border-gray-300 rounded-md p-3">
        <h2 className="font-semibold text-xl">{title}</h2>
        {urlToImage ? (
          <picture>
            <img src={urlToImage} alt={description} />
          </picture>
        ) : null}
        <p>{description}</p>
      </article>
    </a>
  );
}
