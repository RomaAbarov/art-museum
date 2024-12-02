import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.scss";

export function BurgerMenu() {
  const [isShowBurger, setIsShowBurger] = useState(false);

  function onClick() {
    setIsShowBurger(!isShowBurger);
  }

  return (
    <div className="burger-menu visible-mobile">
      <button
        className={
          isShowBurger
            ? "burger-button active visible-mobile"
            : "burger-button visible-mobile"
        }
        type="button"
        onClick={onClick}
      >
        <span className="visually-hidden">Open menu</span>
        <span className="burger-button__line"></span>
      </button>
      <nav className="burger-menu__body">
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "burger-menu__link is-hidden" : "burger-menu__link"
              }
              onClick={onClick}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.5L12 2.5L21 9.5V20.5C21 21.0304 20.7893 21.5391 20.4142 21.9142C20.0391 22.2893 19.5304 22.5 19 22.5H5C4.46957 22.5 3.96086 22.2893 3.58579 21.9142C3.21071 21.5391 3 21.0304 3 20.5V9.5Z"
                  stroke="#E0A449"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22.5V12.5H15V22.5"
                  stroke="#E0A449"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "burger-menu__link is-active" : "burger-menu__link"
              }
              onClick={onClick}
            >
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 19.5L8.375 15.5L1.25 19.5V3.5C1.25 2.96957 1.46448 2.46086 1.84625 2.08579C2.22802 1.71071 2.74581 1.5 3.28571 1.5H13.4643C14.0042 1.5 14.522 1.71071 14.9038 2.08579C15.2855 2.46086 15.5 2.96957 15.5 3.5V19.5Z"
                  stroke="#E0A449"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Your favorites</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
