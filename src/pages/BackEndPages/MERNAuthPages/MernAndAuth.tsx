import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const MernAndAuth = () => {
    const markdownFilePath = "/MernAndAuth/MernAndAuth.md";

    return (

        <>
            <Header text="MERN Stack" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );
}

export default MernAndAuth;
