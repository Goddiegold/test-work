import { createContext, useContext, useState } from "react";

const NewProjectContext = createContext({});

export const useNewProjectContext = () => useContext(NewProjectContext);

export const NewProjectContextProvider = ({ children }) => {
    const [ newProject, setNewProject ] = useState({
        title: "",
        researchType: "",
        goal: "",
        startDate: "",
        endDate: "",
    })

    return (
        <NewProjectContext.Provider value={{ newProject, setNewProject }}>
            { children }
        </NewProjectContext.Provider>
    )
}