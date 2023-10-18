import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl_local = "http://localhost:5005/";
const baseUrl_public = "https://103.216.113.219:5005/";
let baseUrl;
/* eslint-disable-next-line */
if (process.env.NODE_ENV === "production") {
  baseUrl = baseUrl_public;
} else {
  baseUrl = baseUrl_local;
}
// const baseUrl = "https://103.216.113.219:5005/";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Rooms", "Users"],
  endpoints: () => ({}),
});
