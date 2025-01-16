import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const ReactNative = () => {
    const markdownFilePath = '/ReactNative/ReactNative.md';

    return (

        <>
            <Header text="React Native" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default ReactNative;
