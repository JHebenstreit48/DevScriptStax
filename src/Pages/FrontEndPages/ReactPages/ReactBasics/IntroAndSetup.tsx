import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
