import React, { useState, useEffect } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  link: string;
}

const ResourceBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    console.log("Fetching blogs...");
    fetch("http://localhost:3000/api/blogs") // Adjust the URL as needed
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log("✅ Data:", data);
      });
  }, []);

  return (
    <section data-aos="fade-out" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          <span className="text-purple-600">Blogs</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Explore our latest blogs to stay updated with insights and stories
          from our community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <React.Fragment key={blog.id}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
                <h5 className="font-bold text-md mt-4">- {blog.author}</h5>
                <a
                  href={blog.link}
                  className="inline-block mt-4 text-purple-600 hover:underline"
                >
                  Read more
                </a>
              </div>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full object-cover rounded-lg shadow-md"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceBlogs;
