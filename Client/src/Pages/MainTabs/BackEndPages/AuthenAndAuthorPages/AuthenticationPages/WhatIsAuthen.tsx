import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const WhatIsAuthen = () => {
    const markdownFilePath = '/BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/WhatIsAuthentication.md';

    return (

        <>
            <Header text="What Is Authentication" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default WhatIsAuthen;
