import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonFailures = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/DebugAndTroubleshoot/CommonFailures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Failures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonFailures;
