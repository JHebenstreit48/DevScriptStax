import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OperationsAndColors = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts/OperationsAndColors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Operations & Colors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OperationsAndColors;
