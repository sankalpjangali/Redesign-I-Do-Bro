import { useState, useEffect } from "react";
enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}
type ContentType = "reflections" | "News" | "Reports" | "Citizenship_Program" | "Team"| "Citizenship_stories"|"Partners"|"Partners_voice"|"Partnership_success"|"Live_news" |"Flagships"|"CaseStudies";

type reflection = { _id?: string; id: string; title: string; description: string; author: string; imageUrl: string; link: string; createdAt?: Date; updatedAt?: Date };
type News = { _id?: string; id: string; title: string; description: string; link: string; imageUrl: string; createdAt?: Date; updatedAt?: Date };
type Flagships = {
  _id?: string;
  id: string;
  tag: string;
  tagColor?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  stats?: {
    value: string;
    label: string;
    icon: string;
  }[];
  features?: string[];
  buttonText?: string;
  buttonColor?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
type CaseStudies = {
  _id?: string;
  id: string;
  tag: string;
  tagColor?: string;
  title: string;
  subtitle?: string;
  description?: string;
  challenge:String;
  solution:String;
  imageUrl?: string;
  stats?: {
    value: string;
    label: string;
    icon: string;
  }[];
  features?: string[];
  buttonText?: string;
  buttonColor?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
type Report = { _id?: string; id: string; tag:string;title: string; description: string; pdf_link: string; createdAt?: Date; updatedAt?: Date };
type Citizenship_Program = { _id?: string; id: string; title: string; description: string; imageUrl: string; createdAt?: Date; updatedAt?: Date };
type Team = { _id?: string; id: string; name: string; designation: string; email: string; imageUrl: string; experiance: number ; linkedinUrl: string; createdAt?: Date; updatedAt?: Date };
type Citizenship_Story = { _id?: string; id: string; name: string; location: string; program: string; quote: string; createdAt?: Date; updatedAt?: Date };
type Partners = { _id?: string; id: string; name: string; description: string; imageUrl: string; websiteUrl: string; createdAt?: Date; updatedAt?: Date };
type Partners_voice = { _id?: string; id: string; description: string; clientName: string; projectName: string;  createdAt?: Date; updatedAt?: Date };
type Live_news = { _id?: string; id: string; title: string; link: string;  createdAt?: Date; updatedAt?: Date };
type Partnership_success = { _id?: string; id: string; name: string; description: string; partner: string; imageUrl: string;  createdAt?: Date; updatedAt?: Date };
type ContentState = {
  reflections: reflection[];
  News: News[];
  Flagships: Flagships[];
  CaseStudies: CaseStudies[];
  Reports: Report[];
  Citizenship_Program: Citizenship_Program[];
  Team: Team[];
  Citizenship_stories: Citizenship_Story[];
  Partners: Partners[];
  Partners_voice: Partners_voice[];
  Live_news: Live_news[];
  Partnership_success: Partnership_success[];
};

// const API_URL = "https://backend-idobro.onrender.com"; // your backend URL
const API_URL= "http://localhost:3000";
const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState<ContentState>({
    reflections: [],
    News: [],
    Flagships: [],
    CaseStudies: [],
    Reports: [],
    Citizenship_Program: [],
    Team: [],
    Citizenship_stories: [],
    Partners: [],
    Partners_voice: [],
    Live_news: [],
    Partnership_success: [],
  });
  const [activeTab, setActiveTab] = useState<ContentType>("reflections");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
const handleCancel = () => {
  setIsModalOpen(false);   // close modal
  setEditingItem(null);   // clear edit data
  setFile(null);          // clear image file
  setPdfFile(null);       // clear pdf file (if any)
};
  
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
           onSubmit={async (e) => {
    e.preventDefault();

    // @ts-ignore
    const username = e.target.username.value;
    // @ts-ignore
    const password = e.target.password.value;

    try {
      const res = await fetch(
        `${API_URL}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json(); // { success: true | false }

      if (data.success === true) {
        setIsLoggedIn(true);
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
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
      case "reflections":
        return (
          <tbody>
            {content.reflections.map((item) => (
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
      case "Flagships":
        return (
          <tbody>
            {content.Flagships.map((item) => (
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
      case "CaseStudies":
        return (
          <tbody>
            {content.CaseStudies.map((item) => (
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
      case "Live_news":
        return (
          <tbody>
            {content.Live_news.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.link}</td>
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
case "Flagships":
  formData.append("id", form.id.value);

  formData.append("tag", form.tag.value);
  formData.append("tagColor", form.tagColor.value);

  formData.append("title", form.title.value);
  formData.append("subtitle", form.subtitle.value);

  formData.append("description", form.description.value);
  formData.append("challenge", form.challenge.value);
  formData.append("solution", form.solution.value);

  // Image upload
  if (file) {
    formData.append("imageUrl", file); // must match multer.single("imageUrl")
  }

  // Stats (send as JSON string)
  formData.append(
    "stats",
    JSON.stringify([
      {
        value: form.statValue1.value,
        label: form.statLabel1.value,
        icon: form.statIcon1.value,
      },
      {
        value: form.statValue2.value,
        label: form.statLabel2.value,
        icon: form.statIcon2.value,
      },
      {
        value: form.statValue3.value,
        label: form.statLabel3.value,
        icon: form.statIcon3.value,
      },
      {
        value: form.statValue4.value,
        label: form.statLabel4.value,
        icon: form.statIcon4.value,
      },
    ])
  );

  // Features (send as JSON string)
  formData.append(
    "features",
    JSON.stringify([
      form.feature1.value,
      form.feature2.value,
      form.feature3.value,
      form.feature4.value,
    ])
  );

  formData.append("buttonText", form.buttonText.value);
  formData.append("buttonColor", form.buttonColor.value);

  break;

 

      case "CaseStudies":
  formData.append("id", form.id.value);

  formData.append("tag", form.tag.value);
  formData.append("tagColor", form.tagColor.value);

  formData.append("title", form.title.value);
  formData.append("subtitle", form.subtitle.value);

  formData.append("description", form.description.value);
  formData.append("challenge", form.challenge.value);
  formData.append("solution", form.solution.value);

  // Image upload
  if (file) {
    formData.append("imageUrl", file); // must match multer.single("imageUrl")
  }

  // Stats (send as JSON string)
  formData.append(
    "stats",
    JSON.stringify([
      {
        value: form.statValue1.value,
        label: form.statLabel1.value,
        icon: form.statIcon1.value,
      },
      {
        value: form.statValue2.value,
        label: form.statLabel2.value,
        icon: form.statIcon2.value,
      },
      {
        value: form.statValue3.value,
        label: form.statLabel3.value,
        icon: form.statIcon3.value,
      },
      {
        value: form.statValue4.value,
        label: form.statLabel4.value,
        icon: form.statIcon4.value,
      },
    ])
  );

  // Features (send as JSON string)
  formData.append(
    "features",
    JSON.stringify([
      form.feature1.value,
      form.feature2.value,
      form.feature3.value,
      form.feature4.value,
    ])
  );

  formData.append("buttonText", form.buttonText.value);
  formData.append("buttonColor", form.buttonColor.value);

  break;

      case "Reports":
        formData.append("id", form.id.value);
        formData.append("tag", form.tag.value);
        formData.append("title", form.title.value);
        formData.append("description", form.description.value);
       
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
      case "reflections":
        formData.append("id", form.id.value);
        formData.append("title", form.title.value);
        formData.append("description", form.description.value);
        formData.append("author", form.author.value);
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
      case "Live_news":
        formData.append("id", form.id.value);
        formData.append("title", form.title.value);
        formData.append("link", form.link.value);
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
      case "reflections":
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
            <input name="link" defaultValue={editingItem?.link} placeholder=" reflections Link " className="border w-full p-2 mb-2" required />
          </>
        );
      case "News":
        return (
          <>
             <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
            <textarea name="description" defaultValue={editingItem?.description} placeholder="Content" className="border w-full p-2 mb-2" required />
            <input name="link" defaultValue={editingItem?.link} placeholder=" News Link " className="border w-full p-2 mb-2" required />
          </>
        );
      case "Flagships":
  return (
    <>
      {/* ID */}
      <input
        name="id"
        defaultValue={editingItem?.id}
        placeholder="ID"
        className="border w-full p-2 mb-2"
        required
      />

      {/* Tag */}
      <input
        name="tag"
        defaultValue={editingItem?.tag}
        placeholder="Tag (e.g. Social Impact)"
        className="border w-full p-2 mb-2"
        required
      />

      {/* Tag Color */}
      <input
        name="tagColor"
        defaultValue={editingItem?.tagColor}
        placeholder="Tag Color (e.g. green)"
        className="border w-full p-2 mb-2"
      />

      {/* Title */}
      <input
        name="title"
        defaultValue={editingItem?.title}
        placeholder="Title"
        className="border w-full p-2 mb-2"
        required
      />

      {/* Subtitle */}
      <input
        name="subtitle"
        defaultValue={editingItem?.subtitle}
        placeholder="Subtitle"
        className="border w-full p-2 mb-2"
      />
   

      {/* Description */}
      <textarea
        name="description"
        defaultValue={editingItem?.description}
        placeholder="Description"
        className="border w-full p-2 mb-2"
        rows={4}
      />

      {/* Image */}
      <input
        type="file"
        name="imageUrl"
        className="border w-full p-2 mb-2"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {editingItem?.imageUrl && (
        <img
          src={editingItem.imageUrl}
          alt="Current"
          className="w-32 h-20 object-cover mb-2"
        />
      )}

      {/* Stats */}
      <h4 className="font-semibold mt-3 mb-1">Stats</h4>

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            name={`statValue${i}`}
            defaultValue={editingItem?.stats?.[i - 1]?.value}
            placeholder="Value (e.g. 100+)"
            className="border w-full p-2"
          />
          <input
            name={`statLabel${i}`}
            defaultValue={editingItem?.stats?.[i - 1]?.label}
            placeholder="Label (e.g. Organizations)"
            className="border w-full p-2"
          />
          <input
            name={`statIcon${i}`}
            defaultValue={editingItem?.stats?.[i - 1]?.icon}
            placeholder="Icon name"
            className="border w-full p-2"
          />
        </div>
      ))}

      {/* Features */}
      <h4 className="font-semibold mt-3 mb-1">Key Outcomes / Features</h4>

      {[1, 2, 3, 4].map((i) => (
        <input
          key={i}
          name={`feature${i}`}
          defaultValue={editingItem?.features?.[i - 1]}
          placeholder={`Feature ${i}`}
          className="border w-full p-2 mb-2"
        />
      ))}

      {/* Button Text */}
      <input
        name="buttonText"
        defaultValue={editingItem?.buttonText}
        placeholder="Button Text (e.g. View Case Study)"
        className="border w-full p-2 mb-2"
      />

      {/* Button Color */}
      <input
        name="buttonColor"
        defaultValue={editingItem?.buttonColor}
        placeholder="Button Color (e.g. #22C55E)"
        className="border w-full p-2 mb-2"
      />
    </>
  );
      case "CaseStudies":
  return (
    <>
      {/* ID */}
      <input
        name="id"
        defaultValue={editingItem?.id}
        placeholder="ID"
        className="border w-full p-2 mb-2"
        required
      />

      {/* Tag */}
      <input
        name="tag"
        defaultValue={editingItem?.tag}
        placeholder="Tag (e.g. Social Impact)"
        className="border w-full p-2 mb-2"
        required
      />

      {/* Tag Color */}
      <input
        name="tagColor"
        defaultValue={editingItem?.tagColor}
        placeholder="Tag Color (e.g. green)"
        className="border w-full p-2 mb-2"
      />

      {/* Title */}
      <input
        name="title"
        defaultValue={editingItem?.title}
        placeholder="Title"
        className="border w-full p-2 mb-2"
        required
      />

      {/* Subtitle */}
      <input
        name="subtitle"
        defaultValue={editingItem?.subtitle}
        placeholder="Subtitle"
        className="border w-full p-2 mb-2"
      />

      {/* Description */}
      <textarea
        name="description"
        defaultValue={editingItem?.description}
        placeholder="Description"
        className="border w-full p-2 mb-2"
        rows={4}
      />
      <textarea
        name="challenge"
        defaultValue={editingItem?.challenge}
        placeholder="challenge"
        className="border w-full p-2 mb-2"
        rows={4}
      />
      <textarea
        name="solution"
        defaultValue={editingItem?.solution}
        placeholder="solution"
        className="border w-full p-2 mb-2"
        rows={4}
      />

      {/* Image */}
      <input
        type="file"
        name="imageUrl"
        className="border w-full p-2 mb-2"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {editingItem?.imageUrl && (
        <img
          src={editingItem.imageUrl}
          alt="Current"
          className="w-32 h-20 object-cover mb-2"
        />
      )}

      {/* Stats */}
      <h4 className="font-semibold mt-3 mb-1">Stats</h4>

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            name={`statValue${i}`}
            defaultValue={editingItem?.stats?.[i - 1]?.value}
            placeholder="Value (e.g. 100+)"
            className="border w-full p-2"
          />
          <input
            name={`statLabel${i}`}
            defaultValue={editingItem?.stats?.[i - 1]?.label}
            placeholder="Label (e.g. Organizations)"
            className="border w-full p-2"
          />
          <input
            name={`statIcon${i}`}
            defaultValue={editingItem?.stats?.[i - 1]?.icon}
            placeholder="Icon name"
            className="border w-full p-2"
          />
        </div>
      ))}

      {/* Features */}
      <h4 className="font-semibold mt-3 mb-1">Key Outcomes / Features</h4>

      {[1, 2, 3, 4].map((i) => (
        <input
          key={i}
          name={`feature${i}`}
          defaultValue={editingItem?.features?.[i - 1]}
          placeholder={`Feature ${i}`}
          className="border w-full p-2 mb-2"
        />
      ))}

      {/* Button Text */}
      <input
        name="buttonText"
        defaultValue={editingItem?.buttonText}
        placeholder="Button Text (e.g. View Case Study)"
        className="border w-full p-2 mb-2"
      />

      {/* Button Color */}
      <input
        name="buttonColor"
        defaultValue={editingItem?.buttonColor}
        placeholder="Button Color (e.g. #22C55E)"
        className="border w-full p-2 mb-2"
      />
    </>
  );

      case "Reports":
        return (
          <>
            <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="tag" defaultValue={editingItem?.tag} placeholder="Tag" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
            <input type="textarea" name="description" defaultValue={editingItem?.description} placeholder="Description" className="border w-full p-2 mb-2" required />
             
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
        case "Live_news":
        return (
          <>
           <input name="id" defaultValue={editingItem?.id} placeholder="ID" type="number" className="border w-full p-2 mb-2" required />
            <input name="title" defaultValue={editingItem?.title} placeholder="Title" className="border w-full p-2 mb-2" required />
            <input type="text" name="link" defaultValue={editingItem?.link} placeholder="Link" className="border w-full p-2 mb-2" required />
            
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
          {(["reflections", "News", "Reports", "Citizenship_Program","Team","Citizenship_stories","Partners","Partners_voice","Partnership_success","Live_news","Flagships","CaseStudies"] as ContentType[]).map((tab) => (
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg h-[85vh] flex flex-col">
    
    <form onSubmit={renderForm} className="flex flex-col h-full">

      {/* 🔽 THIS LINE MAKES IT SCROLLABLE */}
      <div className="flex-1 overflow-y-auto p-4">
        {renderModalFields()}
      </div>

      {/* Footer stays visible */}
      <div className="border-t p-4 flex justify-end gap-2">
        <button
        onClick={handleCancel} 
        type="button" className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
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
