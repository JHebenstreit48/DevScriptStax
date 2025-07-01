import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const CICDOps = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOps';

    return (

        <>

            <Header text="CICD Ops" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CICDOps;
