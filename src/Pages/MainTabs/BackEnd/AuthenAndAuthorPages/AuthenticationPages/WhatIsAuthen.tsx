import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

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
