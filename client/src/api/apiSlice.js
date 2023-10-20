import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://airbnbtweak.cyclic.app/";
// const baseUrl = "https://103.216.113.219:5005/";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Rooms", "Users"],
  endpoints: () => ({}),
});
