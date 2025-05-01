import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";


const HTMLElements = () => {
    const markdownFilePath = '/FrontEndNotes/HTMLNotes/HTMLBasics/HTMLElements.md';

    return (

        <>
            <Header text="HTML Elements" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default HTMLElements;
