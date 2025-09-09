import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const CICDOpsCode = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOpsCode';

    return (

        <>

            <Header text="CICD Ops Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default CICDOpsCode;
