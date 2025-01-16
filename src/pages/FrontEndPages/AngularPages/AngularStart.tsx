import Header from "@/Components/Header";
import Notes from "@/Components/Notes";
import "@/CSS/Notes.css"


const AngularStart = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/AngularGettingStarted.md';

    return (

        <>
            <Header text="Angular Getting Started" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularStart;
