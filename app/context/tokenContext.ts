import { createContext } from "react";

interface TokenContextType {
  token: string;
}

const TokenContext = createContext<TokenContextType>({} as TokenContextType);

export default TokenContext;
