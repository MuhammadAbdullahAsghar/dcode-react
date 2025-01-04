import React from "react";
import  "./Saas.css"

const App = () => {
  return (
    <>
      {/* Hero Section with Navbar */}
      <section className="hero">
        {/* Navbar */}
        <div className="navbar">
          <div className="container">
            <div className="logo">Hydro</div>
            <nav>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                <a href="#"><i className='bx bxl-twitter'></i></a>
              </ul>
            </nav>
            <button className="btn-signin">Sign In/ Join</button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-text">
            <h1>We make beautiful <br /> websites for all people.</h1>
            <div className="inline-content">
              <a href="#" className="placeholder">Start a Project</a>
              <p className="contact-info">CALL US: (666) 010-020-0340 <br /> for Any Inquiry Details</p>
            </div>
          </div>

          {/* Right Content (Video Placeholder) */}
          <div className="hero-video">
            <iframe
              width="230"
              height="300"
              src="https://www.youtube.com/embed/AqcjdkPMPJA?si=B1oRqKWv-cELdtHk"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="container">
          {/* Left Content */}
          <div className="intro">
            <h2>Let us introduce</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <div className="skill">
              <p>Web Design</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>
              <span>85%</span>
            </div>
            <div className="skill">
              <p>Photography</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "90%" }}></div>
              </div>
              <span>90%</span>
            </div>
            <div className="skill">
              <p>Content Marketing</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
              <span>75%</span>
            </div>
            <div className="skill">
              <p>CMS Admin</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>
              <span>70%</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="profile-image">
            <img src="/Hydro.png" height="400px" alt="Profile" />
          </div>
        </div>
      </section>

      <section className="blog-section">
      <h2>Our Blog</h2>
      <div className="blog-container">
        {/* Upper row: Two cards */}
        <div className="row">
          <div className="blog-card">
            <div className="image-container">
              <img src="/div3.png" alt="Workspace" height="auto" />
            </div>
            <div className="blog-content">
              <p className="date">December 22, 2017</p>
              <h3>How To Find Out Beautiful Workspace.</h3>
              <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
              <a href="#" className="btn">
                Read article
              </a>
            </div>
          </div>
          <div className="blog-card">
            <div className="image-container">
              <img src="/div2.fpng.webp" alt="Sportwear" height="200" />
            </div>
            <div className="blog-content">
              <p className="date">December 18, 2017</p>
              <h3>Woman Sportwear.</h3>
              <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
              <a href="#" className="btn">
                Read more
              </a>
            </div>
          </div>
        </div>
        {/* Lower row: Two cards */}
        <div className="row">
          <div className="blog-card">
            <div className="image-container">
              <img src="/div3.2.jpeg" alt="Creative Fashion" height="200" />
            </div>
            <div className="blog-content">
              <p className="date">December 14, 2017</p>
              <h3>New Creative Fashion.</h3>
              <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
              <a href="#" className="btn">
                Read article
              </a>
            </div>
          </div>
          <div className="blog-card">
            <div className="image-container">
              <img src="/divf.4png.webp" alt="Minimalist Design" height="200" />
            </div>
            <div className="blog-content">
              <p className="date">December 10, 2017</p>
              <h3>Minimalist Design Trend In 2018.</h3>
              <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
              <a href="#" className="btn">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="work-section">
        <h2>Our Work</h2>
        <div className="work-container">
          <div className="work-card">
            <img src="/f.png" alt="Coffee and Soup" />
          </div>
          <div className="work-card">
            <img src="/f2.png" alt="Paper Bag Design" />
          </div>
          <div className="work-card">
            <img src="/f3.3.png" alt="Frame Mockup" />
          </div>
          <div className="work-card">
            <img src="/f4.png" alt="Wine and Utensils" />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contact us</h2>
            <div className="dots">•••</div>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Your Phone" required />
                <select required>
                  <option value="" disabled selected>Budget Level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <textarea placeholder="Your requirements" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-map">
            <div className="map-circle">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3751837680566!2d144.96322781585842!3d-37.81410787975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1635668235003!5m2!1sen!2s"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Hydro Company</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Join our team</a></li>
              <li><a href="#">Read Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Find us</h3>
            <p>123 Grand Rama IX,<br />Krung Thep Maha Nakhon 10400</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2017 Your Company</p>
          <p>Call us: (+66) 010-020-0340</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
