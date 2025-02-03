import Header from "@/Components/Header";
import Notes from "@/Components/Notes";
import "@/CSS/Notes.css"


const Components = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularCoreConcepts/Components.md';

    return (

        <>
            <Header text="Components" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Components;
