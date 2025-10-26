import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Attributes = () => {
    const markdownFilePath = 'FrontEnd/HTMLNotes/HTMLBasics/HTMLAttributes';

    return (

        <>
            <Header text="HTML Attributes" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

}

export default Attributes;
