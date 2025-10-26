import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapCarousel = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Carousel';

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
