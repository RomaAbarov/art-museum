import { useEffect, useState } from "react";
import { GalleryList, OthersWorksList } from "../components";
import { TGallery } from "@/shared/types";
import ApiSearch from "@/shared/api/apiSearch";
import useFetching from "@/shared/hooks/useFetching";
import { Search } from "@/features/Search";
import { Pagination } from "@/features/pagination";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import {
  selectCurrentPage,
  selectSearchValue,
  selectSortBy,
} from "../model/filterSlice";
import useSortedArtworks from "@/shared/hooks/useSortedArtworks";
import { Sorting } from "@/features/Sorting";
import "./HomePage.scss";

export function Home() {
  const [artworks, setArtworks] = useState<TGallery[]>([]);
  const [total, setTotal] = useState({ totalElem: 0, totalPage: 4 });
  const [limitArtworks] = useState({
    limitGallery: 3,
    limitOtherWorks: 9,
  });
  // const [searchParams, setSearchParams] = useSearchParams();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  const searchValue = useAppSelector(selectSearchValue);
  const page = useAppSelector(selectCurrentPage);
  const sortBy = useAppSelector(selectSortBy);

  //const dispatch = useAppDispatch();

  const limit = limitArtworks.limitGallery + limitArtworks.limitOtherWorks;

  const [fetching, isLoadingArtworks, errorArtworks] = useFetching(
    async (value) => {
      const fields = "_score,id,title,artist_title,image_id,thumbnail,date_end";

      const response = await ApiSearch.getArtworks(value, limit, page, fields);

      setArtworks(response.data);

      setTotal(() => {
        if (response.pagination.total_pages < total.totalPage) {
          return {
            totalElem: response.pagination.total,
            totalPage: response.pagination.total_pages,
          };
        }

        return { totalPage: 4, totalElem: response.pagination.total };
      });
    }
  );

  // useEffect(() => {
  //   if (isMounted.current) {
  //     let sort = "";

  //     switch (sortBy) {
  //       case SortBy.Ascending:
  //         sort = "asc";
  //         break;
  //       case SortBy.Descending:
  //         sort = "desc";
  //         break;
  //       case SortBy.Alphabet:
  //         sort = SortBy.Alphabet;
  //         break;
  //     }

  //     setSearchParams({ q: searchValue, page: String(page), sort });
  //   }

  //   isMounted.current = true;
  // }, [page, searchValue, sortBy]);

  // useEffect(() => {
  //   if (searchParams.size) {
  //     const q = searchParams.get("q");
  //     const p = searchParams.get("page");
  //     const s = searchParams.get("sort");

  //     dispatch(setSearchValue(q!));
  //     dispatch(setPage(Number(p!)));
  //     dispatch(setSortBy(s!));

  //     isSearch.current = true;
  //   }
  // }, []);

  useEffect(() => {
    // if (!isSearch.current) {
    //   fetching(searchValue);
    // }

    //isSearch.current = false;

    fetching(searchValue);
  }, [page, searchValue]);

  const sortedArtworks = useSortedArtworks(artworks, sortBy);

  return (
    <main className="main">
      <section className="section container">
        <div className="section__body">
          <Search />
          <Sorting />
        </div>
      </section>

      <section className="section container">
        <header className="section__header">
          <p className="section__description">Topics for you</p>
          <h2 className="section__title">Our special gallery</h2>
        </header>
        <div className="section__body">
          {errorArtworks ? (
            <h1>{errorArtworks}</h1>
          ) : (
            <div className="gallery">
              <GalleryList
                limit={limitArtworks.limitGallery}
                artworks={sortedArtworks}
                isLoading={isLoadingArtworks}
              />
              <div className="gallery__pagination ">
                {!!total.totalElem && (
                  <Pagination
                    totalPage={total.totalPage}
                    isNextPage={total.totalElem > limit}
                    disabled={Math.ceil(total.totalElem / limit) === page}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section container">
        <header className="section__header">
          <p className="section__description">Here some more</p>
          <h2 className="section__title">Other works for you</h2>
        </header>
        <div className="section__body">
          {errorArtworks ? (
            <h1>{errorArtworks}</h1>
          ) : (
            <div className="other-works">
              <OthersWorksList
                limit={limitArtworks.limitOtherWorks}
                artworks={sortedArtworks}
                isLoading={isLoadingArtworks}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
