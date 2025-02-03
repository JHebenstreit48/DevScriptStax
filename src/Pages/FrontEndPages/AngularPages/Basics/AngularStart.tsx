import Header from "@/Components/Header";
import Notes from "@/Components/Notes";
import "@/CSS/Notes.css"


const GettingStarted = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/GettingStarted.md';

    return (

        <>
            <Header text="Getting Started" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default GettingStarted;
