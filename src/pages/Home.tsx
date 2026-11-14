
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Utensils } from "lucide-react";
import { categories } from "../data/menu";

export default function Home() {
  return (
    <main className="home-page">
      <section className="menu-section" id="menu">
        <div className="section-heading">
          <span className="section-label">DISCOVER OUR FLAVOURS</span>

          <h2>
            Explore Our <span>Menu</span>
          </h2>

          <p>
            From delicious bites to refreshing drinks,
            discover something special at every visit.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to={`/menu/${category.id}`}
              className="category-card"
              key={category.id}
            >
              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85";
                  }}
                />

                <div className="image-overlay" />
              </div>

              <div className="category-content">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="explore-link">
                  Explore Menu
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-icon">
          <Coffee size={38} />
        </div>

        <span className="section-label">A LITTLE ABOUT US</span>

        <h2>
          Good Food. <span>Great Vibes.</span>
        </h2>

        <p>
          Welcome to Bhilai Brewers Café, where delicious food,
          refreshing drinks and memorable moments come together.
          Whether you're meeting friends or taking a break,
          there's always something waiting for you.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-icon">
          <Utensils size={30} />
        </div>

        <h2>Come Visit Us!</h2>

        <p>
          Your favourite food and drinks are waiting for you.
        </p>

        <a href="#menu" className="hero-button">
          View Our Menu
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Coffee size={23} />
          <strong>BBC – Bhilai Brewers Café</strong>
        </div>

        <p>Good Food • Great Vibes • Better Together</p>

        <span>
          © {new Date().getFullYear()} Bhilai Brewers Café.
          All rights reserved.
        </span>
      </footer>
    </main>
  );
}
