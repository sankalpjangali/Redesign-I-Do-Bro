import React from "react";
import { useEffect,useState } from "react";
interface News{
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ResourceNews: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<News[]>([]);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      const response = await fetch("http://localhost:3000/api/news");
      const data = await response.json();
      setNewsArticles(data);
    };
    fetchNewsArticles();
  }, []);

  return (
  <section
  data-aos="fade-up"
  id="resources"
  className="relative h-[100%] lg:h-[80%] bg-gradient-to-br from-purple-700 via-purple-600 to-blue-400 pt-20"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>

    {/* Horizontal scroll container */}
    <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-200 pb-4">
      {newsArticles.map((article) => (
        <div
          key={article.id}
          className="flex-shrink-0 w-[300px] bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300"
        >
          <img
            src={`${article.imageUrl}`}
            alt={article.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
          <p className="text-gray-600 mb-4">{article.description}</p>
          <a href={article.link} className="text-purple-600 hover:underline">
            Read more
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};
export default ResourceNews;
