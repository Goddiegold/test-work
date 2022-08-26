import { createContext, useContext, useState } from "react";

const ProjectsContext = createContext({});

export const useProjectsContext = () => useContext(ProjectsContext);

export const ProjectsContextProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            { children }
        </ProjectsContext.Provider>
    )
}
