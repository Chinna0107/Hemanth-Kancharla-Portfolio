import React, { useState } from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  const [currentProject, setCurrentProject] = useState(0);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Chinnamart',
      description: 'A comprehensive e-commerce platform featuring full shopping cart functionality, product management, user authentication, and secure payment integration. Built with MERN stack for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      tech: ['React', 'Node.js', 'MongoDB'],
      details: 'Full-featured e-commerce solution with admin dashboard, inventory management, order tracking, and payment gateway integration.',
      link: 'https://chinnamart.in'
    },
    {
      title: 'Blood Donation System',
      description: 'A life-saving platform connecting blood donors with recipients. Features real-time donor availability, emergency requests, blood bank management, and automated notifications for urgent needs.',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800',
      tech: ['React', 'Express', 'MySQL'],
      details: 'Healthcare platform with real-time notifications, donor-recipient matching algorithm, and emergency request handling.',
      link: 'https://hk-blood-donation.vercel.app/'
    },
    {
      title: 'Fertilizer Management',
      description: 'Agricultural management system streamlining fertilizer distribution, inventory tracking, farmer registration, and order management. Helps optimize agricultural supply chain operations.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      tech: ['MERN Stack', 'REST API'],
      details: 'Complete agricultural supply chain solution with farmer portal, distributor management, and analytics dashboard.',
      link: 'https://dad-pacs.vercel.app/'
    },
    {
      title: 'Tobacco Export Company',
      description: 'Professional corporate website for tobacco export business featuring product catalog, international shipping information, compliance documentation, and client portal for order tracking.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      tech: ['React', 'Node.js'],
      details: 'Corporate website with product showcase, shipping calculator, and secure client portal for order management.',
      link: '#'
    },
    {
      title: 'Infrastructure Company Website',
      description: 'Modern website for infrastructure company showcasing projects, services, team profiles, and client testimonials. Features responsive design and interactive project galleries.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      tech: ['React', 'CSS3'],
      details: 'Professional corporate website with project portfolio, service pages, and team profiles with modern animations.',
      link: 'https://continentaldesignstudio.in/'
    },
    {
      title: 'Promoads Platform',
      description: 'Promotional advertising platform enabling businesses to create, manage, and track marketing campaigns. Includes analytics dashboard, ad management, and performance metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tech: ['MERN Stack', 'Analytics'],
      details: 'Marketing platform with campaign builder, analytics dashboard, performance tracking, and ROI calculation tools.',
      link: 'https://promoads.co.in'
    },
    {
      title: 'Aluris Global Trade',
      description: 'Premium Global Supplier which includes a wide range of high-quality Rice, Millets, and Spices.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20240719/pngtree-white-rice-and-paddy-rice-seed-on-wooden-table-organic-jasmine-image_15895691.jpg',
      tech: ['MERN Stack', 'Analytics'],
      details: 'Premium global supplier for high-quality rice, millets, and spices , which has the admin panel for edit and delete of products and their prices and adding of products.',
      link: 'https://alurisglobaltrade.com'
    },
    {
      title: 'TheAlphaZone',
      description: 'When fashion meet style and quality meet affordability, TheAlphaZone is the ultimate destination for fashion enthusiasts. With a wide range of trendy and high-quality clothing and foot wear, we bring you the latest styles at unbeatable prices.',
      image: 'https://www.techfunnel.com/wp-content/uploads/2019/07/Top-Benefits-of-ECommerce-for-Retailers-_-ECommerce-in-retail-1.png',
      tech: ['MERN Stack', 'Analytics'],
      details: 'TheAlphaZone is your go-to online store for trendy and high-quality clothing and footwear. We offer the latest styles at unbeatable prices, ensuring you stay fashionable without breaking the bank. Our user-friendly platform makes shopping easy and enjoyable, with a wide range of options to suit every style and occasion. Experience the perfect blend of fashion, quality, and affordability at TheAlphaZone.',
      link: 'https://thealphazone.in'
    }

  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setSelectedProject(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Project Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918179860935?text=${message}`, '_blank');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hi, I'm Hemanth Kancharla</h1>
          <p>Founder & CEO of <b>Zewo Tech</b>  solutions <br />Full Stack Developer</p>
          {/* <p>Full Stack Developer</p> */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>Explore Projects</button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Hire Me</button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://res.cloudinary.com/dgyykbmt6/image/upload/v1772132695/Hemanth_vyqn3n.jpg" alt="Hemanth" />
              <div className="image-overlay"></div>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>6+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Exp</p>
              </div>
              <div className="stat-item">
                <h3>9.34</h3>
                <p>CGPA</p>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="about-badge">About Me</span>
            <h2>Passionate Full Stack Developer</h2>
            <p className="about-intro">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless 
              digital experiences.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>B.Tech ECE, Annamacharya Institute (CGPA 9.34)</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <div>
                  <h4>Experience</h4>
                  <p>MERN Stack Internships at Orcadehub & Smart Bridge</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Passion</h4>
                  <p>Clean code & continuous learning</p>
                </div>
              </div>
            </div>
            <div className="about-actions">
              <button className="about-cta" onClick={() => scrollToSection('contact')}>Let's Connect</button>
              <a href="/src/assets/Hemanth.pdf" download="Hemanth_Kancharla_Resume.pdf" className="resume-btn">
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with to build amazing applications</p>
        
        <div className="skills-categories">
          {/* Frontend */}
          <div className="skill-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                </div>
                <h4>HTML5</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
                <h4>CSS3</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
                <h4>JavaScript</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </div>
                <h4>React.js</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
                <h4>Node.js</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                </div>
                <h4>Express.js</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '87%' }}></div>
                </div>
              </div>
              {/* <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <h4>Java</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div> */}
              {/* <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <h4>Python</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '78%' }}></div>
                </div>
              </div> */}
            </div>
          </div>
           
          {/* Database & Tools */}
          <div className="skill-category">
            <h3 className="category-title">Database & Tools</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                </div>
                <h4>MongoDB</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '86%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                </div>
                <h4>MySQL</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '83%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                </div>
                <h4>Git & GitHub</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                </div>
                <h4>VS Code</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="skill-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-grid">
              {/* <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
                <h4>Node.js</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div> */}
              {/* <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                </div>
                <h4>Express.js</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '87%' }}></div>
                </div>
              </div> */}
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <h4>Java</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <h4>Python</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-logo">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                </div>
                <h4>C</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Showcasing my recent work and client projects</p>
        
        <div className="project-slider">
          <button className="slider-btn prev" onClick={prevProject}>←</button>
          
          <div className="project-slide">
            <div className="project-slide-image">
              <img src={projects[currentProject].image} alt={projects[currentProject].title} />
            </div>
            <div className="project-slide-content">
              <h3>{projects[currentProject].title}</h3>
              <p>{projects[currentProject].description}</p>
              <div className="project-tech">
                {projects[currentProject].tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <button className="know-more-btn" onClick={() => openProjectModal(projects[currentProject])}>Know More →</button>
            </div>
          </div>
          
          <button className="slider-btn next" onClick={nextProject}>→</button>
        </div>
        
        <div className="slider-dots">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {showProjectModal && selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-body">
              <h2>{selectedProject.title}</h2>
              <div className="modal-tech">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <p className="modal-description">{selectedProject.description}</p>
              <p className="modal-details">{selectedProject.details}</p>
              <div className="modal-actions">
                {/* <a href={selectedProject.link} className="modal-btn">View Project</a> */}
                <button onClick={closeProjectModal} className="modal-btn-secondary">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Section */}
      <section className="education" id="education">
        <h2>Educational Journey</h2>
        <p className="section-subtitle">Academic excellence and continuous learning</p>
        <div className="education-timeline">
          <div className="education-item">
            <div className="edu-icon">🎓</div>
            <div className="edu-content">
              <h3>B.Tech in Electronics & Communication Engineering</h3>
              <p className="institution">📍 Annamacharya Institute of Technology & Sciences, Tirupathi</p>
              <div className="edu-details">
                <span className="percentage">CGPA: 9.34/10</span>
                <span className="year">2019 - 2023</span>
              </div>
              <p className="edu-desc">Specialized in Electronics and Communication with focus on embedded systems and signal processing.</p>
            </div>
          </div>
          <div className="education-item">
            <div className="edu-icon">📚</div>
            <div className="edu-content">
              <h3>Intermediate (Class XII)</h3>
              <p className="institution">📍 Sri Chaitanya Junior College, Vijayawada</p>
              <div className="edu-details">
                <span className="percentage">Percentage: 96.2%</span>
                <span className="year">2017 - 2019</span>
              </div>
              <p className="edu-desc">Completed intermediate education with MPC stream, building strong foundation in Mathematics, Physics, and Chemistry.</p>
            </div>
          </div>
          <div className="education-item">
            <div className="edu-icon">🏫</div>
            <div className="edu-content">
              <h3>Secondary School (Class X)</h3>
              <p className="institution">📍 Sri Chaitanya School, Kandukur</p>
              <div className="edu-details">
                <span className="percentage">Percentage: 97.1%</span>
                <span className="year">2016 - 2017</span>
              </div>
              <p className="edu-desc">Achieved outstanding results in board examinations with consistent academic performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates" id="certificates">
        <h2>Certifications & Training</h2>
        <p className="section-subtitle">Professional certifications and internship experiences</p>
        <div className="certificates-grid">
           <div className="certificate-card">
            <div className="cert-icon">🎓</div>
            <h3>Full Stack Web Developer Intern</h3>
            <p className="cert-org">StaffArc</p>
            <p className="cert-desc">Gained hands-on experience in full-stack web development, contributing to the design and implementation of responsive web applications.</p>
            <div className="cert-badge">Internship</div>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">🎓</div>
            <h3>MERN Stack Internship</h3>
            <p className="cert-org">Orcadehub</p>
            <p className="cert-desc">Completed intensive training in MongoDB, Express.js, React.js, and Node.js development</p>
            <div className="cert-badge">Internship</div>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">🎓</div>
            <h3>MERN Stack Internship</h3>
            <p className="cert-org">Smart Bridge</p>
            <p className="cert-desc">Hands-on experience building full-stack applications with modern web technologies</p>
            <div className="cert-badge">Internship</div>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">☕</div>
            <h3>Java Certification</h3>
            <p className="cert-org">Programming Fundamentals</p>
            <p className="cert-desc">Mastered core Java concepts, OOP principles, and application development</p>
            <div className="cert-badge">Certified</div>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">🌐</div>
            <h3>Web Development</h3>
            <p className="cert-org">Full Stack Web Development</p>
            <p className="cert-desc">Comprehensive training in frontend and backend web development technologies</p>
            <div className="cert-badge">Certified</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-badge">Get In Touch</div>
            <h1 className="contact-title">Let's Build Something<br />Amazing Together.</h1>
            <p className="contact-desc">Whether it's a web application or a full-stack project, I'm ready to bring your vision to life with precision and creativity.</p>
            
            <div className="contact-info-grid">
              <div className="info-card">
                <h3>📧 Email</h3>
                <p className="info-value">kancharlahemanth89@gmail.com</p>
                <a href="mailto:kancharlahemanth89@gmail.com" className="info-link">Send Email →</a>
              </div>
              
              <div className="info-card">
                <h3>📞 Phone</h3>
                <p className="info-value">+91 8179860935</p>
                <a href="tel:+918179860935" className="info-cta">Call Now</a>
              </div>
            </div>

            <div className="contact-info-grid">
              <div className="info-card whatsapp">
                <h3>💬 WhatsApp</h3>
                <p className="info-value">+91 8179860935</p>
                <a href="https://wa.me/918179860935" target="_blank" rel="noopener noreferrer" className="info-cta-whatsapp">Start Chat</a>
              </div>
              
              <div className="info-card">
                <p className="working-hours">🕐 Available: Mon - Sat<br/>09:00 AM — 06:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2>Project Inquiry</h2>
            <p className="form-subtitle">Tell me about your project vision.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="e.g. John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>

              <div className="form-group">
                <label>Service Required</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                  <option>Web Development</option>
                  <option>Full Stack Development</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>MERN Stack</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details</label>
                <textarea placeholder="Describe your project requirements..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ width: '100%', margin: 0, padding: 0, boxSizing: 'border-box' }}>
        
        {/* Section 1: Info & CTA */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'gold', marginBottom: '1rem', letterSpacing: '1.5px' }}>Hemanth Kancharla</h2>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '1rem', maxWidth: '500px' }}>Full Stack Developer specializing in MERN stack, building modern web applications with clean code and innovative solutions.</p>
          </div>
          
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.5rem' }}>
            <p style={{ color: 'gold', fontSize: '1rem', fontWeight: '800', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>Let's Work Together</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button onClick={() => scrollToSection('contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#000', fontSize: '0.9rem', fontWeight: '800', backgroundColor: 'gold', padding: '1rem 2rem', borderRadius: '50px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(255, 215, 0, 0.5)', textTransform: 'uppercase', letterSpacing: '2px', border: '2px solid transparent', cursor: 'pointer' }} onMouseOver={(e) => { e.currentTarget.style.color = 'gold'; e.currentTarget.style.borderColor = 'gold'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'gold'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>Hire Me</button>
              <a href="/src/assets/Hemanth.pdf" download="Hemanth_Kancharla_Resume.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: 'gold', fontSize: '0.9rem', fontWeight: '800', backgroundColor: 'transparent', padding: '1rem 2rem', borderRadius: '50px', transition: 'all 0.4s ease', border: '2px solid gold', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px' }} onMouseOver={(e) => { e.currentTarget.style.color = '#000'; e.currentTarget.style.backgroundColor = 'gold'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'gold'; e.currentTarget.style.transform = 'translateY(0)'; }}><FaDownload /> Resume</a>
            </div>
          </div>
        </div>

        {/* Section 2: Links & Contact */}
        <div style={{ backgroundColor: '#252525', padding: '4rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          
          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'gold', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a onClick={() => scrollToSection('about')} style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.paddingLeft = '10px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.paddingLeft = '0'; }}>About Me</a>
              <a onClick={() => scrollToSection('skills')} style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.paddingLeft = '10px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.paddingLeft = '0'; }}>Skills</a>
              <a onClick={() => scrollToSection('projects')} style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.paddingLeft = '10px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.paddingLeft = '0'; }}>Projects</a>
              <a onClick={() => scrollToSection('education')} style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.paddingLeft = '10px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.paddingLeft = '0'; }}>Education</a>
              <a onClick={() => scrollToSection('contact')} style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.paddingLeft = '10px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.paddingLeft = '0'; }}>Contact</a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 style={{ color: 'gold', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Get In Touch</h3>
            <a href="tel:+918179860935" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }} onMouseOver={(e) => { e.currentTarget.style.color = 'gold'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#b0b0b0'; }}><FaPhone /> +91 8179860935</a>
            <a href="mailto:kancharlahemanth89@gmail.com" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={(e) => { e.currentTarget.style.color = 'gold'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#b0b0b0'; }}><FaEnvelope /> kancharlahemanth89@gmail.com</a>
          </div>

          {/* Location */}
          <div>
            <h3 style={{ color: 'gold', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Location</h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Nekunam puram, Voletivari palem (M), SPSR Nellore(D),  Andhra Pradesh<br />
              523113<br />
              India
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 style={{ color: 'gold', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Connect</h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = 'gold'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '2rem 5%', textAlign: 'center', borderTop: '1px solid #333' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', letterSpacing: '0.5px', margin: 0 }}>© {new Date().getFullYear()} Hemanth Kancharla. All rights reserved. Built with React & passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
