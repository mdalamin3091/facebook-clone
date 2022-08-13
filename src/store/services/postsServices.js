import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsServices = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    allPosts: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const { useAllPostsQuery } = postsServices;
