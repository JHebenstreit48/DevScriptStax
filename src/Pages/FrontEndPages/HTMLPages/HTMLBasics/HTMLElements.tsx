import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";


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
