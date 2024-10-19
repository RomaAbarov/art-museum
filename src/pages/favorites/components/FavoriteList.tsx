import { OtherCard } from "@/entities/other-card";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { selectAllFavorites } from "../model/favoritesSlice";
import "./FavoriteList.scss";

export default function FavoriteList() {
  const favorites = useAppSelector(selectAllFavorites);

  return (
    <ul className="favorites__list grid grid--3">
      {favorites.map((artwork) => (
        <li key={artwork.id} className="favorites__item">
          <OtherCard artwork={artwork} />
        </li>
      ))}
    </ul>
  );
}
