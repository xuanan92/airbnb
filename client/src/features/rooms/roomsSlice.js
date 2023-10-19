import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
export const roomsAdapter = createEntityAdapter({
  selectId: (room) => room._id,
});

const initialState = roomsAdapter.getInitialState({
  ids: ["a", "b", "c", "d", "e", "f", "g"],
  entities: {
    a: { _id: "a", location: "Room 1" },
    b: { _id: "b", location: "Room 2" },
    c: { _id: "c", location: "Room 3" },
    d: { _id: "d", location: "Room 4" },
    e: { _id: "e", location: "Room 5" },
    f: { _id: "f", location: "Room 6" },
    g: { _id: "g", location: "Room 7" },
  },
});

export const extenedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/api/rooms",
      transformResponse: (responseData) => {
        return roomsAdapter.setAll(initialState, responseData);
      },
      /* eslint-disable-next-line */
      provideTags: (result, error, arg) => [
        { type: "Rooms", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Rooms", id })),
      ],
    }),
    addRoom: builder.mutation({
      query: (newRoom) => ({
        url: "/api/rooms",
        method: "POST",
        body: newRoom,
      }),
      invalidateTags: [{ type: "Rooms", id: "LIST" }],
    }),
  }),
});

export const { useGetRoomsQuery, useAddRoomMutation } = extenedApiSlice;
