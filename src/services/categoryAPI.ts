import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test2.sionic.ru/api/",
  }),
  tagTypes: ["Categories"],
  endpoints: (build) => ({
    getAllCategories: build.query<{ id: number; name: string }[], any>({
      query: () => ({
        url: "Categories",
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
