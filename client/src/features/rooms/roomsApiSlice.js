import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

export const roomsAdapter = createEntityAdapter({});

const initialState = roomsAdapter.getInitialState();

export const roomsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/rooms",
      transformResponse: (responseData) => {
        const loadedRooms = responseData.map((room) => {
          room.id = room._id;
          return room;
        });
        return roomsAdapter.setAll(initialState, loadedRooms);
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
  roomsApiSlice;

export const selectRoomsResult = roomsApiSlice.endpoints.getRooms.select();
const selectRoomsData = createSelector(
  selectRoomsResult,
  (roomsResult) => roomsResult.data,
);
3;
export const {
  selectAll: selectAllRooms,
  selectById: selectRoomById,
  selectIds: selectRoomIds,
  // Pass in a selector that returns the room slice of state
} = roomsAdapter.getSelectors(
  (state) => selectRoomsData(state) ?? initialState,
);
