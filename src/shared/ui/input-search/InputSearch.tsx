import { UseFormRegister } from "react-hook-form";
import "./InputSearch.scss";

type Props = {
  placeholder: string;
  register: UseFormRegister<{
    search: string;
  }>;
  error: string | undefined;
};

export function InputSearch({ placeholder, register, error }: Props) {
  return (
    <div className="search__field">
      <label htmlFor="search" className="search__label visually-hidden">
        {placeholder}
      </label>
      <input
        {...register("search")}
        type="search"
        id="search"
        className="search__input"
        placeholder={placeholder}
        aria-errormessage="search-error"
        aria-invalid={error ? "true" : "false"}
      />
      <button type="submit" className="search__button">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
            stroke="#393939"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 28L22 22"
            stroke="#393939"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <p className="search__error" id="search-error">
        {error}
      </p>
    </div>
  );
}
