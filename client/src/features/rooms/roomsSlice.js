import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
export const roomsAdapter = createEntityAdapter({
  selectId: (room) => room._id,
});

const initialState = roomsAdapter.getInitialState();

export const extenedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/rooms",
      transformResponse: (response) =>
        roomsAdapter.setAll(initialState, response),
      /* eslint-disable-next-line */
      provideTags: (result, error, arg) => [
        { type: "Rooms", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Rooms", id })),
      ],
    }),
    addRoom: builder.mutation({
      query: (room) => ({
        url: "/rooms",
        method: "POST",
        body: room,
      }),
      invalidateTags: [{ type: "Rooms", id: "LIST" }],
    }),
  }),
});

export const { useGetRoomsQuery, useAddRoomMutation } = extenedApiSlice;
