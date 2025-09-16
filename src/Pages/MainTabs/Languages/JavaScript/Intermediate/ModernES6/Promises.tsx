import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Promises = () => {
    const markdownFilePath = 'Languages/JavaScript/Intermediate/ModernES6/Promises';

    return (

        <>
            <Header text="JS Promises and Async/Await" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Promises;
