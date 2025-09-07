import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const LESS = () => {
    const markdownFilePath = '/LESSNotes/LESS';

    return (

        <>
            <Header text="LESS" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default LESS;
