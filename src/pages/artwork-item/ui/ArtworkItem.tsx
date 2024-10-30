import { ButtonFavorite } from "@/shared/ui/button-favorite";
import { useParams } from "react-router-dom";
import { TGallery } from "@/shared/types";
import SkeletonArtworkItem from "./SkeletonArtworkItem";
import { useGetArtworkByIdQuery } from "@/shared/api/apiArtworks";
import "./ArtworkItem.scss";

export function ArtworkItem() {
  const { idArtwork } = useParams();

  if (!idArtwork) {
    return (
      <main className="main">
        <section className="section container">Id Artwork not found!</section>
      </main>
    );
  }

  const {
    data: artwork,
    error: errorArtwork,
    isLoading: isLoadingArtwork,
  } = useGetArtworkByIdQuery(
    {
      id: idArtwork!,
      fields:
        "id,title,artist_display,image_id,dimensions,credit_line,thumbnail",
    },
    { skip: !idArtwork }
  );

  return (
    <main className="main">
      <section className="section container">
        {errorArtwork ? (
          <h1>Error</h1>
        ) : isLoadingArtwork ? (
          <SkeletonArtworkItem />
        ) : (
          <div className="artwork-item">
            <div className="artwork-item__inner">
              <img
                className="artwork-item__image"
                src={`${artwork?.iiif_url}/${artwork?.image_id}/full/843,/0/default.jpg`}
                width="497"
                height="570"
                alt={artwork?.alt_text ? artwork.alt_text : ""}
              ></img>
              <div className="artwork-item__wrapper">
                <ButtonFavorite
                  cls="button-favorite--accent-bg"
                  artwork={artwork as TGallery | undefined}
                />
              </div>
            </div>
            <div className="artwork-item__body">
              <div className="artwork-item__title">
                <h2 className="artwork-item__name">{artwork?.title}</h2>
                <p className="artwork-item__author">
                  {artwork?.artist_display}
                </p>
              </div>
              <div className="artwork-item__description">
                <h2 className="artwork-item__description-title">Overview</h2>
                <div className="artwork-item__description-body">
                  <p className="artwork-item__dimensions">
                    Dimensions:Sheet:
                    <span> {artwork?.dimensions}</span>
                  </p>
                  <p className="artwork-item__credit-line">
                    Credit Line: <span>{artwork?.credit_line}</span>
                  </p>
                  <p className="artwork-item__access">
                    <span>Public</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
