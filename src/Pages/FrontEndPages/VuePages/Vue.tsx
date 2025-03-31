import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
