import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://airbnbtweak.cyclic.app/";
let baseUrl;
/*eslint-disable*/
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://airbnbtweak.cyclic.app/api";
} else {
  baseUrl = "http://localhost:5005/api";
}
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Rooms", "Users"],
  endpoints: () => ({}),
});
