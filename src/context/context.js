import { createContext } from "react";

export const ColorContext = createContext()

const ColorProvider = ({children}) => {
    return (
        <ColorContext.Provider value={{Jokanola: "Yusuff"}}>
            {children}
        </ColorContext.Provider>
    );
}
 
export default ColorProvider;