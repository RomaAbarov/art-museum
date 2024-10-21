import { GalleryCard } from "@/entities/gallery-card";
import { TGallery } from "@/shared/types";
import SkeletonGalleryCard from "@/entities/gallery-card/ui/SkeletonGalleryCard";
import "./GalleryList.scss";

type Props = {
  limit: number;
  artworks: TGallery[];
  isLoading: boolean;
};

export default function GalleryList({ limit, artworks, isLoading }: Props) {
  return (
    <ul className="gallery__list grid grid--3">
      {isLoading
        ? [...Array(limit)].map((_, index) => (
            <li key={index} className="gallery__list-item">
              <SkeletonGalleryCard />
            </li>
          ))
        : artworks.map((artwork, index) => {
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
