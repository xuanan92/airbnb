import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
export const roomsAdapter = createEntityAdapter({
  selectId: (room) => room._id,
});

const initialState = roomsAdapter.getInitialState({
  room: [{ id: "100", location: "Dineye" }],
  status: "idle",
  error: null,
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/rooms",
      transformResponse: (responseData) => {
        return roomsAdapter.upsertMany(initialState, responseData);
      },
      /* eslint-disable-next-line */
      provideTags: (result, error, arg) => [
        { type: "Rooms", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Rooms", id })),
      ],
    }),
    addRoom: builder.mutation({
      query: (newRoom) => ({
        url: "/rooms",
        method: "POST",
        body: newRoom,
      }),
      invalidateTags: [{ type: "Rooms", id: "LIST" }],
    }),
    deleteRoom: builder.mutation({
      query: ({ id }) => ({
        url: `/rooms`,
        method: "DELETE",
        body: { id },
      }),
      invalidateTags: [{ type: "Rooms", id: "LIST" }],
    }),
  }),
});

export const { useGetRoomsQuery, useAddRoomMutation, useDeleteRoomMutation } =
  extendedApiSlice;
