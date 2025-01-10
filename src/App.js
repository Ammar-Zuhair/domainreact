import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img
            src="/images/university.png"
            alt="University Logo"
            className="logo"
          />
          <h1 className="university-name">جامعة العلوم والتكنولوجيا</h1>
        </div>
        <nav className="navbar">
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#courses" className="nav-link">
            Courses
          </a>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="about-section">
          <h2>Welcome to XYZ University</h2>
          <p>
            XYZ University, established in 1950, is a leading institution
            offering world-class education and fostering innovation. Our mission
            is to empower students and shape the future.
          </p>
          <p>
            We pride ourselves on a strong history of academic excellence,
            groundbreaking research, and community engagement.
          </p>
        </section>

        {/* Courses Section */}
        <section id="courses" className="courses-section">
          <h2>Our Popular Courses</h2>
          <ul className="course-list">
            <li>Computer Science</li>
            <li>Business Administration</li>
            <li>Engineering</li>
            <li>Medicine</li>
            <li>Law</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>Email: contact@xyzuniversity.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 University Avenue, City, Country</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} XYZ University. All rights reserved.</p>
        <p>
          Developed by <strong>XYZ Dev Team</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
