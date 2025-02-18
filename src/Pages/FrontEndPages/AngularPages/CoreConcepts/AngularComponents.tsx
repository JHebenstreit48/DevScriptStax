import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


const Components = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularCoreConcepts/Components.md';

    return (

        <>
            <Header text="Angular Components" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Components;
