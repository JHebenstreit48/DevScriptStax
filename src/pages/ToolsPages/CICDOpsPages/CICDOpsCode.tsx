import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const CICDOpsCode = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOpsCode.md';

    return (

        <>

            <Header text="CICD Ops Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default CICDOpsCode;
