import { Pagination } from "@/features/pagination";
import { useEffect, useState } from "react";
import GalleryList from "../components/gallery-list/GalleryList";
import { TGallery } from "@/shared/types";
import OthersWorksList from "../components/others-works-list/OthersWorksList";
import ApiSearch from "@/shared/api/apiSearch";
import useFetching from "@/shared/hooks/useFetching";
import { SectionSearch } from "../components/section-search/SectionSearch";
import "./HomePage.scss";

export function Home() {
  const [artworks, setArtworks] = useState<TGallery[]>([]);
  const [total, setTotal] = useState({ totalElem: 0, totalPage: 4 });
  const [page, setPage] = useState(1);
  const [limitArtworks, setLimitArtworks] = useState({
    limitGallery: 3,
    limitOtherWorks: 9,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const limit = limitArtworks.limitGallery + limitArtworks.limitOtherWorks;

  const [fetching, isLoadingArtworks, errorArtworks] = useFetching(
    async (data) => {
      const fields = "id,title,artist_title,image_id,thumbnail";

      const value = data ? data : "";

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
    if (searchQuery) {
      fetching(searchQuery);
      return;
    }

    fetching(null);
  }, [page, searchQuery]);

  return (
    <main className="main">
      <section className="section container">
        <div className="section__body">
          <SectionSearch setPage={setPage} setSearchQuery={setSearchQuery} />
        </div>
      </section>

      <section className="section container">
        <header className="section__header">
          <p className="section__description">Topics for you</p>
          <h2 className="section__title">Our special gallery</h2>
        </header>
        <div className="section__body">
          <div className="gallery">
            {errorArtworks ? (
              <h1 color="red">{errorArtworks}</h1>
            ) : isLoadingArtworks ? (
              <h1>Loading...</h1>
            ) : (
              <GalleryList
                limit={limitArtworks.limitGallery}
                artworks={artworks}
              />
            )}
            <div className="gallery__pagination ">
              <Pagination
                totalPage={total.totalPage}
                page={page}
                setPage={setPage}
                isNextPage={total.totalElem > limit}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <header className="section__header">
          <p className="section__description">Here some more</p>
          <h2 className="section__title">Other works for you</h2>
        </header>
        <div className="section__body">
          <div className="other-works">
            {errorArtworks ? (
              <h1 color="red">{errorArtworks}</h1>
            ) : isLoadingArtworks ? (
              <h1>Loading...</h1>
            ) : (
              <OthersWorksList
                limit={limitArtworks.limitGallery}
                artworks={artworks}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
