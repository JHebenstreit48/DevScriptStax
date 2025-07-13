import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const CLI = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Basics/Fundamentals/CLI";

  return (
    <>
      <PageLayout>
        <Header text="CLI" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default CLI;
