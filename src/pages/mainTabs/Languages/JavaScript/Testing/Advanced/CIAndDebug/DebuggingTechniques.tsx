import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DebuggingTechniques = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/CIAndDebug/DebuggingTechniques';

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
