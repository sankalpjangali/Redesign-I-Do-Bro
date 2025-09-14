import { useState, useEffect } from "react";
enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}
type ContentType = "Blogs" | "News" | "Reports" | "Citizenship_Program" | "Team"| "Citizenship_stories"|"Partners"|"Partners_voice"|"Partnership_success" ;

type Blog = { _id?: string; id: string; title: string; description: string; author: string; imageUrl: string; link: string; createdAt?: Date; updatedAt?: Date };
type News = { _id?: string; id: string; title: string; description: string; link: string; imageUrl: string; createdAt?: Date; updatedAt?: Date };
type Report = { _id?: string; id: string; title: string; imageUrl: string; pdf_link: string; createdAt?: Date; updatedAt?: Date };
type Citizenship_Program = { _id?: string; id: string; title: string; description: string; imageUrl: string; createdAt?: Date; updatedAt?: Date };
type Team = { _id?: string; id: string; name: string; designation: string; email: string; imageUrl: string; experiance: number ; linkedinUrl: string; createdAt?: Date; updatedAt?: Date };
type Citizenship_Story = { _id?: string; id: string; name: string; location: string; program: string; quote: string; createdAt?: Date; updatedAt?: Date };
type Partners = { _id?: string; id: string; name: string; description: string; imageUrl: string; websiteUrl: string; createdAt?: Date; updatedAt?: Date };
type Partners_voice = { _id?: string; id: string; description: string; clientName: string; projectName: string;  createdAt?: Date; updatedAt?: Date };
type Partnership_success = { _id?: string; id: string; name: string; description: string; partner: string; imageUrl: string;  createdAt?: Date; updatedAt?: Date };
type ContentState = {
  Blogs: Blog[];
  News: News[];
  Reports: Report[];
  Citizenship_Program: Citizenship_Program[];
  Team: Team[];
  Citizenship_stories: Citizenship_Story[];
  Partners: Partners[];
  Partners_voice: Partners_voice[];
  Partnership_success: Partnership_success[];
};

const API_URL = "https://backend-idobro.onrender.com"; // your backend URL

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState<ContentState>({
    Blogs: [],
    News: [],
    Reports: [],
    Citizenship_Program: [],
    Team: [],
    Citizenship_stories: [],
    Partners: [],
    Partners_voice: [],
    Partnership_success: [],
  });
  const [activeTab, setActiveTab] = useState<ContentType>("Blogs");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  
  // fetch on tab change
  useEffect(() => {
    fetchContent(activeTab);
  }, [activeTab]);

  const fetchContent = async (type: ContentType) => {
    const res = await fetch(`${API_URL}/api/${type}`);
    const data = await res.json();
    console.log(data);
    setContent((prev) => ({ ...prev, [type]: data }));
  };

  const handleAddOrEdit = async (formData: FormData) => {
    if (editingItem?._id) {
      // EDIT
      const res = await fetch(`${API_URL}/admin/update_${activeTab.toLocaleLowerCase()}/${editingItem._id}`, {
        method: "PUT",
         headers: { "Accept": "application/json" },
        body: formData,
      });

      const updated = await res.json();
      setContent((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].map((i: any) => (i._id === updated._id ? updated : i)),
      }));
    } else {
      // ADD
      const res = await fetch(`${API_URL}/admin/create_${activeTab.toLocaleLowerCase()}`, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });

      const updated = await res.json();
      setContent((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].map((i: any) => (i._id === updated._id ? updated : i)),
      }));
    } 
      
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await fetch(`${API_URL}/admin/delete_${activeTab.toLowerCase()}/${id}`, { method: "DELETE" });
    setContent((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((item: any) => item._id !== id),
    }));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // @ts-ignore
              const username = e.target.username.value;
              // @ts-ignore
              const password = e.target.password.value;
              if (username === "admin" && password === "admin123") {
                setIsLoggedIn(true);
              } else {
                alert("Invalid credentials");
              }
            }}
          >
            <input id="username" name="username" className="border w-full p-2 mb-2" placeholder="Username" />
            <input id="password" name="password" type="password" className="border w-full p-2 mb-4" placeholder="Password" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  // ========== TABLE RENDERING ==========
  const renderTable = () => {
    switch (activeTab) {
      case "Blogs":
        return (
          <tbody>
            {content.Blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>

                <td>
                 <button className="bg-blue-500 text-white m-2 py-1 px-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "News":
        return (
          <tbody>
            {content.News.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white m-2 py-1 px-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Reports":
        return (
          <tbody>
            {content.Reports.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                {/* <td>{item.imageUrl}</td> */}
                {/* <td>{item.pdf_link}</td> */}
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 m-2 px-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Citizenship_Program":
        return (
          <tbody>
            {content.Citizenship_Program.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 px-2 m-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Team":
        return (
          <tbody>
            {content.Team.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 px-2 m-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Citizenship_stories":
        return (
          <tbody>
            {content.Citizenship_stories.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.program}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 px-2 m-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Partners":
        return (
          <tbody>
            {content.Partners.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                {/* <td>{item.websiteUrl}</td> */}
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 px-2 m-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Partners_voice":
        return (
          <tbody>
            {content.Partners_voice.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.clientName}</td>
                <td>{item.description}</td>
                {/* <td>{item.projectName}</td> */}
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 px-2 m-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      case "Partnership_success":
        return (
          <tbody>
            {content.Partnership_success.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                {/* <td>{item.partner}</td> */}
                {/* <td>{item.imageUrl}</td> */}
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</td>
                <td>
                  <button className="bg-blue-500 text-white py-1 px-2 m-2 rounded" onClick={() => { setEditingItem(item); setIsModalOpen(true); }}>Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleDelete(item._id!)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        );
    }
  };

  // ========== FORM RENDERING ==========
  const renderForm = (e: any) => {
    e.preventDefault();
    const form = e.target;

      const formData = new FormData();

    switch (activeTab) {
      case "Blogs":
        formData.append("id", form.id.value);
        formData.append("title", form.title.value);
        formData.append("description", form.description.value);
        formData.append("author", form.author.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }

        formData.append("link", form.link.value);
        break;
      case "News":
        formData.append("id", form.id.value);
        formData.append("title", form.title.value);
        formData.append("description", form.description.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }
        formData.append("link", form.link.value);
        break;
      case "Reports":
        formData.append("id", form.id.value);
        formData.append("title", form.title.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }
        if (pdfFile) {
          formData.append("pdf_Link", pdfFile); // must match backend multer.single("pdf")
        }
        break;
      case "Citizenship_Program":
        formData.append("id", form.id.value);
        formData.append("title", form.title.value);
        formData.append("description", form.description.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }
        break;
      case "Team":
        formData.append("id", form.id.value);
        formData.append("name", form.name.value);
        formData.append("designation", form.designation.value);
        formData.append("experience", form.experience.value);
        formData.append("linkedinUrl", form.linkedinUrl.value);
        formData.append("email", form.email.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }
        break;
      case "Citizenship_stories":
        formData.append("id", form.id.value);
        formData.append("name", form.name.value);
        formData.append("location", form.location.value);
        formData.append("program", form.program.value);
        formData.append("quote", form.quote.value);
        break;
      case "Partners":
        formData.append("id", form.id.value);
        formData.append("name", form.name.value);
        formData.append("description", form.description.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }
        formData.append("websiteUrl", form.websiteUrl.value);
        break;
      case "Partners_voice":
        formData.append("id", form.id.value);
        formData.append("clientName", form.clientName.value);
        formData.append("projectName", form.projectName.value);
        formData.append("description", form.description.value);
        break;
        case "Partnership_success":
        formData.append("id", form.id.value);
        formData.append("name", form.name.value);
        formData.append("partner", form.partner.value);
        formData.append("description", form.description.value);
        if (file) {
          formData.append("imageUrl", file); // must match backend multer.single("image")
        }
        
        break;
    }
    handleAddOrEdit(formData);
  };

  const renderModalFields = () => {
    switch (activeTab) {
      case "Blogs":
        return (
          <>
            <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
            <textarea name="description" defaultValue={editingItem?.description} placeholder="Content" className="border w-full p-2 mb-2" required />
            <input name="author" defaultValue={editingItem?.author} placeholder="Author" className="border w-full p-2 mb-2" required />
            <input type="file" name="imageUrl" className="border w-full p-2 mb-2" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
              {editingItem?.imageUrl && (
              <img src={editingItem.imageUrl} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
            <input name="link" defaultValue={editingItem?.link} placeholder=" Blog Link " className="border w-full p-2 mb-2" required />
          </>
        );
      case "News":
        return (
          <>
             <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
            <textarea name="description" defaultValue={editingItem?.description} placeholder="Content" className="border w-full p-2 mb-2" required />
           <input type="file" name="imageUrl" className="border w-full p-2 mb-2" onChange={(e) => setFile(e.target.files?.[0] || null)} required/>
              {editingItem?.imageUrl && (
              <img src={editingItem.imageUrl} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
            <input name="link" defaultValue={editingItem?.link} placeholder=" News Link " className="border w-full p-2 mb-2" required />
          </>
        );
      case "Reports":
        return (
          <>
            <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
             <input type="file" name="imageUrl" className="border w-full p-2 mb-2" onChange={(e) => setFile(e.target.files?.[0] || null)} required/>
              {editingItem?.imageUrl && (
              <img src={editingItem.imageUrl} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
             <input type="file" name="pdf_link" className="border w-full p-2 mb-2" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} required/>
              {editingItem?.pdf_link && (
              <img src={editingItem.pdf_link} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
          </>
        );
      case "Citizenship_Program":
        return (
          <>
           <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
            <textarea name="description" defaultValue={editingItem?.description} placeholder="Content" className="border w-full p-2 mb-2" required />
             <input type="file" name="pdf_link" className="border w-full p-2 mb-2" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} required/>
              {editingItem?.pdf_link && (
              <img src={editingItem.pdf_link} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
          </>
        );
      case "Team":
        return (
          <>
           <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="name" defaultValue={editingItem?.name} placeholder="Name" className="border w-full p-2 mb-2" required />
            <input type="text" name="designation" defaultValue={editingItem?.designation} placeholder="designation" className="border w-full p-2 mb-2" required />
            <input type="number" name="experience" defaultValue={editingItem?.experience} placeholder="experience" className="border w-full p-2 mb-2" required />
            <input type="text" name="linkedinUrl" defaultValue={editingItem?.linkedinUrl} placeholder="linkedin" className="border w-full p-2 mb-2" required />
            <input type="text" name="email" defaultValue={editingItem?.email} placeholder="email" className="border w-full p-2 mb-2" required />
             <input type="file" name="imageUrl" className="border w-full p-2 mb-2" onChange={(e) => setFile(e.target.files?.[0] || null)} required/>
              {editingItem?.imageUrl && (
              <img src={editingItem.imageUrl} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
          </>
        );
      case "Citizenship_stories":
        return (
          <>
           <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="name" defaultValue={editingItem?.name} placeholder="Name" className="border w-full p-2 mb-2" required />
            <input type="text" name="location" defaultValue={editingItem?.location} placeholder="location" className="border w-full p-2 mb-2" required />
            <input type="text" name="program" defaultValue={editingItem?.program} placeholder="program" className="border w-full p-2 mb-2" required />
            <input type="text" name="quote" defaultValue={editingItem?.quote} placeholder="quote" className="border w-full p-2 mb-2" required />
          </>
        );
        case "Partners":
        return (
          <>
           <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="name" defaultValue={editingItem?.name} placeholder="Name" className="border w-full p-2 mb-2" required />
            <input type="text" name="description" defaultValue={editingItem?.description} placeholder="description" className="border w-full p-2 mb-2" required />
            <input type="text" name="websiteUrl" defaultValue={editingItem?.websiteUrl} placeholder="websiteUrl" className="border w-full p-2 mb-2" required />
             <input type="file" name="imageUrl" className="border w-full p-2 mb-2" onChange={(e) => setFile(e.target.files?.[0] || null)} required/>
              {editingItem?.imageUrl && (
              <img src={editingItem.imageUrl} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
          </>
        );
        case "Partners_voice":
        return (
          <>
           <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="clientName" defaultValue={editingItem?.clientName} placeholder="Client Name" className="border w-full p-2 mb-2" required />
            <input type="text" name="projectName" defaultValue={editingItem?.projectName} placeholder="Project Name" className="border w-full p-2 mb-2" required />
            <input type="text" name="description" defaultValue={editingItem?.description} placeholder="Description" className="border w-full p-2 mb-2" required />
          </>
        );
        case "Partnership_success":
        return (
          <>
             <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="name" defaultValue={editingItem?.name} placeholder="Name" className="border w-full p-2 mb-2" required />
            <input name="partner" defaultValue={editingItem?.partner} placeholder="Partner" className="border w-full p-2 mb-2" required />
            <textarea name="description" defaultValue={editingItem?.description} placeholder="Content" className="border w-full p-2 mb-2" required />
           <input type="file" name="imageUrl" className="border w-full p-2 mb-2" onChange={(e) => setFile(e.target.files?.[0] || null)} required/>
              {editingItem?.imageUrl && (
              <img src={editingItem.imageUrl} alt="Current" className="w-32 h-20 object-cover mb-2"  />
              )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Content Management</h1>

        {/* Tabs */}
        <nav className="flex space-x-4 border-b mb-6  overflow-x-auto whitespace-nowrap scrollbar-hide">
          {(["Blogs", "News", "Reports", "Citizenship_Program","Team","Citizenship_stories","Partners","Partners_voice","Partnership_success"] as ContentType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 font-medium ${
                activeTab === tab ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.replace("_", " ").toUpperCase()}
            </button>
          ))}
        </nav>

        <button
          onClick={() => {
            setEditingItem(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New
        </button>

        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          {renderTable()}
        </table>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded w-96">
            <h3 className="text-xl font-bold mb-4">{editingItem ? "Edit" : "Add"} {activeTab}</h3>
            <form onSubmit={renderForm}>
              {renderModalFields()}
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-400 px-4 py-2 rounded text-white">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
