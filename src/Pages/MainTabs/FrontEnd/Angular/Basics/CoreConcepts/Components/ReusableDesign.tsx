import PageLayout from '@/components/navigationUI/pageLayout';
import Notes from '@/components/pageComponents/notes/notes';

const ReusableDesign = () => {
  const markdownFilePath =
    "FrontEnd/Angular/Basics/CoreConcepts/Components/ReusableDesign";

  return (
    <>
      <PageLayout>
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReusableDesign;