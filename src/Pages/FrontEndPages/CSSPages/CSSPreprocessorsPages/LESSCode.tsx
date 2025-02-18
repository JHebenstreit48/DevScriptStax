import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const LESSCode = () => {
    const markdownFilePath = '/LESSNotes/LESSCode.md';

    return (

        <>

            <Header text="LESS" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default LESSCode;
