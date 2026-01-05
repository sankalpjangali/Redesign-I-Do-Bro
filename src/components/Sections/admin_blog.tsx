import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown, Trash2, Plus, Eye, Edit, ImageIcon, Type, User, FileText, GripVertical } from 'lucide-react';

// ============================================
// MOCK BACKEND (In-Memory Storage with Sample Data)
// ============================================
const MockBackend = (() => {
  const blogs = new Map();
  let idCounter = 1;

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Initialize with sample data
  const sampleBlog = {
    id: 'blog_sample',
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    layout: [
      {
        id: 'comp_1',
        type: 'title',
        data: { text: 'Welcome to React Development' }
      },
      {
        id: 'comp_2',
        type: 'author',
        data: { name: 'John Doe', date: 'November 10, 2024' }
      },
      {
        id: 'comp_3',
        type: 'image',
        data: {
          url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
          alt: 'React Logo',
          caption: 'React - A JavaScript library for building user interfaces'
        }
      },
      {
        id: 'comp_4',
        type: 'text',
        data: {
          content: 'React is a powerful JavaScript library that makes building interactive user interfaces simple and efficient. It allows developers to create reusable components that manage their own state.'
        }
      },
      {
        id: 'comp_5',
        type: 'text',
        data: {
          content: 'Whether you\'re building a small widget or a large-scale application, React provides the tools and patterns you need to succeed. Its component-based architecture promotes code reusability and maintainability.'
        }
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  blogs.set(sampleBlog.id, sampleBlog);
  idCounter = 2;

  return {
    createBlog: (title, layout) => {
      const id = `blog_${idCounter++}`;
      const slug = generateSlug(title);
      const blog = {
        id,
        title,
        slug,
        layout,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      blogs.set(id, blog);
      return { blogId: id, slug };
    },

    getBlog: (id) => {
      const blog = blogs.get(id);
      if (!blog) throw new Error('Blog not found');
      return blog;
    },

    getAllBlogs: () => {
      return Array.from(blogs.values());
    },

    updateBlog: (id, title, layout) => {
      const blog = blogs.get(id);
      if (!blog) throw new Error('Blog not found');
      blog.title = title;
      blog.layout = layout;
      blog.updatedAt = new Date().toISOString();
      return blog;
    },

    deleteBlog: (id) => {
      return blogs.delete(id);
    }
  };
})();

// ============================================
// BLOG VIEWER COMPONENT
// ============================================
const BlogViewer = ({ blog, onBack }) => {
  const renderComponent = (component) => {
    switch (component.type) {
      case 'title':
        return (
          <h1 key={component.id} className="text-4xl font-bold mb-6 text-gray-900">
            {component.data.text}
          </h1>
        );
      
      case 'author':
        return (
          <div key={component.id} className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              {component.data.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{component.data.name}</div>
              <div className="text-sm text-gray-500">{component.data.date}</div>
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div key={component.id} className="mb-8">
            <img
              src={component.data.url}
              alt={component.data.alt || 'Blog image'}
              className="w-full rounded-lg shadow-md"
            />
            {component.data.caption && (
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {component.data.caption}
              </p>
            )}
          </div>
        );
      
      case 'text':
        return (
          <div key={component.id} className="mb-6 text-gray-700 leading-relaxed">
            {component.data.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Editor
        </button>
        
        <article className="bg-white rounded-lg shadow-lg p-8">
          {blog.layout.map(renderComponent)}
        </article>
      </div>
    </div>
  );
};

// ============================================
// BLOG LIST COMPONENT
// ============================================
const BlogList = ({ onView, onEdit }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(MockBackend.getAllBlogs());
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No blogs yet. Create your first blog!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Saved Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-center hover:shadow-md transition-shadow">
          <div>
            <h3 className="font-semibold text-lg">{blog.title}</h3>
            <p className="text-sm text-gray-500">
              Created: {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onView(blog.id)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
              title="View"
            >
              <Eye size={20} />
            </button>
            <button
              onClick={() => onEdit(blog.id)}
              className="p-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
              title="Edit"
            >
              <Edit size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================
// COMPONENT SELECTOR
// ============================================
const ComponentSelector = ({ onSelect, onCancel }) => {
  const components = [
    { type: 'title', icon: Type, label: 'Title', description: 'Add a heading to your blog' },
    { type: 'author', icon: User, label: 'Author Info', description: 'Display author name and date' },
    { type: 'image', icon: ImageIcon, label: 'Image', description: 'Add an image with caption' },
    { type: 'text', icon: FileText, label: 'Text', description: 'Add a paragraph of text' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
        <h3 className="text-2xl font-bold mb-4">Select Component Type</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {components.map((comp) => (
            <button
              key={comp.type}
              onClick={() => onSelect(comp.type)}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-2">
                <comp.icon size={24} className="text-blue-600" />
                <span className="font-semibold">{comp.label}</span>
              </div>
              <p className="text-sm text-gray-600">{comp.description}</p>
            </button>
          ))}
        </div>
        <button
          onClick={onCancel}
          className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// ============================================
// COMPONENT EDITOR
// ============================================
const ComponentEditor = ({ type, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    text: '',
    name: '',
    date: '',
    url: '',
    alt: '',
    caption: '',
    content: ''
  });
  const handleSave = () => {
  let isValid = false;

  switch (type) {
    case 'title':
      isValid = !!(formData.text && formData.text.trim() !== "");
      break;
    case 'author':
      isValid = !!(
        formData.name &&
        formData.name.trim() !== "" &&
        formData.date &&
        formData.date.trim() !== ""
      );
      break;
    case 'image':
      isValid = !!(formData.url && formData.url.trim() !== "");
      break;
    case 'text':
      isValid = !!(formData.content && formData.content.trim() !== "");
      break;
  }

  if (isValid) {
    onSave(formData);
  } else {
    alert("Please fill in all required fields");
  }
};
  // const handleSave = () => {
  //   let isValid = false;
    
  //   switch (type) {
  //     case 'title':
  //       isValid = formData.text && formData.text.trim();
  //       break;
  //     case 'author':
  //       isValid = formData.name && formData.name.trim() && formData.date && formData.date.trim();
  //       break;
  //     case 'image':
  //       isValid = formData.url && formData.url.trim();
  //       break;
  //     case 'text':
  //       isValid = formData.content && formData.content.trim();
  //       break;
  //   }

  //   if (isValid) {
  //     onSave(formData);
  //   } else {
  //     alert('Please fill in all required fields');
  //   }
  // };

  const renderFormFields = () => {
    switch (type) {
      case 'title':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">Title Text *</label>
            <input
              type="text"
              placeholder="Enter your title"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );
      
      case 'author':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Author Name *</label>
              <input
                type="text"
                placeholder="e.g., John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date *</label>
              <input
                type="text"
                placeholder="e.g., November 10, 2024"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Image URL *</label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Try: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Alt Text</label>
              <input
                type="text"
                placeholder="Description of the image"
                value={formData.alt}
                onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Caption</label>
              <input
                type="text"
                placeholder="Optional image caption"
                value={formData.caption}
                onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">Text Content *</label>
            <textarea
              placeholder="Enter your paragraph text here..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-40 resize-none"
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
        <h3 className="text-2xl font-bold mb-4 capitalize">Add {type}</h3>
        
        {renderFormFields()}

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            Add Component
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// DRAGGABLE COMPONENT ITEM
// ============================================
const DraggableComponent = ({ component, index, onDelete, onDragStart, onDragEnd, onDragOver, onDrop, isDragging }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'title': return <Type size={16} className="text-blue-600" />;
      case 'author': return <User size={16} className="text-green-600" />;
      case 'image': return <ImageIcon size={16} className="text-purple-600" />;
      case 'text': return <FileText size={16} className="text-orange-600" />;
      default: return null;
    }
  };

  const getPreviewText = () => {
    switch (component.type) {
      case 'title': return component.data.text;
      case 'author': return `${component.data.name} - ${component.data.date}`;
      case 'image': return component.data.url;
      case 'text': return component.data.content?.substring(0, 50) + '...';
      default: return '';
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      className={`p-4 border-2 rounded-lg bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all cursor-move ${
        isDragging ? 'opacity-50 border-blue-400' : 'border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <GripVertical size={20} className="text-gray-400 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {getIcon(component.type)}
              <span className="font-semibold text-sm text-gray-700 capitalize">
                {component.type}
              </span>
            </div>
            <p className="text-sm text-gray-500 truncate">
              {getPreviewText()}
            </p>
          </div>
        </div>
        <button
          onClick={() => onDelete(index)}
          className="p-2 hover:bg-red-100 text-red-600 rounded transition-colors flex-shrink-0"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

// ============================================
// MAIN BLOG BUILDER COMPONENT
// ============================================
export default function AllInOneBlogBuilder() {
  const [mode, setMode] = useState('builder');
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [layouts, setLayouts] = useState([]);
  const [saveStatus, setSaveStatus] = useState('');
  const [saving, setSaving] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleComponentTypeSelect = (type) => {
    setSelectedType(type);
    setShowSelector(false);
    setShowEditor(true);
  };

  const handleComponentSave = (data) => {
    const newComponent = {
      id: `comp_${Date.now()}`,
      type: selectedType,
      data
    };
    setLayouts([...layouts, newComponent]);
    setShowEditor(false);
    setSelectedType(null);
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      return;
    }

    const newLayouts = [...layouts];
    const [draggedItem] = newLayouts.splice(draggedIndex, 1);
    newLayouts.splice(dropIndex, 0, draggedItem);
    
    setLayouts(newLayouts);
    setDraggedIndex(null);
  };

  const deleteComponent = (index) => {
    if (confirm('Are you sure you want to delete this component?')) {
      setLayouts(layouts.filter((_, i) => i !== index));
    }
  };

  const saveLayout = async () => {
    if (!blogTitle.trim()) {
      alert('Please enter a blog title');
      return;
    }

    if (layouts.length === 0) {
      alert('Please add at least one component to your layout');
      return;
    }

    setSaving(true);
    setSaveStatus('Saving...');

    try {
      const result = currentBlogId
        ? MockBackend.updateBlog(currentBlogId, blogTitle, layouts)
        : MockBackend.createBlog(blogTitle, layouts);
      
      setSaveStatus(`✓ Saved successfully!`);
      
      if (!currentBlogId && result.blogId) {
        setCurrentBlogId(result.blogId);
      }
      
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      console.error('Error saving:', error);
      setSaveStatus('✗ Failed to save');
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const viewBlog = (blogId) => {
    try {
      const blog = MockBackend.getBlog(blogId);
      setCurrentBlogId(blogId);
      setMode('viewer');
    } catch (error) {
      alert('Blog not found');
    }
  };

  const editBlog = (blogId) => {
    try {
      const blog = MockBackend.getBlog(blogId);
      setBlogTitle(blog.title);
      setLayouts(blog.layout);
      setCurrentBlogId(blogId);
      setMode('builder');
    } catch (error) {
      alert('Blog not found');
    }
  };

  const previewBlog = () => {
    if (layouts.length === 0) {
      alert('Please add some components first');
      return;
    }
    setMode('viewer');
  };

  const resetForm = () => {
    setBlogTitle('');
    setLayouts([]);
    setCurrentBlogId(null);
    setMode('builder');
  };

  // VIEWER MODE
  if (mode === 'viewer') {
    const blog = currentBlogId 
      ? MockBackend.getBlog(currentBlogId)
      : { id: 'preview', title: blogTitle, layout: layouts };
    
    return <BlogViewer blog={blog} onBack={() => setMode('builder')} />;
  }

  // LIST MODE
  if (mode === 'list') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">All Blogs</h1>
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-md"
            >
              Create New
            </button>
          </div>
          <BlogList onView={viewBlog} onEdit={editBlog} />
        </div>
      </div>
    );
  }

  // BUILDER MODE
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentBlogId ? '✏️ Edit Blog' : '✨ Create Blog'}
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setMode('list')}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-white font-medium transition-colors shadow-sm"
            >
              📚 View All Blogs
            </button>
            {layouts.length > 0 && (
              <button
                onClick={previewBlog}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-white flex items-center gap-2 font-medium transition-colors shadow-sm"
              >
                <Eye size={16} /> Preview
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Builder */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700">Blog Title</label>
              <input
                type="text"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter your amazing blog title..."
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              onClick={() => setShowSelector(true)}
              className="w-full flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Plus size={20} /> Add Component
            </button>

            <div className="mt-6 space-y-3">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <GripVertical size={16} className="text-gray-400" />
                Components ({layouts.length}) - Drag to reorder
              </h3>
              {layouts.length === 0 ? (
                <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                  <FileText size={48} className="mx-auto mb-3 opacity-50" />
                  <p>No components yet</p>
                  <p className="text-sm">Click "Add Component" to get started</p>
                </div>
              ) : (
                layouts.map((component, index) => (
                  <DraggableComponent
                    key={component.id}
                    component={component}
                    index={index}
                    onDelete={deleteComponent}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    isDragging={draggedIndex === index}
                  />
                ))
              )}
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={saveLayout}
                disabled={saving}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
              >
                {saving ? '💾 Saving...' : currentBlogId ? '✓ Update Blog' : '💾 Save Blog'}
              </button>
              {currentBlogId && (
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  New Blog
                </button>
              )}
            </div>

            {saveStatus && (
              <div className={`mt-4 p-3 rounded-lg text-center font-semibold ${
                saveStatus.includes('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {saveStatus}
              </div>
            )}
          </div>

          {/* RIGHT: Live Preview */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">📱 Live Preview</h2>
            <div className="border-2 border-gray-200 rounded-lg p-6 min-h-[500px] bg-gray-50 overflow-auto max-h-[calc(100vh-200px)]">
              {blogTitle && (
                <h1 className="text-3xl font-bold mb-6 text-gray-900">{blogTitle}</h1>
              )}
              {layouts.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <Eye size={64} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Add components to see preview</p>
                  <p className="text-sm mt-2">Your blog will appear here as you build it</p>
                </div>
              ) : (
                layouts.map((component) => {
                  switch (component.type) {
                    case 'title':
                      return (
                        <h2 key={component.id} className="text-2xl font-bold mb-4 text-gray-900">
                          {component.data.text}
                        </h2>
                      );
                    case 'author':
                      return (
                        <div key={component.id} className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-300">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-semibold">
                            {component.data.name?.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-gray-900">{component.data.name}</div>
                            <div className="text-xs text-gray-500">{component.data.date}</div>
                          </div>
                        </div>
                      );
                    case 'image':
                      return (
                        <div key={component.id} className="mb-6">
                          <img
                            src={component.data.url}
                            alt={component.data.alt}
                            className="w-full rounded-lg shadow-md"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                            }}
                          />
                          {component.data.caption && (
                            <p className="text-xs text-gray-500 text-center mt-2 italic">
                              {component.data.caption}
                            </p>
                          )}
                        </div>
                      );
                    case 'text':
                      return (
                        <div key={component.id} className="mb-6 text-gray-700 leading-relaxed text-sm">
                          {component.data.content.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-3">{paragraph}</p>
                          ))}
                        </div>
                      );
                    default:
                      return null;
                  }
                })
              )}
            </div>
          </div>
        </div>

        {/* Modals */}
        {showSelector && (
          <ComponentSelector
            onSelect={handleComponentTypeSelect}
            onCancel={() => setShowSelector(false)}
          />
        )}

        {showEditor && (
          <ComponentEditor
            type={selectedType}
            onSave={handleComponentSave}
            onCancel={() => {
              setShowEditor(false);
              setSelectedType(null);
            }}
          />
        )}
      </div>
    </div>
  );
}