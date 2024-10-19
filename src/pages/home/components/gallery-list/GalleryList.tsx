import { GalleryCard } from "@/entities/gallery-card";
import { TGallery } from "@/shared/types";
import "./GalleryList.scss";

type Props = {
  limit: number;
  artworks: TGallery[];
};

export default function GalleryList({ limit, artworks }: Props) {
  return (
    <ul className="gallery__list grid grid--3">
      {artworks.map((artwork, index) => {
        if (index + 1 > limit) {
          return;
        }

        return (
          <li key={artwork.id} className="gallery__list-item">
            <GalleryCard artwork={artwork} />
          </li>
        );
      })}
    </ul>
  );
}
