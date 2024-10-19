import { ButtonFavorite } from "@/shared/ui/button-favorite";
import { TGallery } from "@/shared/types";
import { Link } from "react-router-dom";
import "./OtherCard.scss";

type Props = {
  artwork: TGallery;
};

export function OtherCard({ artwork }: Props) {
  return (
    <article className="other-works__card other-card">
      <div className="other-card__info">
        <Link to={`/artwork/${artwork.id}`} className="other-card__link">
          <img
            className="other-card__image"
            src={`${artwork.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.alt_text === null ? "" : artwork.alt_text}
            width="80"
            height="80"
            loading="lazy"
          />
        </Link>
        <div className="other-card__description">
          <a href="#" className="other-card__name">
            {artwork.title}
          </a>
          <a href="#" className="other-card__author">
            {artwork.artist_title}
          </a>
          <p className="other-card__access">Public</p>
        </div>
      </div>
      <ButtonFavorite artwork={artwork} />
    </article>
  );
}
