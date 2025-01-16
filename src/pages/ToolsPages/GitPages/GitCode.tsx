import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const GitCode = () => {
    const markdownFilePath = '/GitNotes/GitCode.md';

    return (

        <>

            <Header text="Git Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default GitCode;
