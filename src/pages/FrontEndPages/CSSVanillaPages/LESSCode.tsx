import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const LESSCode = () => {
    const markdownFilePath = '/LESSNotes/LESSCode.md';

    return (

        <>

            <Header text="LESS Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default LESSCode;
