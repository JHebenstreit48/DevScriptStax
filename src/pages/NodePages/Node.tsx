import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Node = () => {
    const markdownFilePath = '/NodeNotes/Node.md';

    return (

        <>
             <Header text="Node JS" />
            <PageSetup 
            filePath={markdownFilePath}
            markdownContent="markdownContent
            "/>
        </>
    );

};

export default Node;
