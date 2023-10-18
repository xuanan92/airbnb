import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
const roomsAdapter = createEntityAdapter({
  selectId: (room) => room._id,
});

const initialState = roomsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/rooms",
      transformResponse: (response) => {
        const loadedRoom = response.map((room) => room);
        return roomsAdapter.setAll(initialState, loadedRoom);
      },
      providesTags: ["Rooms"],
    }),
  }),
});

export const { useGetRoomsQuery } = extendedApiSlice;
