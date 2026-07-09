import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DebuggingTechniques = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/BestPractices/DebuggingTechniques';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingTechniques;
