import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const CICDOpsCode = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOpsCode.md';

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
