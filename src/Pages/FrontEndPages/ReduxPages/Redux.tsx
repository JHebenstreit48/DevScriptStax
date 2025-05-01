import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Redux = () => {
    const markdownFilePath = '/ReduxNotes/Redux.md';

    return (

        <>
            <Header text="Redux" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Redux;
