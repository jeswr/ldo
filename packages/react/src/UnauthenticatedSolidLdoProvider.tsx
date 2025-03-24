/* istanbul ignore file */
import React, { useCallback, useMemo } from "react";
import type { FunctionComponent, PropsWithChildren } from "react";
import type { LoginOptions, SessionInfo } from "./SolidAuthContext";
import { SolidAuthContext } from "./SolidAuthContext";
import libraryFetch from "cross-fetch";
import { SolidLdoProvider } from "./SolidLdoProvider";

const DUMMY_SESSION: SessionInfo = {
  isLoggedIn: false,
  webId: undefined,
  clientAppId: undefined,
  sessionId: "no_session",
  expirationDate: undefined,
};

export const UnauthenticatedSolidLdoProvider: FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  const login = useCallback(
    async (_issuer: string, _options?: LoginOptions) => {
      throw new Error(
        "login is not available for a UnauthenticatedSolidLdoProvider",
      );
    },
    [],
  );

  const logout = useCallback(async () => {
    throw new Error(
      "logout is not available for a UnauthenticatedSolidLdoProvider",
    );
  }, []);

  const signUp = useCallback(
    async (_issuer: string, _options?: LoginOptions) => {
      throw new Error(
        "signUp is not available for a UnauthenticatedSolidLdoProvider",
      );
    },
    [],
  );

  const solidAuthFunctions = useMemo(
    () => ({
      runInitialAuthCheck: () => {},
      login,
      logout,
      signUp,
      session: DUMMY_SESSION,
      ranInitialAuthCheck: true,
      fetch: libraryFetch,
    }),
    [login, logout, signUp],
  );

  return (
    <SolidAuthContext.Provider value={solidAuthFunctions}>
      <SolidLdoProvider>{children}</SolidLdoProvider>
    </SolidAuthContext.Provider>
  );
};
