import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TArtwork } from "../types";

export const apiArtworks = createApi({
  reducerPath: "apiArtworks",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.artic.edu/api/v1/artworks/",
  }),
  endpoints: (builder) => ({
    getArtworkById: builder.query<TArtwork, { id: string; fields: string }>({
      query: ({ id, fields }) => `${id}?fields=${fields}`,
      transformResponse: (res: any) => {
        const iiif_url: string = res.config.iiif_url;

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
        } = res.data;

        const result = {
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
      },
    }),
  }),
});

export const { useGetArtworkByIdQuery } = apiArtworks;
