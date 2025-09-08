import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath =
    'FrontEndNotes/AngularNotes/Testing/Unit/Introduction';

  return (
    <>
      <Header />
      <PageTitle title="Unit Testing in Angular" />
      <Notes
        filePath={markdownFilePath}
      />
    </>
  );
};

export default Introduction;