import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
