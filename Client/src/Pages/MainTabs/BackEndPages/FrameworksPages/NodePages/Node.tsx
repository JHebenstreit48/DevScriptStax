import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Node = () => {
    const markdownFilePath = '/NodeNotes/Node';

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
