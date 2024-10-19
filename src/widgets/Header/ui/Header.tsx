import { Navigation } from "@/features/Navigation";
import { Link } from "react-router-dom";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo logo">
          <img
            className="logo__image"
            src="/icons/museum-logo-1.svg"
            alt="Museum of art"
            width="206"
            height="63"
            loading="lazy"
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
