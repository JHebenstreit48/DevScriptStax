import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const BootstrapCarousel = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Carousel.md';

    return (

        <>
            <Header text="Bootstrap Carousel" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapCarousel;
