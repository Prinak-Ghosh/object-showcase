import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Github, Linkedin, Download, User, Briefcase, MessageCircle } from 'lucide-react';

// Navigation Component
function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Prinak Ghosh
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <User size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/portfolio" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/portfolio' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Briefcase size={18} />
              <span>Portfolio</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <MessageCircle size={18} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Home Page Component
function HomePage() {
  const [showResumeNotification, setShowResumeNotification] = useState(false);

  const handleDownloadResume = () => {
    setShowResumeNotification(true);
    setTimeout(() => setShowResumeNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                PG
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Prinak Ghosh
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Mechanical Engineering Student Exploring Materials, Design & Sustainability
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Welcome to my portfolio! I'm passionate about understanding how materials and design shape our world. 
                Through hands-on projects and problem-solving approaches, I explore the intersection of engineering, 
                sustainability, and innovation.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/portfolio"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Briefcase size={20} />
                <span>View Portfolio</span>
              </Link>
              <button 
                onClick={handleDownloadResume}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              <Link 
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* About Me Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Background</h3>
                <p className="text-gray-700 mb-6">
                  Currently pursuing my degree in Mechanical Engineering, with a focus on materials science, 
                  design innovation, and sustainable engineering solutions.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Materials Science & Engineering</li>
                  <li>• Sustainable Design Solutions</li>
                  <li>• Product Development & Innovation</li>
                  <li>• Manufacturing Processes</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ME
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Learning Approach</h4>
                <p className="text-gray-700">
                  I believe in hands-on learning and practical problem-solving. Every project is an opportunity 
                  to explore new materials, understand design principles, and create meaningful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Notification */}
      {showResumeNotification && (
        <div className="fixed top-24 right-6 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg shadow-lg z-50">
          <p className="font-medium">No resume has been uploaded yet.</p>
        </div>
      )}
    </div>
  );
}

// Portfolio Page Component
function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Object Material Showcase",
      description: "Every object around us tells a hidden story of its materials. From the magnesium alloy in your camera to the mesh fabric of your chair, these materials shape how we live, create, and move through the world.\n\nWe built this space to help you discover what everyday objects are truly made of. Each image you see here is more than just a product—it is a layered composition of metals, fabrics, polymers, and glass working together to create comfort, precision, and beauty in your day-to-day life.\n\nWhether you're a designer seeking inspiration, a student learning material science, or simply someone who appreciates the craftsmanship behind objects, our goal is to make the invisible layers of everyday life visible.\n\nWelcome to a place where you can see, learn, and appreciate the materials that shape your world.",
      tools: "Designed with Lovable, developed and version-controlled via GitHub, refined in Cursor, structured in Bolt, and deployed seamlessly on Netlify.",
      liveLink: "https://objkt-decriptions.netlify.app/",
      githubLink: "https://github.com/Prinak-Ghosh/object-showcase",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my projects that showcase the intersection of engineering, materials science, and design innovation.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Tools & Workflow</h4>
                      <p className="text-gray-700">{project.tools}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <ExternalLink size={18} />
                        <span>View Live Project</span>
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
              <p className="text-gray-600">
                I'm constantly working on new projects that explore materials science, sustainable design, 
                and engineering innovation. Check back soon for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              Let's connect! Whether you're a professor, recruiter, or fellow engineer, I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">University Email</p>
                      <a href="mailto:pg3019@gmail.com" className="text-blue-600 hover:underline">
                        pg3019@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Personal Email</p>
                      <a href="mailto:prinakghosh27@gmail.com" className="text-blue-600 hover:underline">
                        prinakghosh27@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:8420837155" className="text-blue-600 hover:underline">
                        8420837155
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/prinak-ghosh-94783b345/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Collaborate</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm always interested in discussing new opportunities, research projects, 
                  or collaborations in mechanical engineering, materials science, and sustainable design. 
                  Don't hesitate to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed top-24 right-6 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg shadow-lg z-50">
          <p className="font-medium">Message sent successfully!</p>
        </div>
      )}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;