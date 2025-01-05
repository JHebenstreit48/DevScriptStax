import "../CSS/Header.css";
import "../CSS/NotesTables.css"
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

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
