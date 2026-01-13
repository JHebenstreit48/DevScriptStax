import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonIssues = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/DebugAndTroubleshoot/CommonIssues';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Issues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonIssues;
