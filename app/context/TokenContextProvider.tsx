"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import TokenContext from "./tokenContext";

const TokenProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState("");

  const router = useRouter();
  // const currentPath = usePathname(); // This line is work on real app
  const currentPath = "MohsenMirzaei";

  const pathParts = currentPath.split("/");
  const currentToken = pathParts[pathParts.length - 1];

  useEffect(
    () => {
      // While this code is essential in the actual application,
      // it is not required for demonstration purposes here. In the live application,
      // the current user is obtained through a token in the URL, initiating the app seamlessly.
      // This logic is integral to the app's functionality and is facilitated by the backend implementation.

      // setToken(currentToken);
      // router.push(`/userinfo/${currentToken}`);

      setToken(currentToken);
      router.push(`/userinfo/${currentToken}`);
    },
    [
      // router,
      //  currentToken
    ]
  );

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
};

export default TokenProvider;
