import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
export const roomsAdapter = createEntityAdapter({
  selectId: (room) => room._id,
});

const initialState = roomsAdapter.getInitialState({});

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
    deleteRoom: builder.mutation({
      query: ({ id }) => ({
        url: `api/rooms`,
        method: "DELETE",
        body: { id },
      }),
      invalidateTags: [{ type: "Rooms", id: "LIST" }],
    }),
  }),
});

export const { useGetRoomsQuery, useAddRoomMutation, useDeleteRoomMutation } =
  extenedApiSlice;
