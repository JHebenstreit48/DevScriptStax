import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DebuggingTechniques = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/BestPractices/DebuggingTechniques';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Debugging Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingTechniques;
