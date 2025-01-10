import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import { getCLS, getFID, getLCP } from 'web-vitals';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container" alt="">
          
          <h1 className="university-name" style={{ textAlign: "center", margin: 10 }}>
            جامعة العلوم والتكنولوجيا
          </h1>
        </div>
        <nav className="navbar">
          <a href="#about" className="nav-link">
            من نحن
          </a>
          <a href="#courses" className="nav-link">
            الدورات
          </a>
          <a href="#contact" className="nav-link">
            تواصل معنا
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-title">مرحباً بكم في جامعة العلوم والتكنولوجيا</h2>
        <p className="hero-description">
          رؤيتنا تقديم تعليم عالي الجودة وتمكين الطلاب لبناء مستقبلهم بأفضل الطرق.
        </p>
        <button className="hero-button">اكتشف المزيد</button>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="about-section">
          <h2>من نحن</h2>
          <p>
            تأسست جامعة العلوم والتكنولوجيا في عام 1994، وهي مؤسسة رائدة في تقديم تعليم عالي الجودة.
            هدفنا هو تعزيز الابتكار والتميز الأكاديمي.
          </p>
          <p>
            الجامعة تقدم برامج متنوعة في مختلف التخصصات لضمان مستقبل واعد للطلاب.
          </p>
        </section>

        {/* Courses Section */}
        <section id="courses" className="courses-section">
          <h2>الدورات الأكثر شيوعاً</h2>
          <ul className="course-list">
            <li>علوم الحاسوب</li>
            <li>إدارة الأعمال</li>
            <li>الهندسة</li>
            <li>طب الاسنان</li>
            <li>القانون</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>تواصل معنا</h2>
          <p>البريد الإلكتروني: pro.am.zuhair@gmail.com</p>
          <p>الهاتف: +775479340</p>
          <p>العنوان: شارع المطار، الحديدة، اليمن</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} جامعة العلوم والتكنولوجيا. جميع الحقوق محفوظة.</p>
        <p>
          تم التطوير بواسطة <strong>عمار زهير علي سيف المقطري</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
