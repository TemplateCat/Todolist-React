import React, { createContext, useState } from 'react'

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [stateModal, setStateModal] = useState(false);

    const data = { stateModal, setStateModal };

    return (
        <ModalContext.Provider value={data} >
            {children}
        </ModalContext.Provider>
    );
}

export { ModalProvider };
export default ModalContext;