type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
};

export type { NewsApiResponse, Article };
