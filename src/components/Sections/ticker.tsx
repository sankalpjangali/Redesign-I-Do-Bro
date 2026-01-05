import React, { useState,useEffect } from "react";

interface NewsItem {
  title: string;
  link: string;
}

interface TickerProps {
  newsItems?: NewsItem[];
  defaultSpeed?: number;
}

export default function TickerDemo({
  newsItems: propNewsItems,
  defaultSpeed = 30,
}: TickerProps) {
  const [speed, setSpeed] = useState<number>(defaultSpeed);
  const [isPaused, setIsPaused] = useState<boolean>(false);
const [live_news,setLiveNews] = useState([]);
useEffect(() => {
  fetch("https://backend-idobro.onrender.com/api/live_news")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Testimonials:", data);
      setLiveNews(data);
    });
}, []);
  // ✅ Default news items
  const defaultNewsItems: NewsItem[] = [
    { title: "New Event Launch", link: "/events/new" },
    { title: "Scholarship Program Announced", link: "/scholarships" },
    { title: "Community Meet 2025", link: "/community-meet" },
  ];

  // ✅ Use prop items if provided, else default ones
  const newsItems = live_news.length > 0 ? live_news : defaultNewsItems;

  return (
    <div className="w-full bg-black overflow-hidden border-t border-b border-red-600">
      {/* Header */}
      <div className="bg-red-600 px-4 py-2">
        <span className="text-white font-bold text-sm uppercase tracking-wider">
          🔴 Live News
        </span>
      </div>

      {/* Scrolling News */}
      <div
        className="relative overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: isPaused ? "none" : `scroll ${speed}s linear infinite`,
          }}
        >
          {[...newsItems, ...newsItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-white text-base mx-8"
            >
              <a
                href={item.link}
                className="hover:underline hover:text-blue-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
              <span className="mx-8 text-red-500">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
