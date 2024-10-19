import { useFormContext } from "react-hook-form";
import { defaultValues, TSearch } from "../../model/schema";
import { InputSearch } from "@/shared/ui/input-search";
import { useEffect } from "react";
import "./SectionSearch.scss";

type Props = {
  setPage: (n: number) => void;
  setSearchQuery: (str: string) => void;
};

export function SectionSearch({ setPage, setSearchQuery }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useFormContext<TSearch>();

  useEffect(() => {
    reset(defaultValues);
  }, []);

  function onSubmit(data: TSearch) {
    setPage(1);
    setSearchQuery(data.search);
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
