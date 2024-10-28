import { TArtwork, TGallery } from "@/shared/types";
import axios from "axios";

export default class ApiSearch {
  static async getArtworks(
    value: string,
    limit: number,
    page: number,
    fields: string
  ) {
    const response = await axios
      .get(
        `https://api.artic.edu/api/v1/artworks/search?q=${value}&query[term][is_public_domain]=true&page=${page}&limit=${limit}&fields=${fields}`
      )
      .then((res) => {
        const iiif_url: string = res.data.config.iiif_url;

        const pagination: {
          total: number;
          limit: number;
          offset: number;
          total_pages: number;
          current_page: number;
        } = res.data.pagination;

        const result: TGallery[] = res.data.data.map(
          (r: {
            _score: number;
            id: number;
            title: string;
            artist_title: string | null;
            image_id: string | null;
            thumbnail: { alt_text: string } | null;
            iiif_url: string;
            date_end: number;
          }) => {
            // if (r.image_id === null) {
            //   return undefined;
            // }

            return {
              score: r._score,
              id: r.id,
              title: r.title,
              artist_title: r.artist_title,
              image_id: r.image_id,
              alt_text: r.thumbnail?.alt_text,
              iiif_url: iiif_url,
              date_end: r.date_end,
            };
          }
        );

        return {
          pagination,
          data: result,
        };
      });

    return response;
  }

  static async getArtwork(id: string, fields: string) {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}?fields=${fields}`)
      .then((res) => {
        const iiif_url: string = res.data.config.iiif_url;

        const data: {
          id: number;
          title: string;
          artist_title: string | null;
          artist_display: string;
          dimensions: string;
          credit_line: string;
          image_id: string | null;
          thumbnail: { alt_text: string } | null;
          iiif_url: string;
        } = res.data.data;

        const result: TArtwork = {
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          artist_display: data.artist_display,
          dimensions: data.dimensions,
          credit_line: data.credit_line,
          image_id: data.image_id,
          alt_text: data.thumbnail?.alt_text,
          iiif_url: iiif_url,
        };

        return result;
      });

    return response;
  }
}
