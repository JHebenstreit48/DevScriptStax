import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const ReactNative = () => {
    const markdownFilePath = '/ReactNative/ReactNative.md';

    return (

        <>
            <Header text="React Native" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactNative;
