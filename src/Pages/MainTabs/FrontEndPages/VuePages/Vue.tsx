import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Vue = () => {
    const markdownFilePath = '/VueNotes/Vue.md';

    return (

        <>
            <Header text="Vue" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Vue;
