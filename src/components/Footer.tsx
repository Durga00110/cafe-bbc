export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>BBC</h2>
          <p>Bhilai Brewers Café</p>
          <span>Good Food. Great Moments.</span>
        </div>

        <div className="footer-contact">
          <h3>Visit Us</h3>
          <p>Bhilai, Chhattisgarh</p>
          <p>Fresh food, warm moments.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bhilai Brewers Café.
          All rights reserved.
        </p>
        <span>Made with love for food lovers.</span>
      </div>
    </footer>
  );
}

