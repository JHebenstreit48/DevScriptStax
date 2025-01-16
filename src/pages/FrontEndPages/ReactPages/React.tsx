import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const React = () => {
    const markdownFilePath = '/ReactNotes/React.md';

    return (

        <>
            <Header text="React" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

};

export default React;
