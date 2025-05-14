import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CoreConcepts = () => {
    const markdownFilePath = '/BackEndNotes/APINotes/APIFundamentals/CoreConcepts.md';

    return (

        <>
            <Header text="Core API Concepts" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default CoreConcepts;
