import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const LESS = () => {
    const markdownFilePath = '/LESSNotes/LESS';

    return (

        <>
            <Header text="LESS" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default LESS;
