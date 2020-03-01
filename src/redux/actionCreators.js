import { createAction } from "@reduxjs/toolkit";
import Type from "./types";

export const addContact = createAction(Type.ADD_CONTACT);
export const deleteContact = createAction(Type.DELETE_CONTACT);
export const filterContacts = createAction(Type.FILTER_CONTACTS);
export const clearFilterVal = createAction(Type.CLEAR_FILTER);
