import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl_local = "https://localhost:5005/";
const baseUrl_public = "https://103.216.113.219:5005/";
let baseUrl = "";
if (process.env.NODE_ENV === "production") {
  baseUrl = baseUrl_public;
} else {
  baseUrl = baseUrl_local;
}
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});
