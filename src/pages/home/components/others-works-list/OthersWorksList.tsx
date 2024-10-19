import { OtherCard } from "@/entities/other-card";
import { TGallery } from "@/shared/types";
import "./OthersWorksList.scss";

type Props = {
  limit: number;
  artworks: TGallery[];
};

export default function OthersWorksList({ limit, artworks }: Props) {
  return (
    <ul className="other-works__list grid grid--3">
      {artworks.map((artwork, index) => {
        if (index + 1 <= limit) {
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
