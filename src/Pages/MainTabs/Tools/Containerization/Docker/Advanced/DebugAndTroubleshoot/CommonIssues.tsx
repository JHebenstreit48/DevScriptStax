import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonIssues = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/DebugAndTroubleshoot/CommonIssues';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Issues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonIssues;
