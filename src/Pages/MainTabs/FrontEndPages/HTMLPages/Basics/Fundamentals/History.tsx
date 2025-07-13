import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const History = () => {
  const markdownFilePath =
    "FrontEndNotes/HTMLNotes/Basics/Fundamentals/History";

  return (
    <>
      <Header text="History" />
      <Notes filePath={markdownFilePath} />
    </>
  );
};

export default History;