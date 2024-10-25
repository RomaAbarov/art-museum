import { OtherCard } from "@/entities/other-card";
import { TGallery } from "@/shared/types";
import SkeletonOtherCard from "@/entities/other-card/ui/SkeletonOtherCard";
import "./OthersWorksList.scss";

type Props = {
  limit: number;
  artworks: TGallery[];
  isLoading: boolean;
};

export function OthersWorksList({ limit, artworks, isLoading }: Props) {
  return (
    <ul className="other-works__list grid grid--3">
      {isLoading
        ? [...Array(limit)].map((_, index) => (
            <li key={index} className="other-works__item">
              <SkeletonOtherCard />
            </li>
          ))
        : artworks.map((artwork, index) => {
            if (index + 1 <= artworks.length - limit) {
              return;
            }

            return (
              <li key={artwork.id} className="other-works__item">
                <OtherCard artwork={artwork} />
              </li>
            );
          })}
    </ul>
  );
}
