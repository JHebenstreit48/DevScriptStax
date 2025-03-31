import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const ReactFullStackCode = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStackCode.md';

    return (

        <>

            <Header text="Full-Stack React Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ReactFullStackCode;
