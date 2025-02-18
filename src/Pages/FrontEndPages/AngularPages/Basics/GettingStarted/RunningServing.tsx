import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


const AngularRunningServing = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/RunningAndServing.md';

    return (

        <>
            <Header text="Running & Serving An App" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularRunningServing;
