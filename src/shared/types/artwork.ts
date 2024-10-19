export type TArtwork = {
  id: number;
  title: string;
  artist_title: string | null;
  artist_display: string;
  dimensions: string;
  credit_line: string;
  image_id: string | null;
  alt_text: string | undefined;
  iiif_url: string;
};
