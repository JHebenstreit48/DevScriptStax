import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Redux = () => {
    const markdownFilePath = '/ReduxNotes/Redux';

    return (

        <>
            <Header text="Redux" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Redux;
