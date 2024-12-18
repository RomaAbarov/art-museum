import { FavoriteList } from "../components";
import "./Favorites.scss";

export function Favorites() {
  return (
    <main className="main">
      <section className="section container">
        <div className="section__body">
          <div className="title">
            <h1 className="title__header">
              <p>Here are your</p>
              <p>
                <span>
                  <svg
                    width="38"
                    height="49"
                    viewBox="0 0 38 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2573 45.9032L18.9993 36.4409L2.74121 45.9032V8.05375C2.74121 6.79897 3.23061 5.59557 4.10175 4.7083C4.97288 3.82103 6.1544 3.32257 7.38637 3.32257H30.6122C31.8442 3.32257 33.0257 3.82103 33.8968 4.7083C34.7679 5.59557 35.2573 6.79897 35.2573 8.05375V45.9032Z"
                      stroke="#F17900"
                      strokeWidth="4.69765"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                favorites
              </p>
            </h1>
          </div>
        </div>
      </section>

      <section className="section container">
        <header className="section__header">
          <p className="section__description">Saved by you</p>
          <h2 className="section__title">Your favorites list</h2>
        </header>
        <div className="section__body">
          <div className="favorites">
            <FavoriteList />
          </div>
        </div>
      </section>
    </main>
  );
}
