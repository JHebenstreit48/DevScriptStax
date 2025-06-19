import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

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
