import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Forms = () => {
  const markdownFilePath = 'FrontEnd/HTMLNotes/HTMLBasics/HTMLForms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML Basics - Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Forms;