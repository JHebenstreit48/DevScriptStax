import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const CICDOps = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOps';

    return (

        <>

            <Header text="CICD Ops" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CICDOps;
