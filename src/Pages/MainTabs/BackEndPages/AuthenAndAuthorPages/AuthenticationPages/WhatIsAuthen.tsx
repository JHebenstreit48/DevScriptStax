import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const WhatIsAuthen = () => {
    const markdownFilePath = 'BackEndNotes//AuthenAndAuthorNotes/AuthenticationNotes/WhatIsAuthentication';

    return (

        <>
            <Header text="What Is Authentication" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default WhatIsAuthen;
