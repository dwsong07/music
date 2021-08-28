import React, { createContext, useContext } from "react";
import RootStore from "./RootStore";

export const StoreContext = createContext<RootStore>({} as RootStore);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const rootStore = new RootStore();

    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);
