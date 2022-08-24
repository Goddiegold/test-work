import { createContext, useContext, useState } from "react";

const ProjectDataSourceContext = createContext({});

export const useProjectDataSourceContext = () => useContext(ProjectDataSourceContext);

export const ProjectDataSourceContextProvider = ({ children }) => {
    const [ sourceSelected, setSourceSelected ] = useState(null);
    const [ researchItem, setResearchItem ] = useState(null);

    return (
        <ProjectDataSourceContext.Provider value={{ sourceSelected, setSourceSelected, researchItem, setResearchItem }}>
            { children }
        </ProjectDataSourceContext.Provider>
    )
}