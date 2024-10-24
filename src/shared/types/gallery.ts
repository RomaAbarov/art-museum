import { TArtwork } from "./artwork";

type PickTArtwork = Pick<
  TArtwork,
  "id" | "title" | "artist_title" | "image_id" | "alt_text" | "iiif_url"
>;

export type TGallery = PickTArtwork & {
  score: number;
  date_end: number;
};
