import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
