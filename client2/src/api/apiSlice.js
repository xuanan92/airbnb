import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5005/";
// const baseUrl = "https://103.216.113.219:5005/";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Rooms", "Users"],
  endpoints: () => ({}),
});
