import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <a href="#" className="footer__logo logo">
          <img
            className="logo__image"
            src="/icons/museum-logo-2.svg"
            alt="Museum of art"
            width="206"
            height="63"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
}
