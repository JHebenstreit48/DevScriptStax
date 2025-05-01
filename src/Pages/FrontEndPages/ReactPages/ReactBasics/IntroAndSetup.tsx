import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const React = () => {
    const markdownFilePath = '/ReactNotes/React.md';

    return (

        <>
            <Header text="React" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default React;
