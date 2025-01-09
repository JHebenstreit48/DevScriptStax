import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSS = () => {
    const markdownFilePath = '/CSSNotes/CSS.md';

    return (

        <>
           <Header text="CSS" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSS;
