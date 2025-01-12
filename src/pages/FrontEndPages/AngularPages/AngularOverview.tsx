import Header from "@/Components/Header";
import Notes from "@/Components/Notes";
import "@/CSS/Notes.css"

const AngularOverview = () => {
    const markdownFilePath = '/AngularNotes/Angular.md';

    return (

        <>
            <Header text="Angular Overview" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularOverview;
