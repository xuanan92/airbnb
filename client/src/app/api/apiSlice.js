import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://airbnbtweak.cyclic.app/";
let baseUrl;
let baseUrl_extend = "";
/*eslint-disable*/
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://airbnbtweak.cyclic.app/";
} else {
  baseUrl = "http://localhost:5005/";
}
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}${baseUrl_extend}` }),
  tagTypes: ["Rooms", "Users"],
  endpoints: () => ({}),
});
