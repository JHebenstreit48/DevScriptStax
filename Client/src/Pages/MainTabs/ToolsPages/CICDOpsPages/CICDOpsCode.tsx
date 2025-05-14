import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const CICDOpsCode = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOpsCode';

    return (

        <>

            <Header text="CICD Ops Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CICDOpsCode;
