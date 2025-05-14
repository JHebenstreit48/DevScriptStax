import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactNative = () => {
    const markdownFilePath = '/ReactNative/ReactNative';

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
