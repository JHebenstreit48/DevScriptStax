import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactFullStack = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStack';

    return (

        <>
            <Header text="Full-Stack React" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactFullStack;
