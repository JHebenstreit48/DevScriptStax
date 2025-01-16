import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Testing = () => {
    const markdownFilePath = './TestingNotes/Testing.md';
    return (

        <>

            <Header text="Testing" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default Testing;
