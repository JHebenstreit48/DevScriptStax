import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OperationsAndColors = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts/OperationsAndColors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Operations & Colors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OperationsAndColors;
