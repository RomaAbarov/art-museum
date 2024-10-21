import createPagesArray from "../model/createPagesArray";
import "./Pagination.scss";

type Props = {
  totalPage: number;
  page: number;
  setPage: (page: number) => void;
  isNextPage: boolean;
  disabled: boolean;
};

export function Pagination({
  totalPage,
  page,
  setPage,
  isNextPage,
  disabled,
}: Props) {
  const arrayPages = createPagesArray(totalPage);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {arrayPages.map((numberPage) => (
          <li key={numberPage} className="pagination__list-item">
            <button
              type="button"
              className={
                numberPage === page
                  ? "pagination__button is-active"
                  : "pagination__button"
              }
              onClick={() => setPage(numberPage)}
            >
              {numberPage}
            </button>
          </li>
        ))}

        {isNextPage && (
          <li className="pagination__button">
            <button
              type="button"
              className="pagination__button"
              disabled={disabled}
              onClick={() => setPage(page + 1)}
            >
              <span className="visually-hidden">next page</span>
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z"
                  fill="#393939"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
