import { TArtwork } from "./artwork";

export type TGallery = Pick<
  TArtwork,
  "id" | "title" | "artist_title" | "image_id" | "alt_text" | "iiif_url"
>;
