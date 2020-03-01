import { createReducer } from "@reduxjs/toolkit";
import Type from "./types";

const INITIAL_STATE = {
  contacts: [],
  filter: "",
  searchResult: []
};

export const reducer = createReducer(
  { ...INITIAL_STATE },
  {
    [Type.ADD_CONTACT]: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, payload]
    }),
    [Type.DELETE_CONTACT]: (state, { payload }) => ({
      ...state,
      contacts: state.contacts.filter(item => item.id !== payload)
    }),
    [Type.FILTER_CONTACTS]: (state, { payload }) => ({
      ...state,
      filter: payload,
      searchResult: state.contacts.filter(item =>
        item.name.toLowerCase().includes(payload.toLowerCase())
      )
    }),
    [Type.CLEAR_FILTER]: state => ({
      ...state,
      filter: "",
      searchResult: []
    })
  }
);
