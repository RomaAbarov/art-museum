import { ButtonFavorite } from "@/shared/ui/button-favorite";
import { TGallery } from "@/shared/types";
import { Link } from "react-router-dom";
import "./GalleryCard.scss";

type Props = {
  artwork: TGallery;
};

export function GalleryCard({ artwork }: Props) {
  return (
    <article className="gallery__list-card gallery-card">
      <Link to={`/artwork/${artwork.id}`} className="gallery-card__link">
        <img
          className="gallery-card__image"
          src={`${artwork.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.alt_text !== null ? artwork.alt_text : ""}
          width="387"
          height="444"
          loading="lazy"
        />
      </Link>
      <div className="gallery-card__description">
        <div className="gallery-card__info">
          <a href="#" className="gallery-card__name">
            {artwork.title}
          </a>
          <a href="#" className="gallery-card__author">
            {artwork.artist_title}
          </a>
          <p className="gallery-card__access">Public</p>
        </div>
        <ButtonFavorite artwork={artwork} />
      </div>
    </article>
  );
}
