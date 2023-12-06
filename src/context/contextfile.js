import { createContext, useState } from "react";

export const User = createContext()
export const UserContext = ({ children }) => {
    const [sidebar, setsidebar] = useState(false);
    const [modal, setmodal] = useState(false)
    return (
        <User.Provider value={{ sidebar, setsidebar, modal, setmodal }}>
            {children}
        </User.Provider>
    )
}

