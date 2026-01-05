import React from 'react';
import './About.css';

// Type definitions
interface TeamMember {
  name: string;
  title: string;
  experience: string;
  email: string;
  linkedin?: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface Office {
  city: string;
  country: string;
  type: string;
  address: string;
}

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface PECOItem {
  letter: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  // Data
  const teamMembers: TeamMember[] = [
    {
      name: "David Thompson",
      title: "Head of Client Relations",
      experience: "12+ years experience",
      email: "david@idobro.com"
    },
    {
      name: "Elena Martinez",
      title: "Senior Immigration Attorney",
      experience: "15+ years experience",
      email: "elena@idobro.com"
    },
    {
      name: "Dr. Sarah Chen",
      title: "Legal Director",
      experience: "18+ years experience",
      email: "sarah@idobro.com"
    },
    {
      name: "Sankalp",
      title: "Innovation Lead",
      experience: "3+ years experience",
      email: "ss@gmail.com"
    },
    {
      name: "Ankita",
      title: "Program Manager",
      experience: "2+ years experience",
      email: "jangalisankalp@gmail.com"
    }
  ];

  const stats: StatItem[] = [
    { number: "7", label: "Countries Reached" },
    { number: "24", label: "Indian States" },
    { number: "1M+", label: "Lives Impacted" },
    { number: "40+", label: "Strategic Partners" },
    { number: "250K+", label: "Students Sensitized" },
    { number: "5K+", label: "Entrepreneurs Supported" }
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2008",
      title: "Foundation",
      description: "Idobro Impact Solutions was founded with a vision to create sustainable change through human-centric approaches."
    },
    {
      year: "2012",
      title: "Framework Development",
      description: "Developed the PECO-SYSTEM framework, integrating People, Environment, Community, and Organization for holistic impact."
    },
    {
      year: "2016",
      title: "Global Expansion",
      description: "Expanded operations internationally, establishing offices in Sweden and the United Kingdom."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to global challenges by leveraging digital platforms to continue our impact during the pandemic."
    },
    {
      year: "2024",
      title: "Milestone Achievement",
      description: "Reached 1M+ lives impacted across 7 countries, with 250K+ students sensitized and 5K+ entrepreneurs supported."
    }
  ];

  const offices: Office[] = [
    {
      city: "Mumbai",
      country: "India",
      type: "Headquarters",
      address: "Corporate Office, Mumbai, Maharashtra, India"
    },
    {
      city: "Stockholm",
      country: "Sweden",
      type: "Regional Office",
      address: "European Operations, Stockholm, Sweden"
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "Regional Office",
      address: "UK Operations, London, United Kingdom"
    }
  ];

  const countries: string[] = [
    "India", "Sweden", "United Kingdom", "USA", "Canada", "Australia", "Singapore"
  ];

  const riseValues: ValueItem[] = [
    {
      icon: "🤝",
      title: "Responsible",
      description: "We take ownership of our actions and their impact on society and the environment, ensuring accountability in all our endeavors."
    },
    {
      icon: "🌍",
      title: "Inclusive",
      description: "We embrace diversity and ensure that our solutions benefit all stakeholders, leaving no one behind in our journey toward progress."
    },
    {
      icon: "♻️",
      title: "Sustainable",
      description: "We create solutions that meet present needs while preserving resources and opportunities for future generations."
    },
    {
      icon: "🌱",
      title: "Eco-friendly",
      description: "We consider the broader ecosystem impact of our actions, promoting harmony between human development and environmental preservation."
    }
  ];

  const pecoFramework: PECOItem[] = [
    {
      letter: "P",
      title: "Partners",
      description: "Emphasizing collaboration across various sectors including government, corporations, NGOs, academia, and local communities to create synergistic solutions."
    },
    {
      letter: "E",
      title: "Entrepreneurs",
      description: "Supporting social and green enterprises, with special focus on women entrepreneurs, providing them with platforms and resources to scale their impact."
    },
    {
      letter: "C",
      title: "Citizens",
      description: "Fostering individual participation and ownership in creating a better world, empowering citizens to become active changemakers in their communities."
    },
  ];

  // Navigation component
  

  // Hero component
  const Hero: React.FC = () => (
    <section className="hero">
      <div className="container">
        <h1>About Idobro</h1>
        <p>Multiply Your Impact Through Human-Centric Solutions for Purpose, Profit & Peace</p>
      </div>
    </section>
  );

  // Stats component
  const StatsGrid: React.FC<{ stats: StatItem[] }> = ({ stats }) => (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  // Team component
  const TeamGrid: React.FC<{ members: TeamMember[] }> = ({ members }) => (
    <div className="team-grid">
      {members.map((member, index) => (
        <div key={index} className="team-card">
          <div className="team-info">
            <div className="team-name">{member.name}</div>
            <div className="team-title">{member.title}</div>
            <div className="team-experience">{member.experience}</div>
            <a href={`mailto:${member.email}`} className="team-email">
              {member.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // Timeline component
  const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );

  // Values component
  const ValuesGrid: React.FC<{ values: ValueItem[] }> = ({ values }) => (
    <div className="values-grid">
      {values.map((value, index) => (
        <div key={index} className="value-card">
          <h4>{value.icon} {value.title}</h4>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );

  // PECO component
  const PECOGrid: React.FC<{ items: PECOItem[] }> = ({ items }) => (
    <div className="peco-grid">
      {items.map((item, index) => (
        <div key={index} className="peco-card">
          <div className="peco-icon">{item.letter}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );

  // Main component return
  return (
    <div className="about-page">
      
      <Hero />

      <main className="main-content container">
        {/* Company Story */}
        <section className="section">
          <h2>Our Story</h2>
          <div className="two-column">
            <div>
              <p className="large-text">
                For over 16 years, Idobro Impact Solutions has been at the forefront of creating meaningful change through human-centric solutions. We believe that the world's most pressing challenges require a paradigm shift in mindset and action, with broad-based participation from all stakeholders.
              </p>
              <p className="medium-text">
                Our journey began with a simple yet powerful idea: that sustainable development can only be achieved when we consider ecosystem-wide consequences while being contextualised to local requirements. Today, we operate across 7 countries and 24 Indian states, transforming lives and communities through our innovative approach.
              </p>
              <p className="medium-text">
                We employ a systems approach and people-powered innovations to solve global challenges, always keeping human dignity and empowerment at the center of everything we do.
              </p>
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dhs64xefe/image/upload/v1757831861/Website_Homepage_Images_25_vytt6j.png" 
                alt="Idobro Impact" 
                className="story-image"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
          <h2>Our Mission & Vision</h2>
          <div className="mission-vision">
            <div className="card">
              <h4>🎯 Our Mission</h4>
              <p>Build value-based ecosystems through stakeholder engagement for Purpose, Profit and Peace</p>
            </div>
            <div className="card">
              <h4>🌟 Our Vision</h4>
              <p>A Shared World driven by the RISE values - Responsible, Inclusive, Sustainable and Eco(system) friendly</p>
            </div>
          </div>
        </section>

        {/* RISE Values */}
        <section className="section">
          <h2>Our RISE Values</h2>
          <p className="section-description">
            These core values drive our vision and mission, guiding every decision and action we take.
          </p>
          <ValuesGrid values={riseValues} />
        </section>

        {/* PECO-SYSTEM Framework */}
        <section className="section">
          <h2>The PECO-SYSTEM Framework</h2>
          <p className="section-description">
            Our holistic approach integrates People, Environment, Community, and Organization to create sustainable impact ecosystems.
          </p>
          <PECOGrid items={pecoFramework} />
        </section>

        {/* Global Impact */}
        <section className="section">
          <h2>Our Global Impact</h2>
          <p className="section-description">
            Over 16+ years, we've created measurable impact across multiple continents and communities.
          </p>
          <StatsGrid stats={stats} />
        </section>

        {/* Global Presence */}
        <section className="section">
          <h2>Our Global Presence</h2>
          <div className="two-column">
            <div>
              <h3>🌏 International Offices</h3>
              <div className="offices-list">
                {offices.map((office, index) => (
                  <div key={index} className="office-item">
                    <strong>{office.city}, {office.country} ({office.type})</strong><br />
                    {office.address}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>🗺️ Countries We Serve</h3>
              <div className="countries-list">
                {countries.map((country, index) => (
                  <span key={index} className="country-tag">{country}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section">
          <h2>Our Leadership Team</h2>
          <p className="section-description">
            Meet the passionate leaders driving our mission forward across the globe.
          </p>
          <TeamGrid members={teamMembers} />
        </section>

        {/* Company Timeline */}
        <section className="section">
          <h2>Our Journey</h2>
          <Timeline items={timeline} />
        </section>
      </main>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Impact Together?</h2>
          <p className="cta-description">
            Join our network of partners and changemakers who are driving sustainable social impact across communities worldwide.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Partner with Us</a>
            <a href="#" className="btn btn-secondary">Download Impact Report</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;