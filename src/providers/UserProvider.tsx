import React, { createContext, useCallback, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  rol: "USER" | "ADMIN";
}

interface UserProviderValue {
  user: User;
  authenticated: boolean;
  setUser: (user: User | null) => void;
}

const INITIAL_USER: User = {
  id: 0,
  username: "",
  email: "",
  rol: "USER",
};

const UserContext = createContext<UserProviderValue>({
  user: INITIAL_USER,
  authenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});

export function UserProvider(props: { children: React.ReactNode }) {
  const [user, _setUser] = useState<User>(INITIAL_USER);
  const authenticated = user.id !== 0;

  const setUser = useCallback((user: User | null) => {
    if (user) {
      _setUser(user);
    } else {
      _setUser(INITIAL_USER);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, authenticated, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
