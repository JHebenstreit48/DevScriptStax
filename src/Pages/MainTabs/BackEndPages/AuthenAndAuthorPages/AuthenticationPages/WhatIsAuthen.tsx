import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const WhatIsAuthen = () => {
    const markdownFilePath = 'BackEndNotes//AuthenAndAuthorNotes/AuthenticationNotes/WhatIsAuthentication';

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
