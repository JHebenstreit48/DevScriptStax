import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Node = () => {
    const markdownFilePath = '/NodeNotes/Node.md';

    return (

        <>
            <Header text="Node JS" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent
            "/>
        </>
    );

};

export default Node;
