import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ReduxCode = () => {
    const markdownFilePath = '/ReduxNotes/ReduxCode';

    return (

        <>

            <Header text="Redux Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ReduxCode;
