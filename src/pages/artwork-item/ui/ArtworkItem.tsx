import { ButtonFavorite } from "@/shared/ui/button-favorite";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetching from "@/shared/hooks/useFetching";
import ApiSearch from "@/shared/api/apiSearch";
import { TArtwork } from "@/shared/types";
import "./ArtworkItem.scss";

export function ArtworkItem() {
  const { idArtwork } = useParams();
  const [artwork, setAtrwork] = useState<TArtwork | null>(null);

  const [fetching, isLoadingArtwork, errorArtwork] = useFetching(async () => {
    const fields =
      "id,title,artist_display,image_id,dimensions,credit_line,thumbnail";
    let response;

    if (idArtwork) {
      response = await ApiSearch.getArtwork(idArtwork, fields);
    } else {
      throw Error("Artwork ID not found");
    }

    setAtrwork(response);
  });

  useEffect(() => {
    fetching(null);
  }, []);

  return (
    <main className="main">
      <section className="section container">
        {errorArtwork ? (
          <h1>{errorArtwork}</h1>
        ) : isLoadingArtwork ? (
          "Loading..."
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
                  artwork={artwork}
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
