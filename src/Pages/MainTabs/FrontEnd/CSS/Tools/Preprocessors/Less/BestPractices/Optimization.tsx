import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Optimization = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Less/BestPractices/Optimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimization;
