import { useEffect, useRef, useState } from "react";
import { SortByList } from "@/shared/consts";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { selectSortBy, setSortBy } from "@/pages/home/model/filterSlice";
import "./Sorting.scss";

export function Sorting() {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [selected, setSelected] = useState(0);
  const sortRef = useRef<HTMLDivElement>(null);

  const sortBy = useAppSelector(selectSortBy);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function closePopup(e: MouseEvent) {
      if (!sortRef.current?.contains(e.target as HTMLElement)) {
        setIsShowPopup(false);
      }
    }

    document.body.addEventListener("click", closePopup);

    return () => document.body.removeEventListener("click", closePopup);
  }, []);

  function onClickButton() {
    setIsShowPopup(!isShowPopup);

    const popupLabel = document.querySelectorAll(".popup__label");

    if (!isShowPopup) {
      popupLabel.forEach((p) => p.setAttribute("tabindex", "0"));
    } else {
      popupLabel.forEach((p) => p.setAttribute("tabindex", "-1"));
    }
  }

  function onClickLabel(sortBy: string, index: number) {
    dispatch(setSortBy(sortBy));
    setIsShowPopup(false);
    setSelected(index);
  }

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__inner">
        <span className="sort__title">Sort by: </span>
        <button type="button" className="sort__button" onClick={onClickButton}>
          {sortBy ? sortBy : "select"}
        </button>
        {isShowPopup && (
          <div
            className="popup"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsShowPopup(false);
              }
            }}
          >
            <ul className="popup__list">
              {SortByList.map((el, index) => (
                <li key={el} className="popup__item">
                  <p
                    className={
                      selected === index
                        ? "popup__label is-active"
                        : "popup__label"
                    }
                    onClick={() => onClickLabel(el, index)}
                  >
                    {el}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
