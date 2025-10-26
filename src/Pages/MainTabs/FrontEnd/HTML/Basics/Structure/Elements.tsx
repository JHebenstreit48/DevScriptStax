import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";


const Elements = () => {
    const markdownFilePath = 'FrontEnd/HTMLNotes/Basics/Structure/Elements';

    return (

        <>
            <Header text="Elements" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Elements;
