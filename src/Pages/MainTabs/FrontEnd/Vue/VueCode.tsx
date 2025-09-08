import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const VueCode = () => {
    const markdownFilePath = '/VueNotes/VueCode';

    return (

        <>

            <Header text="Vue Notes Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default VueCode;
