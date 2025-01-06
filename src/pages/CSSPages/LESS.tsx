import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";
import "@/CSS/NotesTables.css"

const LESS = () => {
    const markdownFilePath = '/LESSNotes/LESS.md';

    return (

        <>
            <Header text="LESS" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default LESS;
