import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Vue = () => {
    const markdownFilePath = '/VueNotes/Vue.md';

    return (

        <>
            <Header text="Vue" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

};

export default Vue;
