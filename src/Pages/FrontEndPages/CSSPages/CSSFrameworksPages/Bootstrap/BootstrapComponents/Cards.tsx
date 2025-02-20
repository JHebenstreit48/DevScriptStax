import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
