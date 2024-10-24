import { useFormContext } from "react-hook-form";
import { TSearch } from "@/pages/home/model/schema";
import { InputSearch } from "@/shared/ui/input-search";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import {
  selectSearchValue,
  setPage,
  setSearchValue,
} from "@/pages/home/model/filterSlice";
import "./Search.scss";

export function Search() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    watch,
  } = useFormContext<TSearch>();

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

  useEffect(() => {
    setValue("search", searchValue);
  }, [searchValue]);

  function onSubmit(data: TSearch) {
    dispatch(setPage(1));
    dispatch(setSearchValue(data.search));
  }

  return (
    <div className="search">
      <h1 className="search__title">
        let's find some <span>art</span>
        <p>here!</p>
      </h1>
      <form
        className="search__form"
        onSubmit={handleSubmit(onSubmit)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget) && !watch("search")) {
            reset();
          }
        }}
      >
        <InputSearch
          placeholder="Search art, artist, work..."
          register={register}
          error={errors.search?.message}
        />
      </form>
    </div>
  );
}
