import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const BootstrapCards = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Cards.md';

    return (

        <>
            <Header text="Bootstrap Cards" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapCards;
