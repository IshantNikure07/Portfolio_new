import React, { createContext, useState } from 'react';

export const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);

    return (
        <SpinnerContext.Provider value={{ loader, setLoader }}>
            {children}
        </SpinnerContext.Provider>
    );
};
