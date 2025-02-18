import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


const AngularIntro = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/Introduction.md';

    return (

        <>
            <Header text="Angular Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularIntro;
