
import { Link } from "react-router-dom";
import { Coffee} from "lucide-react";
import { heroImage } from "../data/menu";

export default function Header() {

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="brand">
            <div className="brand-icon">
              <Coffee size={40} />
            </div>

            <div className="brand-text">
              <h2>BBC</h2>
              <span>Bhilai Brewers Café</span>
            </div>
          </Link>
        </div>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(15, 9, 5, 0.65),
              rgba(15, 9, 5, 0.88)
            ),
            url("${heroImage}")
          `,
        }}
      >
        <div className="hero-content">
          <span className="hero-label">
            WELCOME TO BBC
          </span>

          <h1>
            Bhilai Brewers
            <span> Café</span>
          </h1>

          <p>
            Good Food <span>•</span> Great Vibes <span>•</span> Better Together
          </p>
        </div>
      </section>
    </>
  );
}
