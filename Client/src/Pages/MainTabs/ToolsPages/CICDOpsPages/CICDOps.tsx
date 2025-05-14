import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const CICDOps = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOps.md';

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
