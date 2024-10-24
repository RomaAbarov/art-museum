import { SortBy } from "../consts";
import { TGallery } from "../types";

export default function useSortedArtworks(
  artworks: TGallery[],
  sortBy: string
) {
  switch (sortBy) {
    case SortBy.Ascending:
      artworks.sort((a, b) => a["date_end"] - b["date_end"]);
      break;
    case SortBy.Descending:
      artworks.sort((a, b) => b["date_end"] - a["date_end"]);
      break;
    case SortBy.Alphabet:
      artworks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      artworks.sort((a, b) => b["score"] - a["score"]);
  }

  return artworks;
}
