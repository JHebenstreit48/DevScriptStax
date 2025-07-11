import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const BootstrapCarousel = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Carousel';

    return (

        <>
            <Header text="Bootstrap Carousel" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapCarousel;
