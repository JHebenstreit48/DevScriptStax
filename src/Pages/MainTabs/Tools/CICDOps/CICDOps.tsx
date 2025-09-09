import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

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
