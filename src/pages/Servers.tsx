import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Servers = () => {
    const markdownFilePath = '/ServerNotes/Server.md';

    return (

        <>
            <Header text="Servers" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Servers;
