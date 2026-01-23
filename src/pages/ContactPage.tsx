import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Users,
  BookOpen,
  GraduationCap,
  School,
  Lightbulb,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#111827" }}>
            Let's Create Impact Together
          </h1>
          <p style={{ color: "#6b7280" }}>
            Reach out to explore partnership opportunities and learn how we can
            multiply your social impact.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2
                className="text-xl font-semibold mb-6"
                style={{ color: "#111827" }}
              >
                Get in Touch
              </h2>

              {/* Office Address */}
              <div className="flex items-start mb-6">
                <div
                  className="rounded-full p-3 mr-4"
                  style={{ backgroundColor: "#e9d5ff" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#9333ea" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#111827" }}
                  >
                    Office Address
                  </h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    123, East West Industrial Centre,
                    <br />
                    Mahakali Caves Road, Andheri,
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start mb-6">
                <div
                  className="rounded-full p-3 mr-4"
                  style={{ backgroundColor: "#d1fae5" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#059669" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#111827" }}
                  >
                    Email
                  </h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    info@ieden.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-6">
                <div
                  className="rounded-full p-3 mr-4"
                  style={{ backgroundColor: "#dbeafe" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "#2563eb" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#111827" }}
                  >
                    Phone
                  </h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    +91 22 2851 8880
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start">
                <div
                  className="rounded-full p-3 mr-4"
                  style={{ backgroundColor: "#fed7aa" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "#ea580c" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#111827" }}
                  >
                    Office Hours
                  </h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* We Can Help With */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2
                className="text-xl font-semibold mb-6"
                style={{ color: "#111827" }}
              >
                We Can Help With
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Users
                    className="w-5 h-5 mr-3"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ color: "#374151" }}>Partnership Inquiry</span>
                </div>
                <div className="flex items-center">
                  <BookOpen
                    className="w-5 h-5 mr-3"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ color: "#374151" }}>Entrepreneur Program</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap
                    className="w-5 h-5 mr-3"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ color: "#374151" }}>CSR Inquiry</span>
                </div>
                <div className="flex items-center">
                  <School
                    className="w-5 h-5 mr-3"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ color: "#374151" }}>School Program</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb
                    className="w-5 h-5 mr-3"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ color: "#374151" }}>General Inquiry</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: "#111827" }}
              >
                Send Us a Message
              </h2>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#374151" }}
                    >
                      Full Name <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "#d1d5db",
                        color: "#111827",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#374151" }}
                    >
                      Email Address <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "#d1d5db",
                        color: "#111827",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#374151" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "#d1d5db",
                        color: "#111827",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#374151" }}
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "#d1d5db",
                        color: "#111827",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#374151" }}
                  >
                    Inquiry Type <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#d1d5db",
                      color: "#374151",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="entrepreneur">Entrepreneur Program</option>
                    <option value="csr">CSR Inquiry</option>
                    <option value="school">School Program</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#374151" }}
                  >
                    Message <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none"
                    style={{
                      borderColor: "#d1d5db",
                      color: "#111827",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                  style={{
                    backgroundColor: "#9333ea",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#7e22ce")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#9333ea")
                  }
                >
                  Send Message
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full mt-8" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8266290161394!2d72.8638373!3d19.1291060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8340b5d8c65%3A0x4b8a0c5e9f9c8e8f!2sMahakali%20Caves%20Road%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        />
      </div>
    </div>
  );
};

export default ContactPage;
