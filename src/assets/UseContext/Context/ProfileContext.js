import { createContext } from "react";

export const profileContext = createContext(null); // state

export const ProfileProvider = profileContext.Provider; // useState
