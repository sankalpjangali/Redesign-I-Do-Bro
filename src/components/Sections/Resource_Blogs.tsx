// BlogPublicPage.tsx
// Single file that fetches and renders blog layout
// Usage: <BlogPublicPage blogId="123" />

import React, { useEffect, useState } from 'react';

// Types
type ComponentType = 'image' | 'title' | 'text' | 'author';

interface ImageData {
  src: string;
  alt: string;
  width?: string;
}

interface TitleData {
  text: string;
  size: string;
  color: string;
}

interface TextData {
  text: string;
  size: string;
  color: string;
}

interface AuthorData {
  name: string;
  role: string;
  avatar: string;
}

type ComponentData = ImageData | TitleData | TextData | AuthorData;

interface LayoutComponent {
  id: string;
  type: ComponentType;
  data: ComponentData;
}

interface Blog {
  id: string;
  title: string;
  layout: LayoutComponent[];
}

interface BlogPublicPageProps {
  blogId?: string;
  useMockData?: boolean; // Option to use mock data for testing
}

const BlogPublicPage: React.FC<BlogPublicPageProps> = ({ blogId, useMockData = false }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      // If useMockData is true, use mock data for testing
      if (useMockData) {
        const mockBlog: Blog = {
          id: blogId || 'mock-id',
          title: "Sample Blog Post",
          layout: [
            {
              id: "img-1",
              type: "image",
              data: { 
                src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800", 
                alt: "Featured blog image" 
              } as ImageData
            },
            {
              id: "title-1",
              type: "title",
              data: { 
                text: "Welcome to My Amazing Blog", 
                size: "text-4xl", 
                color: "text-gray-900" 
              } as TitleData
            },
            {
              id: "text-1",
              type: "text",
              data: { 
                text: "This is a sample blog post demonstrating the drag-and-drop layout builder. You can customize every aspect of your blog posts using the admin builder interface.", 
                size: "text-lg", 
                color: "text-gray-700" 
              } as TextData
            },
            {
              id: "text-2",
              type: "text",
              data: { 
                text: "The layout system is flexible and powerful, allowing you to create beautiful blog posts with images, titles, content paragraphs, and author information. Each component can be styled individually to match your brand.", 
                size: "text-base", 
                color: "text-gray-600" 
              } as TextData
            },
            {
              id: "author-1",
              type: "author",
              data: { 
                name: "John Doe", 
                role: "Content Writer", 
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
              } as AuthorData
            }
          ]
        };
        
        setBlog(mockBlog);
        setLoading(false);
        return;
      }

      // Actual API call
      try {
        console.log('Fetching from:', `/api/blogs/${blogId}`);
        
        const response = await fetch(`/api/blogs/${blogId}`);
        
        // Check content type
        const contentType = response.headers.get('content-type');
        console.log('Content-Type:', contentType);
        console.log('Status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Blog not found (Status: ${response.status})`);
        }
        
        // Check if response is JSON
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Response is not JSON:', text.substring(0, 200));
          throw new Error('API returned invalid response. Please check your API endpoint.');
        }
        
        const data: Blog = await response.json();
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId, useMockData]);

  const renderComponent = (component: LayoutComponent) => {
    const { type, data } = component;

    switch (type) {
      case 'image': {
        const imageData = data as ImageData;
        return (
          <div className="w-full mb-6">
            <img 
              src={imageData.src} 
              alt={imageData.alt} 
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        );
      }
      
      case 'title': {
        const titleData = data as TitleData;
        return (
          <h1 className={`font-bold ${titleData.size} ${titleData.color} mb-6`}>
            {titleData.text}
          </h1>
        );
      }
      
      case 'text': {
        const textData = data as TextData;
        return (
          <p className={`${textData.size} ${textData.color} leading-relaxed mb-6`}>
            {textData.text}
          </p>
        );
      }
      
      case 'author': {
        const authorData = data as AuthorData;
        return (
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
            <img 
              src={authorData.avatar} 
              alt={authorData.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{authorData.name}</p>
              <p className="text-sm text-gray-600">{authorData.role}</p>
            </div>
          </div>
        );
      }
      
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="text-sm text-gray-500 bg-gray-100 p-4 rounded-lg text-left">
            <p className="font-semibold mb-2">Troubleshooting:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check if your API endpoint exists at /api/blogs/{blogId || 'ID'}</li>
              <li>Verify the API returns JSON format</li>
              <li>Open browser console for more details</li>
              <li>Try using useMockData prop for testing</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Blog not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {blog.layout && blog.layout.length > 0 ? (
            blog.layout.map((component) => (
              <div key={component.id}>
                {renderComponent(component)}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-12">No content available</p>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPublicPage;


// ============================================
// USAGE EXAMPLES
// ============================================

// Example 1: Use with mock data (for testing without API)
/*
import BlogPublicPage from '@/components/BlogPublicPage';

export default function Page() {
  return <BlogPublicPage useMockData={true} />;
}
*/

// Example 2: Next.js App Router with real API
/*
import BlogPublicPage from '@/components/BlogPublicPage';

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPublicPage blogId={params.id} />;
}
*/

// Example 3: Next.js Pages Router
/*
import { useRouter } from 'next/router';
import BlogPublicPage from '@/components/BlogPublicPage';

export default function BlogPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Use mock data while testing
  return <BlogPublicPage blogId={id as string} useMockData={true} />;
}
*/