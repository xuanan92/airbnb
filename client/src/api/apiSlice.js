import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.216.113.219:5005/" }),
  tagTypes: ["Rooms", "Users"],
  endpoints: () => ({}),
});
