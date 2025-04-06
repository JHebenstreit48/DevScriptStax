import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";


const AngularIntro = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/Introduction.md';

    return (

        <>
            <Header text="Angular Introduction" size="md" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularIntro;
