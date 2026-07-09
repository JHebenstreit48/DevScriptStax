import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath =
    'FrontEnd/Angular/Testing/Unit/Introduction';

  return (
    <>
      <PageTitle title="Unit Testing in Angular" />
      <Notes
        filePath={markdownFilePath}
      />
    </>
  );
};

export default Introduction;