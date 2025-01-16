import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Git = () => {
    const markdownFilePath = '/GitNotes/Git.md';

    return (

        <>
            <Header text="Git Notes" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

};

export default Git;
