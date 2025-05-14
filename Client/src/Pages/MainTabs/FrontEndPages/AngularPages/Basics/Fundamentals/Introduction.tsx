import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";


const AngularIntro = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/Introduction';

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
