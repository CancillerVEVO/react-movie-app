import React, { createContext, useState } from "react";

export interface User {
  id: number;
  nombre: string;
  email: string;
  rol: "USER" | "ADMIN";
}

type UserProviderValue = [User | null, (user: User | null) => void];

export const UserContext = createContext<UserProviderValue>([null, () => {}]);

export function UserProvider(props: { children: React.ReactNode }) {
  const value = useState<User | null>(null);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
