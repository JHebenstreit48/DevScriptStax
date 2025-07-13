import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Vue = () => {
    const markdownFilePath = '/VueNotes/Vue';

    return (

        <>
            <Header text="Vue" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Vue;
