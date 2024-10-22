import { Pagination } from "@/features/pagination";
import { useEffect, useRef, useState } from "react";
import GalleryList from "../components/gallery-list/GalleryList";
import { TGallery } from "@/shared/types";
import OthersWorksList from "../components/others-works-list/OthersWorksList";
import ApiSearch from "@/shared/api/apiSearch";
import useFetching from "@/shared/hooks/useFetching";
import { SectionSearch } from "../components/section-search/SectionSearch";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import {
  selectCurrentPage,
  selectSearchValue,
  setPage,
  setSearchValue,
} from "../model/filterSlice";
import { useSearchParams } from "react-router-dom";
import "./HomePage.scss";

export function Home() {
  const [artworks, setArtworks] = useState<TGallery[]>([]);
  const [total, setTotal] = useState({ totalElem: 0, totalPage: 4 });
  const [limitArtworks, setLimitArtworks] = useState({
    limitGallery: 3,
    limitOtherWorks: 9,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const searchValue = useAppSelector(selectSearchValue);
  const page = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  const limit = limitArtworks.limitGallery + limitArtworks.limitOtherWorks;

  const [fetching, isLoadingArtworks, errorArtworks] = useFetching(
    async (value) => {
      const fields = "id,title,artist_title,image_id,thumbnail";

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

  useEffect(() => {
    if (isMounted.current) {
      setSearchParams({ q: searchValue, page: String(page) });
    }

    isMounted.current = true;
  }, [page, searchValue]);

  useEffect(() => {
    if (searchParams.size) {
      const q = searchParams.get("q");
      const p = searchParams.get("page");

      dispatch(setSearchValue(q!));
      dispatch(setPage(Number(p!)));

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetching(searchValue);
    }

    isSearch.current = false;
  }, [page, searchValue]);

  return (
    <main className="main">
      <section className="section container">
        <div className="section__body">
          <SectionSearch />
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
                artworks={artworks}
                isLoading={isLoadingArtworks}
              />
              <div className="gallery__pagination ">
                <Pagination
                  totalPage={total.totalPage}
                  isNextPage={total.totalElem > limit}
                  disabled={Math.ceil(total.totalElem / limit) === page}
                />
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
                artworks={artworks}
                isLoading={isLoadingArtworks}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
