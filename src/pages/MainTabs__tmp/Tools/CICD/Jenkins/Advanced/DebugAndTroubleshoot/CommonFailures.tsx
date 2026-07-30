import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
