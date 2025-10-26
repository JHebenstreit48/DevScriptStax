import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Forms = () => {
  const markdownFilePath = 'FrontEnd/HTMLNotes/HTMLBasics/HTMLForms";

  return (
    <>
      <PageLayout>
        <Header text="HTML Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Forms;